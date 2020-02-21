export default {
    state: {
        loading: true
    },
    mutations: {
        setPreload (state, payload) {
            state.loading = payload
        },
    },
    actions: {
        setPreload ({commit}, payload) {
            commit('setPreload', payload)
        }
    },
    getters: {
        getPreload (state) {
            return state.loading
        }
    }
}
