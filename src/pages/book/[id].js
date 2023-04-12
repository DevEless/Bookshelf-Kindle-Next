import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Book from '../Bookshelf2/[Book]';
import Navbar from '../section/Navbar';


export const BookDetailsPage = () => {
    const [book, setBook] = useState({});
    const router = useRouter();

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
            <div class="flex mt-8">
                <div class="w-1/2 p-4 m">
                    <img src={book.image_url} alt="" width={350} height={350} className='mx-auto' style={{ objectFit: 'cover' }} />
                </div>
                <div class="w-1/2 p-24">
                    <p>{book.description}</p>
                </div>
            </div>

        </div>
    );
};

export default BookDetailsPage