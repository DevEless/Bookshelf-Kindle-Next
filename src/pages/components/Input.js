import React, { useState } from 'react';

const InputForm = () => {
const [inputValue, setInputValue] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();

    setInputValue('');
};

return (
    <form onSubmit={handleSubmit}>
    <input className='input01'
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Entrez une valeur pour rechercher"
    />
    <button className='button01' type="submit">
    <i class="fa-brands fa-searchengin"></i>
    </button>
    </form>
);
};

export default InputForm;
