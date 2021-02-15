<template>
    <div class="mr-3" >
        <b-card
                :title="product.name"
                :img-src="product.image"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
        >
            <b-card-text>
                <router-link :to="{name: 'product', params:{id: product.id }}">{{product.type}}</router-link>
                <br>
                <strong>{{product.price}}$</strong>
                <p>{{product.title}}</p>
            </b-card-text>

            <b-button  class="btn btn-secondary" @click="addToCart()" href="#" variant="primary">Add to Cart &nbsp;{{count}}</b-button>
        </b-card>
    </div>
</template>

<!--by Aziz Rozmetov => Gringo 2021-02-12, Fri, 21:4-->

<script>

    export default {
        props: ["product"],
        data(){
            return{
                count:0
            }
        },
        methods:{
            addToCart() {
                this.$store.dispatch('addProductToCart',{
                    product: this.product,
                    quantity: 1,
                });
                this.count++
            },
        },
        computed:{

        },
    }

</script>

<style scoped>

</style>

<!--fileName => productCard.vue path => src\components\productCard.vue -->