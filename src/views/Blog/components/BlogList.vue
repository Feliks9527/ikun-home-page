<template>
	<div class="blog-list-container" v-loading="isLoading" ref="mainContainer">
		<ul>
			<li v-for="item in data.rows" :key="item.id">
				<div class="thumb" v-if="item.thumb">
					<RouterLink :to="{
						name: 'blogDetail',
						params: {id: item.id}
					}">
						<img
							v-lazy="item.thumb"
							:alt="item.title"
							:title="item.title"
						>
					</RouterLink>
				</div>
				<div class="main">
					<RouterLink :to="{
						name: 'blogDetail',
						params: {id: item.id}
					}">
						<h2>{{ item.title }}</h2>
					</RouterLink>
					<div class="aside">
						<span>日期：{{ item.createDate }}</span>
						<span>浏览：{{ item.scanNumber }}</span>
						<span>评论：{{ item.commentNumber }}</span>
						<router-link :to="{
							name: 'categoryBlog',
							params: {categoryId: item.category.id}
						}" class="">{{ item.category.name }}</router-link>
					</div>
					<div class="desc">
						{{
							item.description
						}}
					</div>
				</div>
			</li>
		</ul>
		<!--分页-->
		<Pager
			v-if="data.total"
			:current="routeInfo.page"
			:total="data.total"
			:limit="routeInfo.limit"
			:visible-number="10"
			@pageChange="handlePageChange"
		/>
	</div>
</template>

<script>
import Pager from "@/components/Pager";
import fetchData from "@/mixins/fetchData";
import mainScroll from "@/mixins/mainScroll";
import {getBlogs} from "@/api/blog";

export default {
	name: "BlogList",
	mixins: [fetchData({}), mainScroll("mainContainer")],
	components: {
		Pager
	},
	computed: {
		routeInfo() {
			const categoryId = +this.$route.params.categoryId || -1;
			const page = +this.$route.query.page || 1;
			const limit = +this.$route.query.limit || 10;
			return {
				categoryId,
				page,
				limit
			}
		}
	},
	data() {
		return {}
	},
	watch: {
		async $route() {
			this.isLoading = true;
			this.$refs.mainContainer.scrollTop = 0;
			this.data = await this.fetchData();
			this.isLoading = false;
		}
	},
	methods: {
		async fetchData() {
			return await getBlogs(this.routeInfo.page, this.routeInfo.limit, this.routeInfo.categoryId);
		},
		handlePageChange(newPage) {
			const query = {
				page: newPage,
				limit: this.routeInfo.limit
			}
			if (this.routeInfo.categoryId === -1) {
				this.$router.push({
					name: 'blog',
					query
				})
			} else {
				this.$router.push({
					name: 'categoryBlog',
					query,
					params: {
						categoryId: this.routeInfo.categoryId
					}
				})
			}
		}
	},
}
</script>


<style scoped lang="scss">
@import "~@/styles/var.scss";

.blog-list-container {
	line-height: 1.7;
	position: relative;
	padding: 20px;
	overflow-y: auto;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	scroll-behavior: smooth;
	
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
}

li {
	display: flex;
	padding: 15px 0;
	border-bottom: 1px solid $gray;
	
	.thumb {
		flex: 0 0 auto;
		margin-right: 15px;
		
		img {
			display: block;
			max-width: 200px;
			border-radius: 5px;
		}
	}
	
	.main {
		flex: 1 1 auto;
		
		h2 {
			margin: 0;
		}
	}
	
	.aside {
		font-size: 12px;
		color: $gray;
		
		span {
			margin-right: 15px;
		}
	}
	
	.desc {
		margin: 15px 0;
		font-size: 14px;
		//最多显示3行
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		
	}
}
</style>
