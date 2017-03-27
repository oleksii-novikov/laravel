<template>
    <form role="form" method="POST" v-on:submit="submit" class="form-horizontal">
        <div class="form-group">
            <label for="email" class="col-md-4 control-label">E-Mail Address</label>
            <div class="col-md-6">
                <input id="email" type="email" v-model="user.email" required="required" autofocus="autofocus" class="form-control">
            </div>
        </div>
        <div class="form-group"><label for="password" class="col-md-4 control-label">Password</label>
            <div class="col-md-6">
                <input id="password" type="password" v-model="user.password" required="required" class="form-control">
            </div>
        </div>
        <div class="form-group">
            <label for="age" class="col-md-4 control-label">Age</label>
            <div class="col-md-6">
                <input id="age" type="text" v-model="user.age" required="required" autofocus="autofocus" class="form-control">
            </div>
        </div>
        <div class="form-group">
            <div class="col-md-8 col-md-offset-4">
                <button type="submit" class="btn btn-primary">Create</button>
            </div>
        </div>
    </form>
</template>
<script>
    export default {
        name: 'user-form',
        mounted() {
            console.log('Component Form mounted.')
        },
        data() {
            return {
                user: {
                    email: '',
                    password: '',
                    age: ''
                },
                users:[
                    {
                        email: 'ololo@mail.com',
                        password: '1231231',
                        age: 25
                    },
                    {
                        email: 'trololo@mail.com',
                        password: '1231231',
                        age: 26
                    },
                    {
                        email: 'bololo@mail.com',
                        password: '1231231',
                        age: 18
                    },
                ]
            }
        },
        methods: {
            submit(e) {
                e.preventDefault();
                console.log('submit is clicked');
            }
        }
    }
</script>