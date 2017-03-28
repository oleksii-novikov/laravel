<template>
    <li>{{user.email}} - {{user.name}}</li>
</template>
<script>
    export default {
        props: ['user'],
        mounted() {
            console.log('Component User mounted.')
        }
    }
</script>