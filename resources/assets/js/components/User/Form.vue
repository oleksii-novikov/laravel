<template>
    <form v-on:submit.prevent="submit" class="form-horizontal jumbotron">
        <div v-bind:class="{'has-danger': errors.name}" class="form-group row">
            <label for="name" class="col-md-4 control-label">Name</label>
            <div class="col-md-8">
                <input id="name" type="text" v-model="model.name" required="required" autofocus="autofocus" class="form-control">
                <div class="form-control-feedback" v-for="error in errors.name">{{error}}</div>
            </div>
        </div>
        <div v-bind:class="{'has-danger': errors.email}" class="form-group row">
            <label for="email" class="col-md-4 control-label">E-Mail Address</label>
            <div class="col-md-8">
                <input id="email" type="email" v-model="model.email" required="required" autofocus="autofocus" class="form-control">
                <div class="form-control-feedback" v-for="error in errors.email">{{error}}</div>
            </div>
        </div>
        <div v-bind:class="{'has-danger': errors.password}" class="form-group row">
            <label for="password" class="col-md-4 control-label">Password</label>
            <div class="col-md-8">
                <input id="password" type="password" v-model="model.password" required="required" class="form-control">
                <div class="form-control-feedback" v-for="error in errors.password">{{error}}</div>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-md-8 col-md-offset-4">
                <button type="submit" class="btn btn-primary">Save</button>
            </div>
        </div>
    </form>
</template>
<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'user-form',
        props: ['user', 'errors'],
        data() {
            return {
                model: {}
            }
        },
        computed: {
            ...mapGetters({
                errors: 'userErrors'
            })
        },
        watch: {
            user: function (to, from) {
                this.model = Object.assign({}, this.user);
            }
        },
        methods: {
            submit() {
                this.$emit('formSubmit', this.model);
            }
        }
    }
</script>