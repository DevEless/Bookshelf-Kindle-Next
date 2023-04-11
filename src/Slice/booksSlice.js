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
        loadMoreBooks: (state) => {
            state.visibleBooks += 8;
        },
        filterBooksByGenre: (state, action) => {
            const genre = action.payload.toLowerCase();
            if (genre === "") {
                state.filteredBooks = state.books;
            } else {
                state.filteredBooks = state.books.filter((book) => {
                    return book.genres && book.genres.split(", ").some((g) => g.toLowerCase() === genre);
                });
            }
        },




    },
});

export const {
    setBooks,
    setFilteredBooks,
    setVisibleBooks,
    setFilter,
    loadMoreBooks,
    filterBooksByGenre,
} = booksSlice.actions;

export default booksSlice.reducer;
