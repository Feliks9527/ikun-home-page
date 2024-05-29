<template>
	<div class="fiction-toc-container" ref="fictionToc">
		<h2 class="title">文章目录</h2>
		<RightList :list="tocWithSelect" @select="handleSelect"/>
	</div>
</template>

<script>
import RightList from "./RightList";
import {debounce} from "@/utils";

export default {
	name: "BlogToc",
	components: {
		RightList
	},
	props: {
		toc: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			activeAnchor: ""
		}
	},
	computed: {
		// 目录列表每项添加是否选中属性
		tocWithSelect() {
			return this.toc.map(t => ({
				...t,
				isSelect: t.name === this.activeAnchor,
			}))
		},
		// 根据toc得到他们对应的元素数组
		doms() {
			const doms = []
			const getDoms = (toc = []) => {
				toc.forEach(t => {
					const dom = document.querySelector(`#${t.name}`)
					if (dom) {
						doms.push(dom)
					}
				})
			}
			getDoms(this.toc)
			return doms
		}
	},
	created() {
	
	},
	mounted() {
		this.setSelectDebounce = debounce(this.setSelect, 100)
		this.$bus.$on("mainScroll", this.setSelectDebounce)
		console.log('----',this.tocWithSelect)
		console.log('@@@',this.doms)
	},
	beforeDestroy() {
		this.$bus.$off("mainScroll", this.setSelectDebounce)
	},
	methods: {
		handleSelect(item) {
			location.hash = item.name
			this.activeAnchor = item.name
		},
		setSelect(scrollDom) {
			console.log('scrollDom',scrollDom)
			if(!scrollDom){
				return
			}
			this.activeAnchor = ""
			const range = 200
			for (const dom of this.doms) {
				if(!dom){
					continue;
				}
				// 元素离视口顶部的距离
				const top = dom.getBoundingClientRect().top
				if (top > 0 && top < range) {
					// 在规定范围内
					this.activeAnchor = dom.id
					return
				}else if(top < 0 && top > -range){
					return
				}else if(top > range){
					// 在规定范围上方
					this.activeAnchor = dom.id
				}
			}
		}
	}
}
</script>

<style scoped lang="scss">
.fiction-toc-container {
	//width: 300px;
	//height: 100%;
	//overflow: auto;
	//box-sizing: border-box;
	//padding: 20px;
	//background-color: #42b983;
	//position: relative;
	
	h2 {
		font-weight: bold;
		letter-spacing: 2px;
		font-size: 1em;
		margin: 0;
		color: #42b983;
	}
}
</style>
