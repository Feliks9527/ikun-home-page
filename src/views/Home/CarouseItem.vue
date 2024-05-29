<template>
	<div class="carousel-item-container" ref="out" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
		<div class="carousel-img" ref="inner" :style="imagePosition">
			<ImageLoader
				:src="carousel.imgUrl"
				:alt="carousel.title"
				:placeholder="carousel.link"
				:duration="1000"
				@load="showWords"
			/>
		</div>
		<div class="title" ref="title">{{ carousel.desc }}</div>
		<div class="desc" ref="desc">{{ carousel.title }}</div>
	</div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader/index.vue";

export default {
	props: ["carousel"],
	components: {
		ImageLoader
	},
	computed: {
		imagePosition() {
			if(!this.outSize || !this.innerSize) return;
			const extraWidth = this.innerSize.width - this.outSize.width;
			const extraHeight = this.innerSize.height - this.outSize.height;
			const left = (-extraWidth / this.outSize.width) * this.mouseX;
			const top = (-extraHeight / this.outSize.height) * this.mouseY;
			
			return {
				transform: `translate(${left}px, ${top}px)`
			}
		},
		center() {
			return {
				x: this.outSize.width / 2,
				y: this.outSize.height / 2
			}
		}
	},
	data() {
		return {
			titleWidth: 0,
			descWidth: 0,
			outSize: null, // 外容器尺寸
			innerSize: null, // 内容图片尺寸
			mouseX: 0,
			mouseY: 0
		}
	},
	mounted() {
		this.titleWidth = this.$refs.title.clientWidth;
		this.descWidth = this.$refs.desc.clientWidth;
		
		this.setSize();
		// 初始化鼠标位置--中间
		this.mouseX = this.center.x;
		this.mouseY = this.center.y;
		window.addEventListener('resize', this.setSize);
	},
	destroyed() {
		window.removeEventListener('resize', this.setSize);
	},
	methods: {
		showWords() {
			this.$refs.title.style.opacity = 1;
			this.$refs.title.style.width = 0;
			// 强制重绘
			this.$refs.title.offsetWidth; //reflow
			this.$refs.title.style.transition = '1s';
			this.$refs.title.style.width = this.titleWidth + 'px';
			
			this.$refs.desc.style.opacity = 1;
			this.$refs.desc.style.width = 0;
			this.$refs.desc.offsetWidth; //reflow
			this.$refs.desc.style.transition = '1s';
			this.$refs.desc.style.width = this.descWidth + 'px';
		},
		
		// 设置尺寸
		setSize() {
			this.outSize = {
				width: this.$refs.out.clientWidth,
				height: this.$refs.out.clientHeight
			}
			this.innerSize = {
				width: this.$refs.inner.clientWidth,
				height: this.$refs.inner.clientHeight
			}
		},
		
		// 鼠标移动事件
		handleMouseMove(e) {
			const rect = this.$refs.out.getBoundingClientRect();
			
			this.mouseX = e.clientX - rect.left;
			this.mouseY = e.clientY - rect.top;
		},
		// 鼠标离开--回到中间
		handleMouseLeave() {
			this.mouseX = this.center.x;
			this.mouseY = this.center.y;
		}
	}
}
</script>

<style scoped lang="scss">
.carousel-item-container {
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
	
	.carousel-img {
		width: 110%;
		height: 110%;
		position: absolute;
		left: 0;
		top: 0;
		transition: 0.3s;
	}
	
	.title, .desc {
		position: absolute;
		color: #fff;
		letter-spacing: 3px;
		left: 30px;
		font-weight: bold;
		text-shadow: 1px 0 0 #000, 0 1px 0 #000, -1px 0 0 #000, 0 -1px 0 #000;
		white-space: nowrap;
		overflow: hidden;
		opacity: 0;
	}
	
	.title {
		top: calc(50% - 50px);
		font-size: 2em;
	}
	
	.desc {
		top: calc(50% + 20px);
		font-size: 1.2em;
		color: lighten(gray, 20%);
	}
}
</style>
