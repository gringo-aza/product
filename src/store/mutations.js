export const SET_PRODUCTS = (state, products) => {
    state.products = products;
};

export const SET_PRODUCT =(state, product)=>{
    state.product = product
};
export const ADD_TO_CART = (state, {product, quantity, count})=>{
    let productInCart = state.cart.find(item=> {
       return item.product.id === product.id;
    });
    if (productInCart){
        productInCart.quantity += quantity;
        return;
    }
    count++;

    state.cart.push({
        product,
        quantity,
        count
    })
};

export const REMOVE_PRODUCT = (state, product) => {
    state.cart = state.cart.filter(item => {
        return item.product.id !== product.id
    })
};

export const CLEAR_CART_ITEMS = (state)=> {
  state.cart =[];
};