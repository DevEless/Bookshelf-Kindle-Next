import React from "react";

const Card = ({ book }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={book.image_url} alt={book.title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{book.title}</div>
                <p className="text-gray-700 text-base">{book.authors}</p>
            </div>
        </div>
    );
};

export default Card;
