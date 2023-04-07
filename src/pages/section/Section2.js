

import React from "react";
import useBooks from "../components/useBooks";
import Card from "../components/Card";
import { loadMoreBooks } from "../../Slice/booksSlice";

const Section2 = () => {
    const { books, loading, visibleBooks, setVisibleBooks } = useBooks();
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
            {visibleBooks < books.length && (
                <button className="bg-black-700 text-white h-full w-full" onClick={handleLoadMore}>Charger plus de livres</button>

            )}
        </div>
    );
};

export default Section2;
