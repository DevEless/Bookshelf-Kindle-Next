// store.js
import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";
import favoritesReducer from "./favoriteSlice";
import authReducer from "./authSlice";

const store = configureStore({
    reducer: {
        books: booksReducer,
        favorites: favoritesReducer, 
        auth: authReducer,
    },
    
    
    
});

export default store;
