
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import Index from './components/Index.vue';
import Users from './components/Users.vue';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.headers.common['X-CSRF-TOKEN', Laravel.csrfToken];

const routes = [
    {path: '/', component: Index, name: 'index'},
    {path: '/users', component: Users, name: 'users'}
];
const router = new VueRouter({
    mode: 'history',
    routes
});

let app = new Vue({
    router
}).$mount("#app");

// let app = new Vue({
//     el: "#app",
//     components: {
//         Index, TopMenu
//     }
// });
// var app = new Vue(require('./components/Home.vue'));
// Vue.component('select2', {
//     props: ['options', 'value'],
//     template: '#select2-template',
//     mounted: function () {
//         var vm = this
//         $(this.$el)
//             .val(this.value)
//             // init select2
//             .select2({ data: this.options })
//             // emit event on change.
//             .on('change', function () {
//                 vm.$emit('input', this.value)
//             })
//     },
//     watch: {
//         value: function (value) {
//             // update value
//             $(this.$el).val(value)
//         },
//         options: function (options) {
//             // update options
//             $(this.$el).select2({ data: options })
//         }
//     },
//     destroyed: function () {
//         $(this.$el).off().select2('destroy')
//     }
// })
//
// var vm = new Vue({
//     el: '#el',
//     template: '#demo-template',
//     data: {
//         selected: 0,
//         options: [
//             { id: 1, text: 'Hello' },
//             { id: 2, text: 'World' }
//         ]
//     }
// })