import React, { useState } from 'react';
import BurgerMenuButton from '../components/BurgerMenuButton';
import Sidebar from '../components/Sidebar';

function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleBurgerMenuClick = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleSidebarClose = () => {
        setIsSidebarOpen(false);
    };

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
                        
                    <input placeholder='inputmoi'>
                    </input>
                    </span>

                    <span className='col' id='navCol3'>

                    </span>
                </div>

                </div>



            </nav>

            <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />
        </div>
    );
}

export default Navbar;
