
import useBooks from "../components/useBooks";
import Card from "../components/Card";
import { loadMoreBooks } from "../../Slice/booksSlice";
import { useDispatch } from "react-redux";
import { filterBooksByGenre } from '../../Slice/booksSlice'
import React, { useState } from "react";
import { Transition } from "react-transition-group";

import { AiFillCaretDown} from "react-icons/ai";
import { sortBooksByTitle } from "../../Slice/booksSlice";
import { filterBooksByAuthor } from "../../Slice/booksSlice"

const Section4 = () => {
    const { books, loading, visibleBooks } = useBooks();

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

    const [showDropdown, setShowDropdown] = useState(false);

    if (loading) {
        return <p>Chargement...</p>;
    }

    const duration = 300;

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
    };

    const transitionStyles = {
        entering: { opacity: 0 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
    };

    return (
        <div className="md3">
            <div id="select4" className="flex">
                <div id="kadri2" className="container mx-auto w-[15%]">
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
                            <p id ='titre433' className="font-bold text-initial hidden md:block mt-3">
                                Category
                            </p>

                            <div className="relative flex flex-col md:flex-row">
    <button
        className="font-light md:hidden md:w-full md:text-center md:p-2   md:hover:bg-gray-200 "
        onClick={() => setShowDropdown(!showDropdown)}
    >
    Category ↓
    </button>
    <div id="benja" className="hidden md:flex flex-col">
                                    <button
                                        className="w-full text-left p-2 hover:bg-gray-200"
                                        onClick={() => handleFilterChange("")}
                                    >
                                        All
                                    </button>
                                    <button
                                        className="w-full text-left p-2 hover:bg-gray-200"
                                        onClick={() => handleFilterChange("Historical")}
                                    >
                                        Historical
                                    </button>
                                    <button
                                        className="w-full text-left p-2 hover:bg-gray-200"
                                        onClick={() => handleFilterChange("Mystery")}
                                    >
                                        Mystery
                                    </button>
                                    <button
                                        className="w-full text-left p-2 hover:bg-gray-200"
                                        onClick={() => handleFilterChange("Thriller")}
                                    >
                                        Thriller
                                    </button>
                                    <button
                                        className="w-full text-left p-2 hover:bg-gray-200"
                                        onClick={() => handleFilterChange("Biography")}
                                    >
                                        Biography
                                    </button>
                                    <button
                                        className="w-full text-left p-2 hover:bg-gray-200"
                                        onClick={() => handleFilterChange("Classics")}
                                    >
                                        Classics
                                    </button>
                                    <button
                                        className="w-full text-left p-2 hover:bg-gray-200"
                                        onClick={() => handleFilterChange("Fiction")}
                                    >
                                        Fiction
                                    </button>
                                    <button
                                        className="w-full text-left p-2 hover:bg-gray-200"
                                        onClick={() => handleFilterChange("Inspirational")}
                                    >
                                        Inspirational
                                    </button>
                                    </div>


                                    <Transition in={showDropdown} timeout={duration} unmountOnExit>
                                        {(state) => (
                                            <div
                                                style={{
                                                    ...defaultStyle,
                                                    ...transitionStyles[state],
                                                }}
                                                className="bg-white absolute z-10 mt-1 w-full border rounded-md shadow-md"
                                            >
                                                <button
                                                    className="w-full text-left p-2 hover:bg-gray-200"
                                                    onClick={() => handleFilterChange("")}
                                                >
                                                    All
                                                </button>
                                                <button
                                                    className="w-full text-left p-2 hover:bg-gray-200"
                                                    onClick={() => handleFilterChange("Historical")}
                                                >
                                                    Historical
                                                </button>
                                                <button
                                                    className="w-full text-left p-2 hover:bg-gray-200"
                                                    onClick={() => handleFilterChange("Mystery")}
                                                >
                                                    Mystery
                                                </button>
                                                <button
                                                    className="w-full text-left p-2 hover:bg-gray-200"
                                                    onClick={() => handleFilterChange("Thriller")}
                                                >
                                                    Thriller
                                                </button>
                                                <button
                                                    className="w-full text-left p-2 hover:bg-gray-200"
                                                    onClick={() => handleFilterChange("Biography")}
                                                >
                                                    Biography
                                                </button>
                                                <button
                                                    className="w-full text-left p-2 hover:bg-gray-200"
                                                    onClick={() => handleFilterChange("Classics")}
                                                >
                                                    Classics
                                                </button>
                                                <button
                                                    className="w-full text-left p-2 hover:bg-gray-200"
                                                    onClick={() => handleFilterChange("Fiction")}
                                                >
                                                    Fiction
                                                </button>
                                                <button
                                                    className="w-full text-left p-2 hover:bg-gray-200"
                                                    onClick={() => handleFilterChange("Inspirational")}
                                                >
                                                    Inspirational
                                                </button>
                                                <button
                                                    className="w-full text-left p-2 hover:bg-gray-200 font-bold"
                                                    onClick={() => setShowDropdown(false)}
                                                >
                                                    Fermer
                                                </button>

                                            </div>

                                        )}
                                    </Transition>
                                </div>
                            </div>
                            <div>
                                <select
                                    className="w-[100%] border-2 border-gray-300 px-4 py-2  focus:outline-none focus:border-[#5a8e7a]"
                                    onChange={(e) => handleSortByTitle(e.target.value)}
                                >
                                    <option value="">Choisir une option</option>
                                    <option value="asc">Trier les titres de A à Z</option>
                                    <option value="desc">Trier les titres de Z à A</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div id="s4" className="grid grid-cols-2 md:grid-cols-4 gap-4 mr-4">
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
