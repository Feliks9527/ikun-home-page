<template>
	<div class="message-area-container">
		<DataForm v-on="$listeners" />
		<h3>
			{{ title }}
			<span>{{ subTitle }}</span>
		</h3>
		<DataList :list="list"/>
		<div class="loading" v-loading="isListLoading"></div>
	</div>
</template>

<script>
import DataList from "./DataList";
import DataForm from "./DataForm";

export default {
	props: {
		title: {
			type: String,
			default: "Title"
		},
		subTitle: {
			type: String,
			default: "Sub Title"
		},
		list: {
			type: Array,
			default: () => []
		},
		isListLoading: {
			type: Boolean,
			default: false
		}
	},
	components: {DataList, DataForm},
}
</script>

<style scoped lang="scss">
.loading {
	position: relative;
	height: 100px;
}
</style>
