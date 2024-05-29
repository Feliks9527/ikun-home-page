<template>
	<div class="fiction-detail-container" ref="fictionDetail">
		<div v-for="(item,index) in data" :key="index">
			<h2 :id="item.title">{{item.title}}</h2>
			<div v-html="formatContent(item.content)"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: "FictionDetail",
	props: {
		data: {
			type: Array,
			default: () => []
		}
	},
	methods: {
		formatContent(content){
			return content.replace(/\n/g, '<br>')
		},
	}
}
</script>

<style scoped lang="scss">
.fiction-detail-container{
	scroll-behavior: smooth;
	h2 {
		margin-top: 100px;
	}
}
</style>
