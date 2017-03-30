<template>
    <div>
        <table v-if="users.length > 0" class="table table-bordered table-striped table-responsive">
            <thead>
                <th>User</th>
                <th>Controls</th>
            </thead>
            <tbody>
                <user  v-for="user in users" v-bind:user="user"></user>
            </tbody>
        </table>
        <div v-else>There is no users</div>
    </div>
</template>
<script>
    import User from './User.vue';
    import { mapGetters } from 'vuex';

    export default {
        name: 'user-list',
        computed: {
//            users() {
//                return this.$store.state.users;
//            },
            ...mapGetters({
                users: 'users'
            })
        },
        mounted() {
            console.log('Component List mounted.')
        },
        components: { User }
    }
</script>