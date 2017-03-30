<template>
    <div class="container">
        <top-menu></top-menu>
        <div class="row">
            <div class="col"></div>
            <div class="col-5">
                <user-form v-on:formSubmit="processForm" v-bind:user="user" v-bind:errors="errors"></user-form>
            </div>
            <div class="col-5">
                <user-list></user-list>
            </div>
        </div>
    </div>
</template>

<script>
    import TopMenu from './TopMenu.vue';
    import UserForm from './User/Form.vue';
    import UserList from './User/List.vue';
    import { mapGetters } from 'vuex';

    export default {
        props: ['id'],
        mounted() {
            console.log('Component mounted.')
        },
        computed: {
            ...mapGetters({
                users: 'users'
            })
        },
        data: () => ({
            errors: [],
            user: {}
        }),
        watch: {
            '$route' (to, from) {
                if (!!this.id) {
                    this.user = this.users.find(user => user.id == this.id);
                }
            }
        },
        methods: {
            processForm(formData) {
                if (formData.id) {
                    console.log('UPDATE');
                    this.update(formData)
                } else {
                    console.log('CREATE');
                    this.create(formData);
                }
            },
            create(user) {
                this.$http.post('/api/users', user)
                        .then(response => {
                            this.$store.dispatch('addUser', response.data.user);
                        }, (response) => {
                            this.errors = response.data;
                            console.log('error');
                        });
            },
            update(user) {
                console.log('user', user);
                this.$http.put('/api/users/' + user.id, user)
                        .then(response => {
                            this.$store.dispatch('updateUser', response.data.user);
                        }, (response) => {
                            this.errors = response.data;
                            console.log('error');
                        });
            },
            fetchUsers() {
                this.$http.get('/api/users')
                        .then(response => {
                            console.log(response);
                            this.$store.dispatch('pushUsers', response.data.users);
                        })
            },
            fetch(id) {
                this.$http.get('/api/users/{{'+id+'}}')
                        .then(response => {
                            console.log(response);
                        })
            }
        },
        components: {
            TopMenu, UserForm, UserList
        },
        created() {
            this.fetchUsers();
        }
    }
</script>
