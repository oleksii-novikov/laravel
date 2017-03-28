<template>
    <div class="list">
        <ul v-if="users.length > 0">
            <user v-for="user in users" v-bind:user="user"></user>
        </ul>
        <div v-else>There is no users</div>
    </div>
</template>
<script>
    import User from './User.vue';
    export default {
        name: 'user-list',
        mounted() {
            console.log('Component List mounted.')
        },
        components: { User },
        data() {
            return {
                users: []
            }
        },
        methods: {
            fetchUsers() {
                this.$http.get('/api/users')
                        .then(response => {
                            console.log(response);
                            this.users = response.data.users;
                        })
            }
        },
        created() {
            this.fetchUsers();
        }
    }
</script>