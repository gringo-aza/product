<template>
    <div>
        <b-card no-body class="overflow-hidden mt-5" style="max-width: 540px;" v-if="product">
            <b-row no-gutters>
                <b-col md="6">
                    <b-card-img :src="product.image" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                    <b-card-body title="Horizontal Card">
                        <b-card-text>
                            <h1>{{product.name}}</h1>
                            <h3>${{product.price}}</h3>
                        </b-card-text>
                    </b-card-body>
                    <div>
                        <input type="text" class="text-center col-4 p-1 ml-3"/>
                        <b-button class="btn btn-secondary ml-1" @click="addToCart()" href="#" variant="outline-primary">Add to Cart &nbsp;{{this.count}}</b-button>
                        <p class="mt-3">{{product.title}}.</p>
                    </div>
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<!--by Aziz Rozmetov => Gringo 2021-02-12, Fri, 21:22-->

<script>
    export default {
        name: '',
        components: {},
        props:['id'],
        data(){
          return{
              count: 0,
          }
        },
        computed:{
            product(){
                return this.$store.state.product;
            }
        },
        mounted() {
            this.$store.dispatch('getProduct', this.id)
        },
        methods:{
            addToCart(){
                this.$store.dispatch('addProductToCart',{
                    product: this.product,
                    quantity: 1,
                });
                this.count++
            }
        }
    }

</script>

<style scoped>

</style>

<!--fileName => Product.vue path => src\pages\Product.vue -->