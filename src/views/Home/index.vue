<template>
	<div class="home-container" ref="homeContainer" @wheel="handleWheel" v-loading="loading">
		<ul
			class="carousel-container"
			:style="{
				marginTop: marginTop + 'px'
			}"
			@transitionend="handleTransitionEnd"
		>
			<li v-for="b in data" :key="b.id">
				<CarouseItem :carousel="b" />
			</li>
		</ul>
		<div v-show="currentIndex >= 1" class="cicon cicon-up" @click="switchTo(currentIndex - 1)">
			<Icon name="icon-up" size="30" color="#333" weight="bold" />
		</div>
		<div v-show="currentIndex < data.length - 1" class="cicon cicon-down" @click="switchTo(currentIndex + 1)">
			<Icon name="icon-down" size="30" color="#333" weight="bold" />
		</div>
		
		<ul class="indicator">
			<li :class="{
					active: currentIndex === index,
				}"
				v-for="(b, index) in data"
				:key="b.id"
				@click="switchTo(index)"
			></li>
		</ul>
	</div>
</template>

<script>
import CarouseItem from "./CarouseItem.vue";
import Icon from "@/components/Icon/index.vue";
import { mapState } from "vuex";

export default {
	components: {
		CarouseItem,
		Icon
	},
	data() {
		return {
			currentIndex: 0, // 当前显示的索引
			containerHeight: 0, // 容器高度
			switching: false, // 是否正在切换
		}
	},
	computed: {
		marginTop() {
			return -this.containerHeight * this.currentIndex;
		},
		...mapState("banner", ["data", "loading"])
	},
	created() {
		this.$store.dispatch("banner/fetchBanner");
	},
	mounted() {
		this.containerHeight = this.$refs.homeContainer.clientHeight;
		// 监听窗口大小变化
		window.addEventListener('resize', this.handleResize)
	},
	methods: {
		
		switchTo(index) {
			this.currentIndex = index;
		},
		// 鼠标滚轮事件
		handleWheel(e) {
			if(this.switching) {
				return;
			}
			if(e.deltaY < -5 && this.currentIndex > 0) {
				this.switching = true;
				this.currentIndex--;
			} else if(e.deltaY > 5 && this.currentIndex < this.data.length - 1) {
				this.switching = true;
				this.currentIndex++;
			}
		},
		// 窗口大小变化
		handleResize() {
			this.containerHeight = this.$refs.homeContainer.clientHeight;
		},
		// 过渡结束
		handleTransitionEnd() {
			this.switching = false;
		}
	},
	destroyed() {
		window.removeEventListener('resize', this.handleResize)
	}
}
</script>

<style scoped lang="scss">
@import "~@/styles/mixin.scss";
@import "~@/styles/var.scss";

.home-container {
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
	
	ul {
		margin: 0;
		list-style: none;
		padding: 0;
	}
}

.carousel-container {
	width: 100%;
	height: 100%;
	transition: 500ms;
	
	li {
		width: 100%;
		height: 100%;
	}
}

.cicon {
	@include self-center();
	$gap: 25px;
	cursor: pointer;
	transform: translateX(-50%);
	
	&-up {
		top: $gap;
		animation: jump-up 2s infinite;
	}
	
	&-down {
		top: auto;
		bottom: $gap;
		animation: jump-down 2s infinite;
	}
}

$jump-height: 10px;
@keyframes jump-up {
	0% {
		transform: translate(-50%, $jump-height);
	}
	50% {
		transform: translate(-50%, -$jump-height);
	}
	100% {
		transform: translate(-50%, $jump-height);
	}
}

@keyframes jump-down {
	0% {
		transform: translate(-50%, -$jump-height);
	}
	50% {
		transform: translate(-50%, $jump-height);
	}
	100% {
		transform: translate(-50%, -$jump-height);
	}
}

.indicator {
	@include self-center();
	transform: translateY(-50%);
	left: auto;
	right: 20px;
	
	li {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: transparent;
		border: 1px solid $secondary;
		margin: 5px 0;
	}
	
	.active {
		background-color: $dark;
	}
}
</style>
