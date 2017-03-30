export default {
    addUser ({ commit }, user) {
        commit('addUser', user)
    },
    updateUser ({ commit }, user) {
        commit('updateUser', user)
    },
    pushUsers ({ commit }, users) {
        commit('pushUsers', users)
    }
}