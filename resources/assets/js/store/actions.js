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
    fetchUsers ({ commit }) {
        return Vue.http.get('/api/users')
            .then(response => {
                commit('pushUsers', response.data.users);
            });
    },
    pushUsers ({ commit }, users) {
        commit('pushUsers', users)
    }
}