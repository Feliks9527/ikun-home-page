<template>
	<div class="blog-category-container" v-loading="isLoading">
		<h2 class="title">文章分类</h2>
		<RightList :list="list" @select="handleSelect"/>
	</div>
</template>

<script>
import RightList from "@/views/Blog/components/RightList.vue";
import fetchData from "@/mixins/fetchData";
import {getBlogTypes} from "@/api/blog";

export default {
	name: "BlogCategory",
	mixins: [fetchData([])],
	components: {RightList},
	computed: {
		categoryId() {
			return +this.$route.params.categoryId || -1
		},
		limit() {
			return +this.$route.query.limit || 10
		},
		list() {
			const totalArticleCount = this.data.reduce((prev, cur) => prev + cur.articleCount, 0) // 计算总文章数
			const result = [
				{name: '全部', id: -1, articleCount: totalArticleCount},
				...this.data
			];
			return result.map((it) => ({
				...it,
				isSelect: it.id === this.categoryId,
				aside: `${it.articleCount}篇`
			}))
		}
	},
	methods: {
		async fetchData() {
			return await getBlogTypes()
		},
		handleSelect(item) {
			const query = {
				page: 1,
				limit: this.limit
			}
			if (item.id === -1) {
				this.$router.push({
					name: 'blog',
					query
				})
			} else {
				this.$router.push({
					name: 'categoryBlog',
					query,
					params: {
						categoryId: item.id
					}
				})
			}
		}
	}
}
</script>

<style scoped lang="scss">
.blog-category-container {
	width: 300px;
	height: 100%;
	overflow: auto;
	box-sizing: border-box;
	padding: 20px;
	//background-color: #42b983;
	position: relative;
	border-left: 1px solid #333;
	
	h2 {
		font-weight: bold;
		letter-spacing: 2px;
		font-size: 1em;
		margin: 0;
	}
}
</style>
