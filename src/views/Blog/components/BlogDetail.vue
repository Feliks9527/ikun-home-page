<template>
	<div class="blog-detail-container">
		<h1>{{ blog.title }}</h1>
		<div class="aside">
			<span>日期：{{ blog.createDate }}</span>
			<span>浏览：{{ blog.scanNumber }}</span>
			<a href="#data-form-container">评论：{{ blog.commentNumber }}</a>
			<router-link :to="{
				name: 'categoryBlog',
				params: {categoryId: blog.category.id}
			}" class="">{{ blog.category.name }}
			</router-link>
		</div>
		<div v-html="blog.htmlContent" class="markdown-body"></div>
	</div>
</template>

<script>
import "highlight.js";
export default {
	name: "BlogDetail",
	props: {
		blog: {
			type: Object,
			required: true
		}
	}
}
</script>

<style scoped lang="scss">
@import "~@/styles/var.scss";

.blog-detail-container {
	scroll-behavior: smooth;
}

.aside {
	font-size: 12px;
	color: $gray;
	span {
		margin-right: 10px;
	}
	a {
		margin-right: 10px;
	}
}

.markdown-body{
	//color: #42b983;
}
</style>
