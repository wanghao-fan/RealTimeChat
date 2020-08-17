import store from '@/store'
const state = {
  list: []
}
const mutations = {
  SET_MESSAGE: (state, data) => {
    state.list = state.list.concat(data)
  },
  REMOVE_MESSAGE: (state, data) => {
    state.list = []
  },
}
const actions = {
  addMessage: ({ commit }, data) => {
    commit('SET_MESSAGE', [data])
  },
  removeMessage: ({ commit }) => {
    commit('REMOVE_MESSAGE', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
