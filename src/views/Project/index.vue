<template>
	<div class="project-container" ref="projectContainer" v-loading="loading">
		<a
			v-for="p in project"
			:key="p.id"
			:href="p.url ? p.url : `javascript:alert('No link available for ${p.name}')`"
			:target="p.url ? '_blank' : '_self'"
			class="project-item"
		>
			<img :src="p.thumb" :alt="p.name" class="thumb"/>
			<div class="info">
				<h2>{{ p.name }}</h2>
				<div class="git-link">
					<Icon name="icon-gitee" color="#D9D9D9"></Icon>
					<span>{{ p.gitee }}</span>
				</div>
				<p v-for="(d,index) in p.description" :key="index+12">
					{{ d }}
				</p>
			</div>
		</a>
	</div>
</template>

<script>
import mainScroll from "@/mixins/mainScroll";
import {mapState} from "vuex";
import Icon from "@/components/Icon";

export default {
	mixins: [mainScroll("projectContainer")],
	components: {
		Icon
	},
	computed: {
		...mapState('project', {
			project: "data",
			loading: "loading"
		})
	},
	created() {
		this.$store.dispatch("project/fetchProject");
		console.log("fetchProject", this.project)
	},
}
</script>

<style scoped lang="scss">
@import "~@/styles/var.scss";

.project-container {
	color: $secondary;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	padding: 20px;
	position: relative;
	overflow-y: auto;
	scroll-behavior: smooth;
	
	.project-item {
		transition: 0.5s;
		padding: 20px;
		display: flex;
		margin-bottom: 20px;
		background-color: $seconddark;
		
		&:hover {
			box-shadow: -1px 1px 10px 0px #000000;
			transform: scale(1.05) translate(3px, -3px);
			color: inherit;
		}
		
		.thumb {
			width: 250px;
			min-height: 150px;
			flex: 0 0 auto;
			object-fit: cover;
			border-radius: 5px;
			margin-right: 15px;
		}
		
		.info {
			line-height: 1.7;
			flex: 1 1 auto;
			
			.git-link {
				display: flex;
				align-items: center;
				margin-bottom: 10px;
				
				span {
					margin-left: 5px;
				}
			}
			
			h2 {
				margin: 0;
			}
		}
	}
}
</style>
