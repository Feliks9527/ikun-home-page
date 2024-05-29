<template>
	<div id="app" class="app-container">
		<Layout>
			<template v-slot:left>
				<div class="aside">
					<SiteAside/>
				</div>
			</template>
			<div class="main">
				<router-view/>
			</div>
		</Layout>
		<ToTop/>
	</div>
</template>

<script>
import Layout from "@/components/Layout/index.vue";
import SiteAside from "@/components/SiteAside/index.vue";
import ToTop from "@/components/ToTop/index.vue";

export default {
	name: 'App',
	components: {
		Layout,
		SiteAside,
		ToTop
	}
}
</script>

<style scoped lang="scss">
@import "~@/styles/mixin.scss";
.app-container {
	height: 100%;
	@include self-fill(fixed);
	background-color: #111;
	
	.aside {
		width: 250px;
		height: 100%;
	}
}

.layout-container{
	.main {
		height: 100%;
	}
}
</style>
