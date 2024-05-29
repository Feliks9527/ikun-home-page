<script>
export default {
	name: "imageLoader",
	props: {
		src: {
			type: String,
			required: true
		},
		placeholder: {
			type: String,
			required: true,
		},
		duration: {
			type: Number,
			default: 500
		}
	},
	data() {
		return {
			loaded: false, // 原图是否加载完成
			allDone: false // 全部加载完成
		}
	},
	computed: {
		originOpacity() {
			return this.loaded ? 1 : 0
		}
	},
	methods: {
		handleLoaded() {
			this.loaded = true;
			setTimeout(() => {
				this.allDone = true
				this.$emit('load')
			}, this.duration)
		}
	}
}
</script>

<template>
	<div class="image-loader-container">
		<img v-if="!allDone" class="placeholder" :src="placeholder" alt="">
		<img class="origin" :src="src" alt="" @load="handleLoaded" :style="{opacity: originOpacity, transition: `${duration}ms`}">
	</div>
</template>

<style scoped lang="scss">
@import "~@/styles/mixin.scss";

.image-loader-container{
	width: 100%;
	height: 100%;
	img {
		@include self-fill();
		object-fit: cover;
		
		&.placeholder {
			filter: blur(10px);
			transition: filter 0.5s;
		}
	}
}
</style>
