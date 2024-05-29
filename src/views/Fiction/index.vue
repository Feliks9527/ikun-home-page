<template>
	<div class="main-container">
		<Layout>
			<div class="fiction-container" ref="fictionContainer" v-loading="isLoading">
				<h1>凡人修仙</h1>
				<FictionDetail :data="data" />
			</div>
			<template #right>
				<div class="right-container" v-loading="isLoading">
					<FictionToc :toc="toc" />
				</div>
			</template>
		</Layout>
		<Pager :total="99*20" :limit="20" :current="current" @pageChange="handlePageChange" />
	</div>
</template>

<script>
import Layout from "@/components/Layout/index.vue";
import FictionDetail from "./components/FictionDetail.vue";
import FictionToc from "./components/FictionToc.vue";
import Pager from "@/components/Pager/index.vue";
import { getFiction } from "@/api/fiction";
import fetchData from "@/mixins/fetchData";

export default {
	mixins: [fetchData([])],
	name: "Fiction",
	components: {
		Layout,
		FictionDetail,
		FictionToc,
		Pager
	},
	computed: {
		toc(){
			let list = []
			this.data.forEach(item => {
				list.push({
					name: item.title,
					isSelect: false,
				})
			})
			return list
		}
	},
	data(){
		return {
			page: 1,
			limit: 20,
			current: 1,
		}
	},
	created() {
		this.current = localStorage.getItem('lastPage') || 1
		this.page = this.current
		this.fetchData()
	},
	methods: {
		async fetchData() {
			this.isLoading = true
			const res = await getFiction(this.page, this.limit)
			this.data = res
			this.isLoading = false
		},
		handlePageChange(page) {
			this.page = page
			this.current = page
			this.fetchData()
		}
	},
	beforeDestroy() {
		localStorage.setItem('lastPage', this.current)
	},
	updated() {
		//更新地址栏的hash值
		const hash = location.hash
		// console.log('hash',hash)
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
.main-container{
	width: 100%;
	height: 100%;
	overflow-y: auto;
	letter-spacing: 2px;
	color: #42b983;
	padding: 20px;
	box-sizing: border-box;
	scroll-behavior: smooth;
}
.fiction-container{
	width: 100%;
	height: 100%;
	overflow-y: auto;
	letter-spacing: 2px;
	color: #42b983;
	font-weight: bold;
	padding: 20px;
	box-sizing: border-box;
	scroll-behavior: smooth;
	
	.speak{
		width: 50px;
		height: 50px;
		text-align: center;
		line-height: 50px;
		border-radius: 50%;
		background-color: #42b983;
		position: fixed;
		right: 20px;
		bottom: 20px;
		color: #fff;
		cursor: pointer;
	}
}
</style>
