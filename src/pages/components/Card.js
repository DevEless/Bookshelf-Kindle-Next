import React from "react";

const Card = ({ book }) => {
    return (
        <div className=" w-3/4 rounded overflow-hidden shadow-lg mx-auto max-h-[500px] ">
            <img className="w-full max-h-[380px] " src={book.image_url} alt={book.title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{book.title}</div>
                <p className="text-gray-700 text-base">{book.authors}</p>
            </div>
        </div>
    );
};

export default Card;
