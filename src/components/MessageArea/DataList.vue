<template>
	<ul class="data-list-container">
		<li v-for="item in list" :key="item.id">
			<MyAvatar :src="item.avatar" size="44"/>
			<div class="data">
				<div class="nickname">{{ item.nickname }}</div>
				<div class="content">
					{{ item.content }}
				</div>
				<div class="time">{{ formatDate(item.createDate) }}</div>
			</div>
		</li>
	</ul>
</template>

<script>
import MyAvatar from "@/components/Avatar/index.vue";
import {formatDate} from "@/utils";

export default {
	components: {MyAvatar},
	props: {
		list: {
			type: Array,
			default: () => []
		}
	},
	methods: {
		formatDate,
	}
}
</script>

<style scoped lang="scss">
@import "~@/styles/var.scss";

.data-list-container {
	list-style: none;
	margin: 0;
	padding: 0;
}
li {
	display: flex;
	padding: 10px 0;
	border-bottom: 1px solid $gray;
}
.avatar-container{
	margin-right: 10px;
}
.nickname {
	font-size: 16px;
	color: $theme;
	margin-bottom: 10px;
	font-weight: bold;
}
.content {
	font-size: 14px;
}
.data {
	flex: 1 1 auto;
	position: relative;
}
.time {
	position: absolute;
	right: 0;
	top: 5px;
	font-size: 12px;
	color: $secondary;
}
</style>
