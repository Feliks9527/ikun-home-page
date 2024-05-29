<template>
	<div class="message-container" ref="messageContainer">
		<MessageArea
			title="留言板"
			:list="data.rows"
			:isListLoading="isLoading"
			:sub-title="`共有${data.total}条留言`"
			@submit="handleSubmit"
		/>
	</div>
</template>
<script>
import MessageArea from "@/components/MessageArea/index.vue";
import fetchData from "@/mixins/fetchData";
import * as msgApi from "@/api/message";
import mainScroll from "@/mixins/mainScroll.js";
export default {
	name: "Message",
	mixins: [fetchData({total:0,rows:[]}), mainScroll("messageContainer")],
	components: {
		MessageArea
	},
	computed: {
		hasMore() {
			return this.data.total > this.data.rows.length
		}
	},
	data(){
		return {
			page: 1,
			limit: 10,
		}
	},
	created() {
		this.$bus.$on("mainScroll", this.handleScroll)
	},
	beforeDestroy() {
		this.$bus.$off("mainScroll", this.handleScroll)
	},
	methods: {
		async fetchData(){
			return await msgApi.getMessages(this.page, this.limit);
		},
		async handleSubmit(data,callback){
			const res = await msgApi.postMessage(data);
			callback('感谢留言')
			this.data.rows.unshift(res);
		},
		handleScroll(dom) {
			// dom = this.$refs.messageContainer
			// console.log('dom',dom)
			if(this.isLoading || !dom) return; // 如果正在加载中，不再加载

			const range = 100
			const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight)
			// console.log('dec',dec,'dom',dom.srcElement) // 这里为什么不能直接拿到DOM？
			if (dec < range) {
				this.fetchMore()
			}
		},
		// 下一页
		async fetchMore() {
			if(!this.hasMore) return;
			this.isLoading = true
			this.page++
			const resp = await this.fetchData()
			this.data.total = resp.total
			this.data.rows = this.data.rows.concat(resp.rows)
			this.isLoading = false
		},
		
	}
}
</script>
<style scoped lang="scss">
@import "~@/styles/var.scss";
.message-container{
	//width: 100%;
	//height: 100%;
	//overflow-y: scroll;
	//padding: 25px 0;
	//box-sizing: border-box;
	//scroll-behavior: smooth;
	//position: relative;
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
.message-area-container{
	width: 700px;
	margin: 0 auto;
	color: $secondary;
}
</style>
