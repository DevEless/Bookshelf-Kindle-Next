import React, { useState } from 'react';
import BurgerMenuButton from '../components/BurgerMenuButton';
import Sidebar from '../components/Sidebar';
import useBooks from '../components/useBooks';

import Sidebar2 from '../components/SidebarR';

import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../Slice/booksSlice";


function Navbar() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleBurgerMenuClick = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleSidebarClose = () => {
        setIsSidebarOpen(false);
    };

    const [isSidebar2Open, setIsSidebar2Open] = useState(false);

    const handleBurgerMenuClick2 = () => {
        setIsSidebar2Open(!isSidebar2Open);
    };

    const handleSidebar2Close = () => {
        setIsSidebar2Open(false);
    };
    const { handleFilterChange } = useBooks();
    const filter = useSelector((state) => state.books.filter);
    const dispatch = useDispatch();

    return (
        <div>
            <nav className="navElement">
                <div className='cont' id='navCont'>
                <div className='row' id='navRow'>
                    <span className='col' id='navCol1'>
                <BurgerMenuButton onClick={handleBurgerMenuClick} />

                <p id='navText' className='text-white'>BOOKSHELF.</p>
                    </span>
                    <span className='col' id='navCol2'>
                        
                    <div className="relative">
                    <input
  type="text"
  id='input01'
  className="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none"
  placeholder="Rechercher un livre..."
  value={filter}
  onChange={(e) => dispatch(setFilter(e.target.value))}
/>

            <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
                <svg
                    className="text-gray-600 h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 56.966 56.966"
                    width="512"
                    height="512"
                >
                    <path d="M55.146 51.887L41.588 37.786c3.486-4.144 5.396-9.358 5.396-14.786 0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c5.097 0 9.841-1.732 13.5-4.897l13.661 14.208c.571.593 1.339.898 2.121.898.779 0 1.518-.301 2.068-.853a2.834 2.834 0 0 0 .001-4.057zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z" />
                </svg>
            </button>
        </div>
                    </span>
                    

                    <span className='col' id='navCol3'>
                    <i class="fa-solid fa-phone"></i>
                        <p className='num01'>
                    +32472693080
                        </p>
                    <i class="fa-solid fa-heart" onClick={handleBurgerMenuClick2}></i> 
                    </span>
                </div>

                </div>



            </nav>

            <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />
            <Sidebar2 isOpen={isSidebar2Open} onClose={handleSidebar2Close} />
        </div>
    );
}

export default Navbar;
