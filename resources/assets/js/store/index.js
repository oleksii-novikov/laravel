import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
Vue.use(Vuex)

const state = {
    users: [],
    userErrors: []
}

const getters = {
    users: state => state.users,
    userErrors: state => state.userErrors,
}

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
        state.userErrors = errors;
    },
    cleanUserErrors (state) {
        state.userErrors = [];
    },
}

export default new Vuex.Store({
    getters,
    actions,
    state,
    mutations
})