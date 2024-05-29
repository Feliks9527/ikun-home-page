<template>
	<div class="menu-container">
		<RouterLink
			:exact="item.exact"
			v-for="(item,index) in menuList"
			:key="index"
			:to="{name: item.name}"
			active-class="selected"
			exact-active-class=""
		>
			<div class="icon">
				<Icon :name="item.icon" size="16" color="#ccc"/>
			</div>
			<span>{{ item.title }}</span>
		</RouterLink>
	</div>
</template>

<script>
import Icon from "@/components/Icon/index.vue";

export default {
	name: "myMenu",
	components: {
		Icon
	},
	data() {
		return {
			menuList: [
				{
					icon: "icon-shouye",
					title:'首页',
					name: "home",
					path: "/",
					exact: true,
				},
				{
					icon: "icon-bianjiwenzhang_huaban",
					title:'文章',
					name: "blog",
					path: "/blog",
					exact: false, // 激活状态是否精确匹配
				},
				{
					icon: "icon-guanyu",
					title:'关于',
					name: "about",
					path: "/about",
					exact: true,
				},
				{
					icon: "icon-xiangmu",
					title:'项目&效果',
					name: "project",
					path: "/project",
					exact: true,
				},
				{
					icon: "icon-liuyanjianyi",
					title:'留言',
					name: "message",
					path: "/message",
					exact: true
				},
				{
					icon: "icon-read",
					title:'阅读',
					name: "fiction",
					path: "/fiction",
					exact: true
				}
			],
		};
	},
}
</script>

<style scoped lang="scss">
@import "~@/styles/var";

.menu-container {
	color: $gray;
	margin: 24px 0;
	
	a {
		padding: 0 50px;
		display: block;
		display: flex;
		align-items: center;
		height: 45px;
		color: $gray;
		
		&.selected {
			background-color: #2d2d2d;
			color: $light;
		}
		
		&:hover {
			color: $light;
		}
		
		.icon {
			width: 24px;
		}
	}
}

</style>
