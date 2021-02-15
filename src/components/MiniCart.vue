<template>
    <div>
        <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
                        <slot></slot>
            <div v-for="item in cart" :key="item.product.id">

                <div class="m-2 d-flex justify-content-between">
                    <div>
                        <b-dropdown-item href="#">{{item.product.name}}</b-dropdown-item>
                        <b-dropdown-item href="#">{{item.quantity}} x ${{ item.product.price}}</b-dropdown-item>
                    </div>
                    <div class="mt-auto">
                        <b-button @click.prevent="removeCart(item.product)">remove</b-button>
                    </div>
                </div>
                <hr>
            </div>
            <div class="m-2 d-flex justify-content-between">
                <span>Total:${{cartTotalPrice}}</span>
                <a href="#" @click.prevent="clearCartItems()">clear cart</a>
            </div>
        </b-nav-item-dropdown>
    </div>
</template>

<!--by Aziz Rozmetov => Gringo 2021-02-12, Fri, 17:21-->

<script>
    export default {
        computed:{
            cart() {
                return this.$store.state.cart
            },
            cartTotalPrice(){
              return this.$store.getters.cartTotalPrice;
            },
        },
        methods:{
            removeCart(product){
                this.$store.dispatch('removeCart', product);
            },
            clearCartItems(){
                this.$store.dispatch("clearCartItems");
            },
        },
    }

</script>

<style scoped>

</style>

<!--fileName => MiniCart.vue path => src\components\MiniCart.vue -->