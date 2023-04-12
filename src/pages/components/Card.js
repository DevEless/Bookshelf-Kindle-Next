import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "@/Slice/favoriteSlice";
import { router } from 'next/router';
import Modal from "react-modal";

const Card = ({ book }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const favorites = useSelector((state) => state.favorites);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const [notAuthenticatedModalOpen, setNotAuthenticatedModalOpen] = useState(false);
    const [bookInFavoritesModalOpen, setBookInFavoritesModalOpen] = useState(false);
    

    const dispatch = useDispatch();

    const handleAddFavorite = () => {
        if (!isAuthenticated) {
            setNotAuthenticatedModalOpen(true);
            return;
        }
    
        const isBookInFavorites = favorites.some((favorite) => favorite.id === book.id);
    
        if (!isBookInFavorites) {
            dispatch(addFavorite(book));
        } else {
            setBookInFavoritesModalOpen(true);
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
            <Modal
    isOpen={notAuthenticatedModalOpen}
    onRequestClose={() => setNotAuthenticatedModalOpen(false)}
    contentLabel="Connexion requise"
    className="error-modal"
>
    <h2>Connexion requise</h2>
    <p>Veuillez vous connecter pour ajouter des favoris.</p>
    <button onClick={() => setNotAuthenticatedModalOpen(false)}>X</button>
</Modal>

<Modal
    isOpen={bookInFavoritesModalOpen}
    onRequestClose={() => setBookInFavoritesModalOpen(false)}
    contentLabel="Livre déjà dans les favoris"
    className="error-modal"
>
    <h2>Livre déjà dans les favoris</h2>
    <p>Ce livre est déjà dans vos favoris.</p>
    <button onClick={() => setBookInFavoritesModalOpen(false)}>X</button>
</Modal>

        </>
    );
};

export default Card;
