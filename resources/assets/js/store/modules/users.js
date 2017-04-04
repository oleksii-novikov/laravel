import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    users: [],
    errors: []
}

const getters = {
    users: state => state.users,
    userErrors: state => state.errors,
}

const actions = {
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
    },
    cleanUserErrors ({ commit }) {
        commit('cleanUserErrors')
    }
};

const mutations = {
    addUser (state, user) {
        state.users.push(user);
    },
    updateUser (state, user) {
        let index = state.users.findIndex(x => x.id == user.id);
        state.users.splice(index, 1, user);
        // state.users.$set(index, user);
    },
    pushUsers (state, users) {
        state.users.push(...users);
    },
    setUserErrors (state, errors) {
        state.errors = errors;
    },
    cleanUserErrors (state) {
        state.errors = [];
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}