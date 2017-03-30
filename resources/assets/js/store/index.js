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
        console.log('USER', user);
        // let foundIndex = state.users.findIndex(x => x.id == user.id);
        // state.users[foundIndex] = user;
        // state.users.find(u => u.id == user.id);
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