

import React from "react";
import useBooks from "../components/useBooks";
import Card from "../components/Card";
import { loadMoreBooks } from "../../Slice/booksSlice";
import { useDispatch } from "react-redux";

const Section2 = () => {
    const { books, loading, visibleBooks, setVisibleBooks } = useBooks();
    const dispatch = useDispatch();
    const handleLoadMore = () => {
        dispatch(loadMoreBooks());
    };

    if (loading) {
        return <p>Chargement...</p>;
    }

    return (

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {books.slice(0, visibleBooks).map((book) => (
                <Card key={book.id} book={book} />
            ))}
            
                <button className="oui" onClick={handleLoadMore}>Charger plus de livres</button>

        </div>
    );
};

export default Section2;
