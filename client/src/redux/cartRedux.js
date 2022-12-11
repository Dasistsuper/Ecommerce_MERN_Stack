import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({ // Setting the inital state of the cart
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers:{  
        addProduct: (state, action) => { // Adding products to cart
            state.quantity += 1;  // Everytime add to cart button is clicked it will increment the number by 1
            state.products.push(action.payload); // Payload is equal to the new product
            state.total += action.payload.price * action.payload.quantity; //Calculates the selected products price mutiplied by the quantity selected
        },

        updateProduct: (state, action) => { // Adding products to cart
            state.products = state.products.map(product => product._id === action.payload.id && product.size === action.payload.size && product.color === action.payload.color ? {... product, quantity : product.quantity + action.payload.quantity} : product); // Payload is equal to the new product
            state.total += action.payload.quantity < 1 ? -action.payload.price : action.payload.price; //Calculates the selected products price mutiplied by the quantity selected
        },

        deleteProduct: (state, action) => { // Deleting product from cart
            state.quantity -= 1;
            state.products = state.products.filter(product => product._id !== action.payload.id || product.size !== action.payload.size || product.color !== action.payload.color);
            state.total -=  action.payload.totalPrice; 
        },

        initalizeCart: (state) => {
            state.products = []
            state.quantity = 0
            state.total = 0
        },
    },
});

export const { addProduct, updateProduct, initalizeCart, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
