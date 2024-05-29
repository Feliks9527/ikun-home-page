<script>
// import Icon from '../Icon'
import MyIcon from "@/components/Icon/index.vue";

export default {
	name: "myPager",
	components: {
		MyIcon
		// Icon
	},
	props: {
		current: {
			type: Number,
			default: 1
		},
		total: {
			type: Number,
			default: 0
		},
		limit: {
			type: Number,
			default: 10
		},
		visibleNumber: {
			type: Number,
			default: 10
		}
	},
	computed: {
		pageNumber() {
			return Math.ceil(this.total / this.limit)
		},
		visibleMin() {
			return Math.max(1, this.current - Math.floor(this.visibleNumber / 2))
		},
		visibleMax() {
			return Math.min(this.pageNumber, this.visibleMin + this.visibleNumber - 1)
		},
		pages() {
			const pages = []
			for (let i = this.visibleMin; i <= this.visibleMax; i++) {
				pages.push(i)
			}
			return pages
		}
	},
	methods: {
		handleClick(newPage) {
			if (newPage < 1 || newPage > this.pageNumber || newPage === this.current) {
				return
			}
			this.$emit('pageChange', newPage)
		}
	}
}
</script>

<template>
	<div class="pager-container" v-if="pageNumber > 1">
		<!-- <Icon name="icon-diyiye" @click="handleClick(1)" :class="{disabled: current === 1}"/> -->
		<!-- <Icon name="icon-shangyiye" @click="handleClick(current - 1)" :class="{disabled: current === 1}"/> -->
		<a @click="handleClick(1)" :class="{disabled: current === 1}">
			<MyIcon name="icon-diyiye" color="#fff"/>
		</a>
		<a @click="handleClick(current - 1)" :class="{disabled: current === 1}">
			<MyIcon name="icon-shangyiye" color="#fff"/>
		</a>
		
		<a
			@click="handleClick(page)"
			:class="{active: current === page}"
			v-for="page in pages"
			:key="page"
		>
			{{ page }}
		</a>
		
		<a @click="handleClick(current + 1)" :class="{disabled: current === pageNumber}">
			<MyIcon name="icon-xiayiye" color="#fff"/>
		</a>
		<a @click="handleClick(pageNumber)" :class="{disabled: current === pageNumber}">
			<MyIcon name="icon-zuihouyiye" color="#fff"/>
		</a>
		<!-- <Icon name="icon-xiayiye" @click="handleClick(current + 1)" :class="{disabled: current === pageNumber}"/>
		<Icon name="icon-zuihouyiye" @click="handleClick(pageNumber)" :class="{disabled: current === pageNumber}"/> -->
	</div>
</template>

<style scoped lang="scss">
@import '../../styles/var.scss';

.pager-container {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 50px;
	margin-top: 20px;
	
	a {
		color: $light;
		background-color: $dark;
		font-size: 16px;
		cursor: pointer;
		border: 1px solid $gray;
		margin: 0 5px;
		border-radius: 5px;
		display: block;
		width: 30px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		
		&.disabled {
			color: $gray;
			cursor: not-allowed;
		}
		
		&.active {
			color: $light;
			background-color: $info;
			border: 2px solid $primary;
		}
		
		&:hover {
			color: $secondary;
		}
	}
	
}
</style>
