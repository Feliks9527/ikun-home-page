<script>
import Menu from "@/components/SiteAside/Menu/index.vue";
import Contact from "@/components/SiteAside/Contact/index.vue";
import Avatar from "@/components/Avatar/index.vue";
import { mapState } from "vuex";

export default {
	name: "siteAside",
	components: {
		Menu,
		Contact,
		Avatar
	},
	computed: {
		...mapState("setting", ["data"])
	}
}
</script>

<template>
	<div class="site-aside-container">
		<template v-if="data">
			<Avatar :src="data.avatar" />
			<p class="name">{{ data.siteTitle }}</p>
		</template>
		<Menu />
		<Contact v-if="data" />
		<a
			v-if="data"
			href="https://beian.miit.gov.cn/#/Integrated/index"
			target="_blank"
			class="footer"
		>
			{{ data.icp }}
		</a>
	</div>
</template>

<style scoped lang="scss">
@import "~@/styles/var.scss";

.site-aside-container {
	width: 100%;
	height: 100%;
	background-color: $dark;
	overflow-x: hidden;
	overflow-y: auto;
	position: relative;
	
	.avatar-container{
		width: 100%;
		margin: 0 auto;
		text-align: center;
	}
	
	// 隐藏滚动条
	&::-webkit-scrollbar {
		display: none;
	}
	
	.name {
		color: $light;
		text-align: center;
		font-size: 20px;
	}
	
	.footer {
		color: $gray;
		text-align: center;
		position: absolute;
		bottom: 20px;
		width: 100%;
	}
}
</style>
