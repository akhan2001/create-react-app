import React from 'react';
import './Card.css';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
            <input className='searchbox'
            type='search' 
            placeholder='Search robots' 
            name='search'
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;