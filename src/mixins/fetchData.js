// 公共获取远程数据的方法
// 在具体的组件中，需要提供一个获取远程数据的方法 fetchData
export default function (defaultData=null) {
    return {
        data() {
            return {
                isLoading: true,
                data: defaultData
            };
        },
        async created() {
            this.data = await this.fetchData();
            this.isLoading = false;
        }
    };
}

