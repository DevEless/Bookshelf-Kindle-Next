import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "@/Slice/favoriteSlice";
import DetailBook from '../book/[id]'
import { router } from 'next/router';
const Card = ({ book }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const favorites = useSelector((state) => state.favorites);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);



    const dispatch = useDispatch();

    const handleAddFavorite = () => {
        if (!isAuthenticated) {
            alert("Veuillez vous connecter pour ajouter des favoris.");
            return;
        }

        const isBookInFavorites = favorites.some((favorite) => favorite.id === book.id);

        if (!isBookInFavorites) {
            dispatch(addFavorite(book));
        } else {
            alert("Ce livre est déjà dans vos favoris.");
        }
    };


    const DetailBook = (book) => {
        router.push(`/book/${book.id}`)
    }
    return (
        <>
            <div id="cardanim" className="w-[300px] rounded overflow-hidden shadow-lg  max-h-[600px] mx-auto" >
                <img className="w-full max-h-[380px] cursor-pointer" onClick={() => DetailBook(book)} src={book.image_url} alt={book.title} />
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
