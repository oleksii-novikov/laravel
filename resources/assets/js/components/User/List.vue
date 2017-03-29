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
    export default {
        name: 'user-list',
        props: ['users'],
        mounted() {
            console.log('Component List mounted.')
        },
        components: { User }
    }
</script>