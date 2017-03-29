<template>
    <li class="list-group-item">
        {{user.email}} - {{user.name}}
        <router-link class="btn btn-info edit badge" :to="{ name: 'user', params: { id: user.id }}">Edit</router-link>
    </li>
</template>
<script>
    export default {
        props: ['user'],
        mounted() {
            console.log('Component User mounted.')
        }
    }
</script>