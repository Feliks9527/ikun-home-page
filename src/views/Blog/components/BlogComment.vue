<template>
	<div class="blog-comment-container">
		<MessageArea
			title="评论列表"
			:sub-title="`(${data.total})`"
			:list="data.rows"
			:is-list-loading="isLoading"
			@submit="handleSubmit"
		/>
	</div>
</template>

<script>
import MessageArea from "@/components/MessageArea/index.vue";
import fetchData from "@/mixins/fetchData";
import {getComments, postComment} from "@/api/blog";

export default {
	name: "BlogComment",
	mixins: [fetchData({total: 0, rows: []})],
	components: {
		MessageArea,
	},
	data() {
		return {
			page: 1,
			limit: 10
		}
	},
	computed: {
		hasMore() {
			return this.data.total > this.data.rows.length
		}
	},
	created() {
		this.$bus.$on("mainScroll", this.handleScroll)
	},
	beforeDestroy() {
		this.$bus.$off("mainScroll", this.handleScroll)
	},
	methods: {
		handleScroll(dom) {
			// console.log('dom',dom)
			if(this.isLoading || !dom) return; // 如果正在加载中，不再加载
			
			const range = 100
			const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight)
			if (dec < range) {
				this.fetchMore()
			}
		},
		
		async fetchData() {
			return await getComments(this.$route.params.id, this.page, this.limit)
		},
		// 下一页
		async fetchMore() {
			if(!this.hasMore) {
				return;
			}
			this.isLoading = true
			this.page++
			const resp = await this.fetchData()
			this.data.total = resp.total
			this.data.rows = this.data.rows.concat(resp.rows)
			this.isLoading = false
		},
		
		async handleSubmit(formData, callback) {
			const resp = await postComment({
				blogId: this.$route.params.id,
				...formData
			})
			console.log('评论',resp)
			this.data.rows.unshift(resp)
			this.data.total++
			
			callback("评论成功123")
		}
	}
}
</script>

<style scoped lang="scss">
.blog-comment-container {
	margin: 30px 0;
}
</style>
