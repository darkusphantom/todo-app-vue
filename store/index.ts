import { createStore } from "vuex"

const state = {
  counter: 0,
  tasks: [] as any[],
}

export const getters = {
  getTasks: () => state.tasks,
  getTotalTasks: () => state.tasks.length,
  getCounter: (state: any) => state.counter
}

// export `mutations` as a named export
export const mutations = {
  addTask: (task: any) => state.tasks.push(task),
}

export const actions = {
  addTask: ({ commit }: any, task: any) => {
    commit('addTask', task)
  },
}

export default createStore({
  state,
  mutations,
  actions,
  getters
})