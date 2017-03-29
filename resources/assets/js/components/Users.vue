<template>
    <div class="container">
        <top-menu></top-menu>
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel-body">
                    <user-form v-on:formSubmit="processForm" v-bind:user="user"></user-form>
                </div>
            </div>
            <div class="col-md-8 col-md-offset-2">
                <user-list v-bind:users="users"></user-list>
            </div>
        </div>
    </div>
</template>

<script>
    import TopMenu from './TopMenu.vue';
    import UserForm from './User/Form.vue';
    import UserList from './User/List.vue';

    export default {
        props: ['id'],
        mounted() {
            console.log('Component mounted.')
        },
        data: () => ({
            users: [],
            user: {}
        }),
        watch: {
            '$route' (to, from) {
                console.log(this.id);
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
                            this.users.push(response.data.user);
                        }, () => {
                            console.log('error');
                        });
            },
            update(user) {
                this.$http.put('/api/users/' + user.id, user)
                        .then(response => {
                            //this.user = response.data.user;
                        }, () => {
                            console.log('error');
                        });
            },
            fetchUsers() {
                this.$http.get('/api/users')
                        .then(response => {
                            console.log(response);
                            this.users = response.data.users;
                        })
            },
            fetch(id) {
                this.$http.get('/api/users/{{'+id+'}}')
                        .then(response => {
                            console.log(response);
                            this.users = response.data.users;
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
