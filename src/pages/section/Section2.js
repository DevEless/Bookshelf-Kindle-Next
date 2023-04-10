


import React from "react";
import useBooks from "../components/useBooks";
import Card from "../components/Card";
import { loadMoreBooks } from "../../Slice/booksSlice";
import { useDispatch } from "react-redux";

const Section2 = () => {
    const { books, loading, visibleBooks } = useBooks();
    const dispatch = useDispatch();
    const handleLoadMore = () => {
        dispatch(loadMoreBooks());
    };

    if (loading) {
        return <p>Chargement...</p>;
    }

    return (


        <div>

            <div className="bg-gray-100 py-8 mt-8">
                <div className="max-w-screen-xl mx-auto px-4">
                    <h2 className="text-xl font-bold text-[#5a8e7a] mb-4 text-center tracking-wider">BOOKS GALLERY</h2>
                    <h1 className="text-4xl font-bold text-black text-center relative mb-8"> Popular Books        
                    <div className="h-0.5 w-1/4 bg-[#5a8e7a] mx-auto  mt-4"></div>
                    </h1>
                </div>
            </div>
            <div id="s2" className="grid grid-cols-2 md:grid-cols-4 gap-4  bg-gray-100 ">
                {books.slice(0, visibleBooks).map((book) => (
                    <Card key={book.id} book={book} />
                ))}

                <span className="oui">

                    <button id="anim1-sweep-to-right" className="bg-[#5a8e7a]  text-white uppercase tracking-wider py-2 px-4 h-12 mt-4" onClick={handleLoadMore}>LOAD MORE</button>
                </span>



            </div>
        </div>
    );
};

export default Section2;
