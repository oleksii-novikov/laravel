<template>
    <div class="container">
        <top-menu></top-menu>
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel-body">
                    <user-form v-on:formSubmit="processForm"></user-form>
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
        mounted() {
            console.log('Component mounted.')
        },
        data: () => ({
            show: true,
            users: []
        }),
        methods: {
            processForm(formData) {
                this.$http.post('/api/users', formData)
                        .then(response => {
                            this.users.push(response.data.user);
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
