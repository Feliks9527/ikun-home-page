import { getSetting } from "@/api/setting";
import { titleController } from "@/utils";

export default {
    namespaced: true,
    state: {
        loading: false,
        data: null
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload
        },
        setData(state, payload) {
            state.data = payload
        }
    },
    actions: {
        async fetchSetting(ctx) {
            // if (ctx.state.data) return;
            ctx.commit("setLoading", true)
            const res = await getSetting()
            ctx.commit("setData", res)
            ctx.commit("setLoading", false)
            if(res.favicon){
                let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
                if(link) {
                    return;
                }
                link = document.createElement('link');
                link.type = 'image/x-icon';
                link.rel = 'shortcut icon';
                link.href = res.favicon;
                document.getElementsByTagName('head')[0].appendChild(link);
            }
            if(res.siteTitle){
                titleController.setSiteTitle(res.siteTitle)
            }
        }
    }
}
