import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Sidebar2 = ({ isOpen, onClose }) => {
  return (
    <>
      <CSSTransition in={isOpen} timeout={200} classNames="sidebar2" unmountOnExit>
        <nav className="sidebar2">
          {/* Ajoutez vos liens de menu ici */}
          <button onClick={onClose}>Fermer</button>
        </nav>
      </CSSTransition>
      <style jsx>{`
        .sidebar2 {
          position: fixed;
          top: 0;
          right: 0;
          width: 250px;
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
