<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div v-if="show" class="panel-heading">This is my Home Component</div>
                </div>
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
            UserForm, UserList
        },
        created() {
            this.fetchUsers();
        }
    }
</script>
