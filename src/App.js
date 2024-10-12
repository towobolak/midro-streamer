import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TrendingPage from './pages/TrendingPage';
import SubscriptionsPage from './pages/SubscriptionsPage';
import LibraryPage from './pages/LibraryPage';
import VideoList from './components/VideoList';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <Router>
      <div className="app">
        <Header onSearchResults={setSearchResults} />
        <div className="app__body">
          <Sidebar />
          <div className="app__content">
            {searchResults.length > 0 ? (
              <VideoList videos={searchResults} />
            ) : (
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/trending" element={<TrendingPage />} />
                <Route path="/subscriptions" element={<SubscriptionsPage />} />
                <Route path="/library" element={<LibraryPage />} />
              </Routes>
            )}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
