import axios from "axios";

export const getProducts = ({commit})=> {
    axios.get('http://localhost:3000/products').then(response=>{
      commit('SET_PRODUCTS', response.data)
    })
};

export const getProduct = ({commit}, productId)=> {
    axios.get(` http://localhost:3000/products/${productId}`)
        .then(response => {
        commit('SET_PRODUCT', response.data)
    })
};
export const addProductToCart = ({commit}, {product, quantity, count})=>{
    commit('ADD_TO_CART', {product, quantity, count})

    // axios.post('http://localhost:3000',{
    //     product_id: product.id,
    //     quantity,
    // })
};

export const removeCart= ({commit}, product)=> {
    commit('REMOVE_PRODUCT', product)
};

export const clearCartItems= ({commit})=>{
    commit('CLEAR_CART_ITEMS')
};