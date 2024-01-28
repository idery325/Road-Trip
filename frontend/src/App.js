import React, { useState } from 'react';
import './App.css';
import Footer from './Footer.js';
import RecentSearches from './RecentSearch.js';

function App() {
  // State to track which tab is active
  const [activeTab, setActiveTab] = useState('recommended');

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Plan your Road Trip from Berkeley</h1>
        <div className="search-container">
          <input type="text" placeholder="Enter destination" />
        </div>
      </header>
      
      <section className="weekend-getaway">
        <nav>
          <ul className='click-bar'>
            <li 
              style={{
                color: activeTab === 'recommended' ? 'skyblue' : 'black',
                cursor: 'pointer',
              }}
              onClick={() => handleTabClick('recommended')}
              onMouseOver={(e) => e.target.style.color = 'skyblue'}
              onMouseOut={(e) => e.target.style.color = activeTab === 'recommended' ? 'skyblue' : 'black'}
            >
              Recommended
            </li>
            <li>
              Local approved
            </li>
            <li>
              Most liked
            </li>
          </ul>
        </nav>
        {activeTab === 'recommended' && (
          <div className="destination-list">
            <div className="destination yosemite">
              <span role="img" aria-label="like">👍 200</span>
              <span role="img" aria-label="heart">❤️ 136</span>
              <h3>Yosemite National Park</h3>
              <p>12.9 mi (3.6 km)</p>
            </div>
            <div className="destination las-vegas">
              <span role="img" aria-label="like">👍 200</span>
              <span role="img" aria-label="heart">❤️</span>
              <h3>Las Vegas Main Strip</h3>
              <p>12.9 mi (3.6 km)</p>
            </div>
          </div>
        )}
        <RecentSearches />
      </section>
      <Footer />

    </div>
  );
}

export default App;
