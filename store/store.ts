import { createStore } from "vuex"

const state = { }

// export `mutations` as a named export
export const mutations = {
    increment: (state: any) => state.count++
}

export default createStore({
  state,
  mutations
})