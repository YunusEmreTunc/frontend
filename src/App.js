// src/App.js
import React, { useState } from 'react';
import SearchBox from './SearchBox';
import FlightList from './FlightList';
import './App.css';

function App() {
  const [searchParams, setSearchParams] = useState(null);

  const handleSearch = (params) => {
    setSearchParams(params);
  };

  return (
    <div className="App">
      <h1>Flight Search App</h1>
      <SearchBox onSearch={handleSearch} />
      <FlightList searchParams={searchParams} />
    </div>
  );
}

export default App;
