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
        return Vue.http.put('/api/users/' + user.id, user)
            .then(response => {
                commit('updateUser', response.data.user);
            }, (response) => {
                commit('setUserErrors', response.data);
            });
    },
    pushUsers ({ commit }, users) {
        commit('pushUsers', users)
    }
}