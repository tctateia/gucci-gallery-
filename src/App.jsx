import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery';
import { fetchImages } from './services/api';

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('gucci');

  useEffect(() => {
    async function loadImages() {
      const imagesData = await fetchImages(query);
      setImages(imagesData);
    }
    loadImages();
  }, [query]);

  const handleSearch = (searchValue) => {
    setQuery(searchValue);
  };

  return (
    <div className="App">
      <header>
        <h1>Gucci Photo Gallery</h1>
        <SearchBar onSearch={handleSearch} />
      </header>
      <Gallery images={images} />
    </div>
  );
}

export default App;
