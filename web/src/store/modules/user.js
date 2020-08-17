import store from '@/store'
const state = {
  userid: null
}
const mutations = {
  SET_USER_ID: (state, data) => {
    state.userid = data
  }
}
const actions = {
  upUSER_ID: ({ commit }, data) => {
    commit('SET_USER_ID', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
