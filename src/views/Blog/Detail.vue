<template>
	<Layout>
		<div ref="mainContainer" class="main-container" v-loading="isLoading">
			<BlogDetail :blog="data" v-if="data"/>
			<BlogComment v-if="!isLoading" />
		</div>
		<template #right>
			<div class="right-container" v-loading="isLoading">
				<BlogToc :toc="data?.toc"/>
			</div>
		</template>
	</Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import mainScroll from "@/mixins/mainScroll";
import {getBlog} from "@/api/blog";
import Layout from "@/components/Layout";
import BlogDetail from "@/views/Blog/components/BlogDetail.vue";
import BlogToc from "@/views/Blog/components/BlogToc.vue";
import BlogComment from "@/views/Blog/components/BlogComment.vue";


export default {
	mixins: [fetchData(null),mainScroll("mainContainer")],
	components: {
		Layout,
		BlogDetail,
		BlogToc,
		BlogComment
	},
	methods: {
		async fetchData() {
			return await getBlog(this.$route.params.id)
		}
	},
	updated() {
		//更新地址栏的hash值
		const hash = location.hash
		console.log('hash',hash)
		if (hash) {
			location.hash = ""
			setTimeout(() => {
				location.hash = hash
			}, 50)
		}
	}
}
</script>


<style scoped lang="scss">
.main-container {
	overflow-y: scroll;
	height: 100%;
	box-sizing: border-box;
	padding: 20px;
	position: relative;
	color: #fff;
	width: 100%;
	overflow-x: hidden;
	scroll-behavior: smooth;
}

.right-container {
	width: 300px;
	height: 100%;
	border-left: 1px solid #333;
	padding-left: 10px;
	overflow-y: scroll;
	box-sizing: border-box;
	position: relative;
}
</style>
