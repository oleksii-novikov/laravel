<template>
    <div class="container">
        <top-menu></top-menu>
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">This is my Home Component</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TopMenu from './TopMenu.vue';

    export default {
        mounted() {
            console.log('Component Index mounted.')
        },
        components: {
            TopMenu
        }
    }
</script>
