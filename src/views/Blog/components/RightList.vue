<template>
	<ul class="right-list-container">
		<li
			v-for="(item,i) in list" :key="i"
			@click="handleClick(item)"
		>
			<span :class="{active: item.isSelect}">{{ item.name }}</span>
			<span v-if="item.aside" :class="item.isSelect ? 'active':'aside'">{{ item.aside }}篇</span>
			<RightList v-if="item.children" :list="item.children" @select="handleClick"/>
		</li>
	</ul>
</template>

<script>
export default {
	name: "RightList",
	props: {
		list: {
			type: Array,
			default: () => []
		}
	},
	methods: {
		handleClick(item) {
			if (!item.isSelect) {
				this.$emit("select", item);
			}
		}
	}
}
</script>

<style scoped lang="scss">
@import "~@/styles/var.scss";

.right-list-container {
	list-style: none;
	padding: 0;
	
	.right-list-container {
		margin-left: 1em;
	}
	
	li {
		min-height: 40px;
		line-height: 40px;
		//background-color: #42b983;
		color: $secondary;
		cursor: pointer;
		
		.active {
			color: $warning;
			&:last-child{
				margin-left: 1em;
			}
		}
		
		.aside {
			margin-left: 1em;
			color: #333;
		}
	}
}
</style>
