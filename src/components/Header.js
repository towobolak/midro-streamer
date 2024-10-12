import React, { useState } from 'react';
import './Header.css';
import axios from 'axios';

function Header({ onSearchResults }) {
  const [searchTerm, setSearchTerm] = useState('');

  const API_KEY = 'AIzaSyDOLi36XlOyRh7xCejijifKJ5kmWzfZ-RA';

  const handleSearch = async () => {
    if (searchTerm) {
      try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
          params: {
            part: 'snippet',
            maxResults: 20,
            key: API_KEY,
            q: searchTerm,
          },
        });

        onSearchResults(response.data.items);
      } catch (error) {
        console.error('Error fetching videos', error);
      }
    }
  };

  return (
    <div className="header">
      <div className="header__left">
        <h1>Midro-Streamer</h1>
      </div>
      <div className="header__input">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} className="header__searchButton">
          <p>Search</p>
        </button>
      </div>
      <div className="header__right">
      </div>
    </div>
  );
}

export default Header;
