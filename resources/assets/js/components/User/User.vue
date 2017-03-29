<template>
    <tr>
        <td>{{user.email}} - {{user.name}}</td>
        <td>
            <router-link class="btn btn-info edit" :to="{ name: 'user', params: { id: user.id }}">Edit</router-link>
        </td>
    </tr>
</template>
<script>
    export default {
        props: ['user'],
        mounted() {
            console.log('Component User mounted.')
        }
    }
</script>