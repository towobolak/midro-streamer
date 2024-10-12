import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home'; 
import TrendingIcon from '@mui/icons-material/Whatshot'; 
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'; 
import LibraryIcon from '@mui/icons-material/VideoLibrary'; 

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/" className="sidebar__option">
        <HomeIcon className="sidebar__optionIcon" />
        <span className="sidebar__optionText">Home</span>
      </Link>
      <Link to="/trending" className="sidebar__option">
        <TrendingIcon className="sidebar__optionIcon" />
        <span className="sidebar__optionText">Trending</span>
      </Link>
      <Link to="/subscriptions" className="sidebar__option">
        <SubscriptionsIcon className="sidebar__optionIcon" />
        <span className="sidebar__optionText">Subscriptions</span>
      </Link>
      <div className="sidebar__divider"></div>
      <Link to="/library" className="sidebar__option">
        <LibraryIcon className="sidebar__optionIcon" />
        <span className="sidebar__optionText">Library</span>
      </Link>
    </div>
  );
}

export default Sidebar;
