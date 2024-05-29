export default function (refValue) {
    return {
        mounted() {
            this.$bus.$on("setMainScroll", this.handleSetMainScroll)

            // setTimeout(() => {
                this.$refs[refValue].addEventListener("scroll", this.handleMainScroll)
            // }, 1000)
        },
        beforeDestroy() {
            this.$bus.$emit("mainScroll", undefined)
            this.$bus.$off("setMainScroll", this.handleSetMainScroll)
            this.$refs[refValue].removeEventListener("scroll", this.handleMainScroll)
        },
        methods: {
            // 监听滚动高度
            handleSetMainScroll(scrollTop) {
                this.$refs[refValue].scrollTop = scrollTop
            },

            // 自身滚动事件
            handleMainScroll() {
                this.$bus.$emit("mainScroll", this.$refs[refValue])
            },
        }
    }
}
