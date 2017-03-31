import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
Vue.use(Vuex)

const state = {
    users: []
}

const getters = {
    users: state => state.users
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
    }
}

export default new Vuex.Store({
    getters,
    actions,
    state,
    mutations
})