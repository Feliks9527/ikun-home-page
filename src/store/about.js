import { getAbout } from '@/api/about'

export default {
    namespaced: true,
    state: {
        loading: false,
        data: "",
    },
    mutations: {
        setData(state, payload) {
            state.data = payload
        },
        setLoading(state, payload) {
            state.loading = payload
        }
    },
    actions: {
        async fetchAbout(ctx) {
            if(ctx.state.data) return;
            ctx.commit('setLoading', true)
            const res = await getAbout()
            ctx.commit('setData', res)
            ctx.commit('setLoading', false)
        }
    }
}
