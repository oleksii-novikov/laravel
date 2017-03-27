<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div v-if="show" class="panel-heading">This is my Home Component</div>
                </div>
                <div class="panel-body">
                    <user-form></user-form>
                </div>
            </div>
            <div class="col-md-8 col-md-offset-2">

            </div>
        </div>
    </div>
</template>

<script>
    import UserForm from './User/Form.vue';
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data: () => ({
            show: true
        }),
        components: {
            UserForm
        }
    }
</script>
