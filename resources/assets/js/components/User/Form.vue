<template>
    <form role="form" method="POST" v-on:submit.prevent="create" class="form-horizontal">
        <div class="form-group">
            <label for="name" class="col-md-4 control-label">Name</label>
            <div class="col-md-6">
                <input id="name" type="text" v-model="user.name" required="required" autofocus="autofocus" class="form-control">
            </div>
        </div>
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
                    email: 'hunter@nix.com',
                    password: 'password',
                    name: 'hunter'
                }
            }
        },
        methods: {
            create() {
                this.$http.post('/api/users', this.user)
                        .then(response => {
                            console.log(this.user);
                        },() => {
                            console.log('error');
                            this.$emit('usercreated');
                        });
            }
        }
    }
</script>