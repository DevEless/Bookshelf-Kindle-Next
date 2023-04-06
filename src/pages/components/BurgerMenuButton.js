import React from 'react';

const BurgerMenuButton = ({ onClick }) => {
    return (
        <button className="burger-menu-button" onClick={onClick}>
            <div />
            <div />
            <div />
            <style jsx>{`
        .burger-menu-button {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 24px;
          height: 24px;
          background: transparent;
          border: none;
          cursor: pointer;
          z-index: 1;
        }
        .burger-menu-button > div {
          width: 24px;
          height: 2px;
          background-color: #333;
        }
      `}</style>
        </button>
    );
};

export default BurgerMenuButton;
