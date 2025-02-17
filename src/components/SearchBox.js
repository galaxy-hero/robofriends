import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
    return (
        <input
            className='tc pa3 ba b--pink bg-lightest-blue'
            type='search'
            placeholder='search robots'
            onChange={searchChange}
        />
    );
}

export default SearchBox;