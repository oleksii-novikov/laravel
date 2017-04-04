<template>
    <div class="container">
        <top-menu></top-menu>
        <div class="row">
            <div class="col"></div>
            <div class="col-5">
                <user-form @formSubmit="processForm" :user="user"></user-form>
            </div>
            <div class="col-5">
                <user-list></user-list>
            </div>
        </div>
    </div>
</template>

<script>
    import TopMenu from './TopMenu.vue';
    import UserForm from './User/Form.vue';
    import UserList from './User/List.vue';
    import { mapGetters } from 'vuex';

    export default {
        props: ['id'],
        mounted() {
            console.log('Component mounted.')
        },
        data: () => ({
            errors: [],
            user: {id: '', name:'', email:'',password:''}
        }),
        computed: {
            ...mapGetters(['users'])
        },
        watch: {
            '$route' (to, from) {
                if (!!this.id) {
                    this.$store.dispatch('cleanUserErrors');
                    this.user = this.users.find(user => user.id == this.id);
                }
            }
        },
        methods: {
            processForm(formData) {
                if (formData.id) {
                    console.log('UPDATE');
                    this.update(formData)
                } else {
                    console.log('CREATE');
                    this.create(formData);
                }
            },
            create(user) {
                this.$store.dispatch('addUser', user);
            },
            update(user) {
                this.$store.dispatch('updateUser', user);
            },
            fetchUsers() {
                this.$store.dispatch('fetchUsers');
            }
        },
        components: {
            TopMenu, UserForm, UserList
        },
        created() {
            this.fetchUsers();
        }
    }
</script>
