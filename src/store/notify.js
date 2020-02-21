import loadMore from "../assets/js/loadMore.js";

export default {
    state: {
        messages: [],
    },
    mutations: {
        setMessages (state, payload) {
            state.messages = payload
        },
    },
    actions: {
        loadMessages ({commit, getters}) {
            loadMore(getters.getMessagesFilter)
            commit('setMessages', getters.getMessages)
        }
    },
    getters: {
        getMessages (state) {
            return state.messages
        },
        getMessagesMain (state) {
            return state.messages.filter(mes => {
                return mes.main === true
            })
        },
        getMessagesFilter (state) {
            return state.messages.filter(mes => {
                return mes.main === false

            })
        },

    }
}
