import React, { useState } from 'react';
import BurgerMenuButton from '../components/BurgerMenuButton';
import Sidebar from '../components/Sidebar';
import InputForm from '../components/Input';
import Sidebar2 from '../components/SidebarR';

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
                        
                    <InputForm/>
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
