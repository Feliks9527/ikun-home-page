<template>
	<div v-show="show" class="to-top-container" @click="handleClick" >
		Top
	</div>
</template>

<script>
export default {
	// name: "index",
	data(){
		return {
			show: false
		}
	},
	created() {
		this.$bus.$on("mainScroll", this.handleScroll)
	},
	beforeDestroy() {
		this.$bus.$off("mainScroll", this.handleScroll)
	},
	
	methods: {
		handleScroll(dom) {
			if(!dom) {
				this.show = false
				return
			}
			this.show = dom.scrollTop >= 500
		},
		handleClick(){
			this.$bus.$emit("setMainScroll", 0)
		}
	}
}
</script>

<style scoped lang="scss">
.to-top-container {
	position: fixed;
	right: 20px;
	bottom: 20px;
	width: 40px;
	height: 40px;
	background-color: #42b983;
	color: #fff;
	text-align: center;
	line-height: 40px;
	cursor: pointer;
	border-radius: 50%;
	z-index: 999;
}
</style>
