import React from 'react';
import { CSSTransition } from 'react-transition-group';
import LoginComponent from './Connexion';
import Link from 'next/link';
import Book from '../Bookshelf2/[Book]';



const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      <CSSTransition in={isOpen} timeout={200} classNames="sidebar" unmountOnExit>
        <nav className="sidebar">
          <div className='flex justify-between'>
          <div className='text-lg font-extralight border-b-4'>
          BOOKSHELF.
          </div>
          <div>
          <button className='font-bold' onClick={onClose}>X</button>
          </div>
          </div>
          <span >
            <span className='flex justify-start mt-5'>

          <Link href="/Bookshelf2/Book"> All Books</Link>
            </span>
            <span className='flex justify-start mt-5'>

<Link href="/Bookshelf2/Book"> All Books</Link>
  </span> 
  <span className='flex justify-start mt-5'>

<Link href="/Bookshelf2/Book"> All Books</Link>
  </span>
              <span className='flex justify-start mt-5'>

          <Link href="/Bookshelf2/Book"> All Books</Link>
            </span>
          </span>


      <span className='mt-8 flex justify-start cursor-pointer text-lg'>
    <LoginComponent/> 

      </span>
        </nav>
      </CSSTransition>
      <style jsx>{`
        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          width: 350px;
          height: 100%;
          background-color: #f8f8f8;
          padding: 1rem;
          box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
          z-index: 2;
        }
        .sidebar-enter {
            transform: translateX(-100%);
          }
          .sidebar-enter-active {
            transform: translateX(0%);
            transition: transform 200ms ease-out;
          }
          .sidebar-exit {
            transform: translateX(0%);
          }
          .sidebar-exit-active {
            transform: translateX(-100%);
            transition: transform 200ms ease-in;
          }
          
      `}</style>
    </>
  );
};

export default Sidebar;
