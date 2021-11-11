const defaultState = () => {
    return {
        lang: null
    }
}

export const Uisetting = {
    namespaced: true,
    state: defaultState(),
    mutations: {
        setLang (state, payload) {
            state.lang = payload
        }
    }
}
