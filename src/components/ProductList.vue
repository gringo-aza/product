<template>
    <div class="d-flex align-items-stretch flex-wrap mt-3">
        <product-card v-for="product in products" :key="product.id" :product="product"/>
    </div>
</template>

<!--by Aziz Rozmetov => Gringo 2021-02-12, Fri, 19:17-->

<script>
    import ProductCard from './productCard'
    export default {
        components:{
            ProductCard,
        },
        computed:{
            products() {
                return this.$store.state.products;
            }
        },
        mounted() {
            this.$store.dispatch('getProducts')
        }
    }
</script>

<style scoped>

</style>

<!--fileName => ProductList.vue path => src\components\ProductList.vue -->