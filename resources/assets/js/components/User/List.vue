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
        props: ['users'],
        mounted() {
            console.log('Component List mounted.')
        },
        components: { User }
    }
</script>