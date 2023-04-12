import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from '../../Slice/favoriteSlice'

const Sidebar2 = ({ isOpen, onClose }) => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleRemoveFavorite = (id) => {
    dispatch(removeFavorite(id));
  };
  return (
    <>
    
      <CSSTransition in={isOpen} timeout={200} classNames="sidebar2" unmountOnExit>
        <nav className="sidebar2">
          <div className='flex justify-between'>
        <h2 className='font-light border-b-4'>Favoris</h2>
          <button className='font-bold' onClick={onClose}>X</button>

          </div>
          <div className="sidebar">
      {favorites.map((book) => (
        <div key={book.id} className="favorite-book">
          <img src={book.image_url} alt={book.title} />
          <h3>{book.title}</h3>
          <button id='anim1-sweep-to-right' className="bg-[#5a8e7a]  text-white p-2 " onClick={() => handleRemoveFavorite(book.id)}>
            Supprimer
          </button>
        </div>
      ))}
    </div>
        </nav>
      </CSSTransition>
      <style jsx>{`
        .sidebar2 {
          overflow-y: auto;

          position: fixed;
          top: 0;
          right: 0;
          width: 350px;
          height: 100%;
          background-color: #f8f8f8;
          padding: 1rem;
          box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
          z-index: 2;
        }
        .sidebar2-enter {
          transform: translateX(100%);
        }
        .sidebar2-enter-active {
          transform: translateX(0%);
          transition: transform 200ms ease-out;
        }
        .sidebar2-exit {
          transform: translateX(0%);
        }
        .sidebar2-exit-active {
          transform: translateX(100%);
          transition: transform 200ms ease-in;
        }

      `}</style>
    </>
  );
};

export default Sidebar2;
