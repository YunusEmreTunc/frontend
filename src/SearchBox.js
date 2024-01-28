// src/SearchBox.js
import React, { useState, useEffect } from 'react';

const SearchBox = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    departureAirport: '',
    arrivalAirport: '',
    departureDate: '',
    returnDate: '',
    oneWay: false,
  });

  useEffect(() => {
    // You can add validation logic here if needed
    // For example, checking if departureDate is after returnDate, etc.
  }, [searchParams]);

  const handleSearch = () => {
    onSearch(searchParams);
  };

  return (
    <div>
      <label>Kalkış Havaalanı:</label>
      <input
        type="text"
        value={searchParams.departureAirport}
        onChange={(e) => setSearchParams({ ...searchParams, departureAirport: e.target.value })}
      />

      <label>Varış Havaalanı:</label>
      <input
        type="text"
        value={searchParams.arrivalAirport}
        onChange={(e) => setSearchParams({ ...searchParams, arrivalAirport: e.target.value })}
      />

      <label>Kalkış Tarihi:</label>
      <input
        type="date"
        value={searchParams.departureDate}
        onChange={(e) => setSearchParams({ ...searchParams, departureDate: e.target.value })}
      />

      <label>Dönüş Tarihi:</label>
      <input
        type="date"
        value={searchParams.returnDate}
        onChange={(e) => setSearchParams({ ...searchParams, returnDate: e.target.value })}
        disabled={searchParams.oneWay}
      />

      <label>Tek Yönlü Uçuş:</label>
      <input
        type="checkbox"
        checked={searchParams.oneWay}
        onChange={(e) => setSearchParams({ ...searchParams, oneWay: e.target.checked, returnDate: '' })}
      />

      <button onClick={handleSearch}>Uçuşları Ara</button>
    </div>
  );
};

export default SearchBox;
