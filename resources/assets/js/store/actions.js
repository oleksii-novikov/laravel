import Vue from 'vue'

export default {
    addUser ({ commit }, user) {
        return Vue.http.post('/api/users', user)
            .then(response => {
                commit('addUser', response.data.user);
            }, response => {
                commit('setUserErrors', response.data);
            });
    },
    updateUser ({ commit }, user) {
        console.log('updateUser action', user);
        commit('updateUser', user)
    },
    pushUsers ({ commit }, users) {
        commit('pushUsers', users)
    }
}