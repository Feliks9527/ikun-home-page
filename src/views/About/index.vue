<template>
	<div class="about-container" v-loading="loading || !srcLoaded">
		<iframe
			class="about-content"
			:src="src"
			@load="srcLoaded=true"
		></iframe>
	</div>
</template>

<script>
import {mapState} from "vuex";

export default {
	data() {
		return {
			srcLoaded: false
		}
	},
	computed: {
		...mapState("about", {
			src: "data",
			loading: "loading"
		})
	},
	created() {
		this.$store.dispatch("about/fetchAbout");
	}
}

</script>

<style lang="scss" scoped>
.about-container {
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: relative;
	background-color: #333;
}

.about-content {
	width: 100%;
	height: 100%;
	display: block;
	box-sizing: border-box;
}
</style>
