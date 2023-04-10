import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "@/Slice/favoriteSlice";

const Card = ({ book }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const favorites = useSelector((state) => state.favorites);


    const handleCardClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const dispatch = useDispatch();

    const handleAddFavorite = () => {
        const isBookInFavorites = favorites.some((favorite) => favorite.id === book.id);

        if (!isBookInFavorites) {
            dispatch(addFavorite(book));
        } else {
            alert("Ce livre est déjà dans vos favoris.");
        }
    };

    const Modal = () => (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white p-6 rounded shadow-lg">
                    <button className="text-right mb-2" onClick={closeModal}>
                        Fermer
                    </button>
                    <img className="w-full max-h-[380px]" src={book.image_url} alt={book.title} />
                    <div className="font-bold text-xl mb-2">{book.title}</div>
                    <p className="text-gray-700 text-base">{book.authors}</p>
                <button id="anim1-sweep-to-right" className="bg-[#5a8e7a] text-white p-2 mt-2" onClick={handleAddFavorite}>
            Add to favorites
        </button>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <div id="cardanim" className="w-3/4 rounded overflow-hidden shadow-lg mx-auto max-h-[600px]" >
                <img className="w-full max-h-[380px] cursor-pointer" onClick={handleCardClick} src={book.image_url} alt={book.title} />
                <div id="textanim" className="px-6 py-4 h-">
                    <div className="font-bold text-xl mb-2">{book.title}</div>
                    <p className="text-gray-700 text-base">{book.authors}</p>
                    <button id="favorite-button" className="bg-[#5a8e7a] text-white p-2 mb-2" onClick={handleAddFavorite}>
            Add to favorites
        </button>
                </div>
            </div>
            {isModalOpen && <Modal />}
        </>
    );
};

export default Card;
