<script>
import Icon from "@/components/Icon";
export default {
	name: "myEmpty",
	components: {
		Icon
	},
	props: {
		text: {
			type: String,
			default: "暂无数据"
		},
		iconSize: {
			type: Number,
			default: 50
		},
		textSize: {
			type: Number,
			default: 14
		}
	}
}
</script>

<template>
	<div class="empty-container">
		<Icon :size="iconSize" name="icon-kong"/>
		<p :style="{
			fontSize: textSize + 'px'
		}">
			{{ text }}
		</p>
	</div>
</template>

<style scoped lang="scss">
@import "~@/styles/mixin.scss";
.empty-container {
	@include self-center();
}
</style>
