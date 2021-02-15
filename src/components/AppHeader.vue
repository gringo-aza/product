<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
            <b-navbar-brand href="#"></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <router-link :to="{ name: 'home' }" class="mr-3 exact">Home</router-link>
                    <router-link to="/product/:id" >Product</router-link>
                 </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto" @click="$event.stopPropagation()">
                <template>
                    <div>
                       <b-badge class="d-flex justify-content-between align-items=center" pill
                                variant="secondary">{{cartItemCount}}<mini-cart/></b-badge>
                    </div>

                </template>

            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<!--by Aziz Rozmetov => Gringo 2021-02-12, Fri, 16:45-->

<script>
    import MiniCart from './MiniCart'
    export default {
        name: 'AppHeader',
        components:{
            MiniCart,
        },
        computed:{
            cartItemCount(){
                return this.$store.getters.cartItemCount;
            }
        },
    }

</script>

<style>
    /*.navbar-expand-lg .navbar-nav .nav-link {*/
    /*     padding-right: 0;*/
    /*    padding-left: 0;*/
    /*}*/
    body {
        padding-top: 60px;
    }
    .router-link-exact-active{
        color: red;
    }
    .nav-link {
         padding: 0;
    }
    .b-badge {
        padding: 0 !important;
    }
</style>

<!--fileName => AppHeader.vue path => src\components\AppHeader.vue -->