// store.js
import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";
import favoritesReducer from "./favoriteSlice";

const store = configureStore({
    reducer: {
        books: booksReducer,
        favorites: favoritesReducer, 
    },
    
    
    
});

export default store;
