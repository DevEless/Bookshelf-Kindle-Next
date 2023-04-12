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
        sortBooksByTitle: (state, action) => {
            const sortOrder = action.payload;
            state.filteredBooks = state.filteredBooks.slice().sort((a, b) => {
                const titleA = a.title.toLowerCase();
                const titleB = b.title.toLowerCase();

                if (sortOrder === "asc") {
                    return titleA.localeCompare(titleB);
                } else if (sortOrder === "desc") {
                    return titleB.localeCompare(titleA);
                }
                return 0;
            });
        },
        filterBooksByAuthor: (state, action) => {
            const authorName = action.payload.toLowerCase();
            state.filteredBooks = state.books.filter((book) =>
                book.authors && book.authors.toLowerCase().includes(authorName)
            );
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
    sortBooksByTitle,
    filterBooksByAuthor,
} = booksSlice.actions;

export default booksSlice.reducer;
