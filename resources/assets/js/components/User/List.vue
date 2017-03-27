<template>
    <div class="list">
        <ul v-if="users.length > 0">
            <li v-for="user in users">{{user.email}}</li>
        </ul>
        <div v-else>There is no users</div>
    </div>
</template>
<script>

    export default {
        name: 'user-list',
        mounted() {
            console.log('Component List mounted.')
        },
        data() {
            return {
                user: {
                    email: '',
                    password: '',
                    age: ''
                },
                users:[
//                    {
//                        email: 'ololo@mail.com',
//                        password: '1231231',
//                        age: 25
//                    },
//                    {
//                        email: 'trololo@mail.com',
//                        password: '1231231',
//                        age: 26
//                    },
//                    {
//                        email: 'bololo@mail.com',
//                        password: '1231231',
//                        age: 18
//                    },
                ]
            }
        },
        methods: {

        },
        created() {
            this.$http.get('https://jsonplaceholder.typicode.com/users')
                    .then((response) => {
                        console.log(response);
                        this.users = response.body;
                    })
        }
    }
</script>