<template>
	<div class="blog-container">
		<Layout>
			<BlogList />
			<template #right>
				<BlogCategory />
			</template>
		</Layout>
	</div>
</template>

<script>
import Layout from "@/components/Layout/index.vue";
import BlogCategory from './components/BlogCategory.vue';
import BlogList from './components/BlogList.vue';


export default {
	components: {
		Layout, BlogList, BlogCategory
	},
	data() {
		return {
		
		}
	},
	mounted() {
	
	},
	methods: {
	
	}
}
</script>

<style scoped lang="scss">
.blog-container{
	color: #fff;
	height: 100%;
}
</style>
