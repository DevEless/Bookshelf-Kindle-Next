// booksSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [],
    filteredBooks: [],
    loading: true,
    visibleBooks: 8,
    filter: "",
    initialBooks: [], 
  };

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
      state.loading = false;
      state.initialBooks = action.payload; 
    },
    setFilteredBooks: (state, action) => {
      state.filteredBooks = state.books.filter(
        (book) =>
          book.title &&
          book.title.toLowerCase().startsWith(action.payload.toLowerCase())
      );
    },
    setVisibleBooks: (state, action) => {
      state.visibleBooks = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
      state.visibleBooks = 8;
      
    },
  },
});

export const {
  setBooks,
  setFilteredBooks,
  setVisibleBooks,
  setFilter,
} = booksSlice.actions;

export default booksSlice.reducer;
