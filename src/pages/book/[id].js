import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Book from '../Bookshelf2/[Book]';
import Navbar from '../section/Navbar';
import { addFavorite } from "@/Slice/favoriteSlice";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Modal from "react-modal";

export const BookDetailsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const favorites = useSelector((state) => state.favorites);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const [notAuthenticatedModalOpen, setNotAuthenticatedModalOpen] = useState(false);
    const [bookInFavoritesModalOpen, setBookInFavoritesModalOpen] = useState(false);
    
    const [book, setBook] = useState({});
    const router = useRouter();
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

    useEffect(() => {
        const { id } = router.query;
        fetch(`https://example-data.draftbit.com/books/${id}`)
            .then(response => response.json())
            .then(data => setBook(data));
    }, [router.query]);

    return (
        <div>
            <Navbar />
            <div className='text-center font-light border-b-4'>

            <h1>{book.title}</h1>
            <p>By {book.authors}</p>
            </div>
            <div id='paté' class="flex mt-8">
                <div id='paté1'  class="w-1/2 p-4 m">
                    <img src={book.image_url} alt="" width={350} height={350} className='mx-auto' style={{ objectFit: 'cover' }} />
                </div>
                <div id='paté4'  class="w-1/2 p-24">
                    <p id='paté2'>{book.description}</p>
                    <button id="favorite-button2 " className="bg-[#5a8e7a] text-white p-2 mt-2" onClick={handleAddFavorite}>
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

        </div>
        
    );
};

export default BookDetailsPage