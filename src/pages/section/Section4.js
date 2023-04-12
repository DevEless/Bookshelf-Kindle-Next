import React from "react";
import useBooks from "../components/useBooks";
import Card from "../components/Card";
import { loadMoreBooks } from "../../Slice/booksSlice";
import { useDispatch } from "react-redux";
import { filterBooksByGenre } from '../../Slice/booksSlice'
import { setFilter } from "../../Slice/booksSlice";
import { useSelector } from "react-redux";
import { sortBooksByTitle } from "../../Slice/booksSlice";
import {filterBooksByAuthor} from "../../Slice/booksSlice"

const Section4 = () => {
    const { books, loading, visibleBooks } = useBooks();
    const filter = useSelector((state) => state.books.filter);
    const dispatch = useDispatch();
    const handleLoadMore = () => {
        dispatch(loadMoreBooks());
    };
    const handleFilterChange = (genre) => {
        dispatch(filterBooksByGenre(genre));
    };
    const handleSortByTitle = (sortOrder) => {
        dispatch(sortBooksByTitle(sortOrder));
    };
    const handleAuthorSearch = (authorName) => {
        dispatch(filterBooksByAuthor(authorName));
    };


    if (loading) {
        return <p>Chargement...</p>;
    }

    return (
        <div>

            <div className="flex">
                <div className="container mx-auto w-[15%] ">
                    <div>
                        <div>

                            <input
                                type="text"
                                maxLength="8"
                                className="w-[100%] border-2 border-gray-300 px-4 py-2 focus:outline-none focus:border-[#5a8e7a]"
                                
                                placeholder="Recherche par auteur"
                                onChange={(e) => handleAuthorSearch(e.target.value)}
                            />

                        </div>
                        <div className="flex-col flex">
                            <p className="font-bold text-center">
                                Category
                            </p>
                            <button onClick={() => handleFilterChange("")}>All</button>
                            <button onClick={() => handleFilterChange("Historical")}>Historical</button>
                            <button onClick={() => handleFilterChange("Mystery")}>Mystery</button>
                            <button onClick={() => handleFilterChange("Thriller")}>Thriller</button>
                            <button onClick={() => handleFilterChange("Biography")}>Biography</button>
                            <button onClick={() => handleFilterChange("Classics")}>Classics</button>
                            <button onClick={() => handleFilterChange("Fiction")}>Fiction</button>
                            <button onClick={() => handleFilterChange("Inspirational")}>Inspirational</button>
                        </div>
                        <div>

                        <select
  className="w-[100%] border-2 border-gray-300 px-4 py-2  focus:outline-none focus:border-[#5a8e7a]"
  onChange={(e) => handleSortByTitle(e.target.value)}
>
  <option value="">Choisir une option</option>
  <option value="asc">Trier les titres de A à Z</option>
  <option value="desc">Trier les titres de Z à A</option>
  {/* Insérez vos options ici */}
</select>

                        </div>
                    </div>
                </div>
                <div id="s2" className="grid grid-cols-2 md:grid-cols-4 gap-4 mr-4">
                    {books.slice(0, visibleBooks).map((book) => (
                        <Card key={book.id} book={book} />
                    ))}
                    <span className="oui">
                        <button
                            id="anim1-sweep-to-right"
                            className="bg-[#5a8e7a] text-white uppercase tracking-wider py-2 px-4 h-12 mt-4"
                            onClick={handleLoadMore}
                        >
                            LOAD MORE
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Section4;
