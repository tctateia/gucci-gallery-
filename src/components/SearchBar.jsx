import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchValue.toLowerCase());
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search for images..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
