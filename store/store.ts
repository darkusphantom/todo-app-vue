import { createStore } from "vuex"

const state = {
  counterTask: 0
}

// export `mutations` as a named export
export const mutations = {
    increment: (state: any) => state.count++
}

const actions = {}

const getters = {
  totalTasks: (state: any) => state.count
}

export default createStore({
  state,
  mutations,
  actions,
  getters
})