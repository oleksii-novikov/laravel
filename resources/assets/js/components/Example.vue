<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Example Component</div>

                    <div v-if="seen" class="panel-body">
                        I'm an example component!
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data: () => ({
            seen: 0,
            show: false,
            canSuccess: true,
            duration: 3000,
            height: '2px',
            color: '#77b6ff',
            failedColor: 'red'
        }),
    }
</script>
