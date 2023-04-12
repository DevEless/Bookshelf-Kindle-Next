import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  setBooks,
  setFilteredBooks,
  setFilter,
  loadMoreBooks,
} from "../../Slice/booksSlice";
import axios from "axios";

const useBooks = () => {
    const dispatch = useDispatch();
    const filteredBooks = useSelector((state) => state.books.filteredBooks);
    const loading = useSelector((state) => state.books.loading);
    const visibleBooks = useSelector((state) => state.books.visibleBooks);
    const filter = useSelector((state) => state.books.filter);

    const handleFilterChange = (event) => {
        dispatch(setFilter(event.target.value));
    };

    const handleLoadMore = () => {
        dispatch(loadMoreBooks());
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                "https://example-data.draftbit.com/books"
            );
            dispatch(setBooks(response.data));
            dispatch(setFilteredBooks(filter));
        };
        fetchData();
    }, [dispatch, filter]);

    return {
        books: filteredBooks.slice(0, visibleBooks),
        loading,
        handleFilterChange,
        handleLoadMore,
    };
};

export default useBooks;
