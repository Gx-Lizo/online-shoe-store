import { createSlice } from "@reduxjs/toolkit";

export const  userSlice = createSlice({

    name: "user",
    initialState: {

        userList: [],
        productList: [
            {brand: 'Monosi', model: 'Mono', price: 1500, pic: 'https://monosimovements.co.za/cdn/shop/files/37_377f2f67-8aff-4d6f-a11c-8c5cb2b50a47_480x.jpg?'},
            {brand: 'Monosi', model: 'Mono', price: 2000, pic: 'https://monosimovements.co.za/cdn/shop/products/36_480x.jpg'},
            {brand: 'Monosi', model: 'Mono', price: 1000, pic: 'https://monosimovements.co.za/cdn/shop/products/1_07_480x.jpg'},
            {brand: 'Bathu', model: 'Khalanga', price: 1500, pic: 'https://www.bathu.co.za/cdn/shop/files/Bathu-KhalangaProduct-17_480x_crop_center.jpg'},
            {brand: 'Bathu', model: 'Khalanga', price: 1500, pic: 'https://www.bathu.co.za/cdn/shop/files/Bathu-KhalangaProduct-18_480x_crop_center.jpg'},
            {brand: 'Bathu', model: 'Khalanga', price: 1500, pic: 'https://www.bathu.co.za/cdn/shop/files/Bathu-KhalangaProduct-13_480x_crop_center.jpg'},
            {brand: 'Bathu', model: 'Ndofaya', price: 2500, pic: 'https://www.bathu.co.za/cdn/shop/files/BathuNdofaya9-Website_480x_crop_center.jpg'},
            {brand: 'Bathu', model: 'Ndofaya', price: 2500, pic: 'https://www.bathu.co.za/cdn/shop/files/BathuNdofaya7-Website_480x_crop_center.jpg'},
            {brand: 'Bathu', model: 'Ndofaya', price: 2500, pic: 'https://www.bathu.co.za/cdn/shop/files/BathuNdofaya8-Website_480x_crop_center.jpg?'},
            {brand: 'Bathu', model: 'Sky Edition', price: 2000, pic: 'https://www.bathu.co.za/cdn/shop/products/Bathu153_480x_crop_center.jpg'},
            {brand: 'Bathu', model: 'Sky Edition', price: 2000, pic: 'https://www.bathu.co.za/cdn/shop/products/Bathu227_480x_crop_center.jpg'},
            {brand: 'Bathu', model: 'Sky Edition', price: 2000, pic: 'https://www.bathu.co.za/cdn/shop/products/Bathu224_480x_crop_center.jpg'},
            {brand: 'Bathu', model: 'Switch', price: 1200, pic: 'https://www.bathu.co.za/cdn/shop/products/Bathu11_480x_crop_center.jpg'},
            {brand: 'Bathu', model: 'Switch', price: 1200, pic: 'https://www.bathu.co.za/cdn/shop/products/Bathu13_480x_crop_center.jpg'},
            {brand: 'Bathu', model: 'Switch', price: 1200, pic: 'https://www.bathu.co.za/cdn/shop/products/Bathu12_480x_crop_center.jpg'},
        ],
        cartItems: [],
        isLoggedIn: false,
        userLoggedIn: ""

    },
    reducers: {

        createUser: (state, action) => {
 
                state.userList.push(action.payload);
                
        },

        userLogin: (state, action) => {

                state.isLoggedIn = action.payload;

                if (!action.payload) {

                    state.cartItems =[];
                }
        },
        loggedinUser: (state, action) => {

            state.userLoggedIn = action.payload;
        },

        addItem: (state, action) => {

            state.cartItems.push(action.payload);
        },

        removeItem: (state, action) => {

            state.cartItems = state.cartItems.filter((_,index) => index !== action.payload);
        }
    }
});

export const {createUser, userLogin, loggedinUser, addItem, removeItem} = userSlice.actions;

export default userSlice.reducer;
