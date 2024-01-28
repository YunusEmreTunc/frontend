// src/FlightList.js
import React, { useState, useEffect } from 'react';
import getFlights from './mock-api';

const FlightList = ({ searchParams }) => {
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        setLoading(true);
        setError(null);
      
        getFlights()
          .then((data) => {
            const filteredFlights = data.filter((flight) => {
              const isDepartureMatch =
                flight.departureAirport.toLowerCase().includes(searchParams.departureAirport.toLowerCase()) &&
                flight.arrivalAirport.toLowerCase().includes(searchParams.arrivalAirport.toLowerCase());
      
              const isDepartureTimeMatch =
                !searchParams.departureDate || new Date(flight.departureTime) >= new Date(searchParams.departureDate);
      
              const isReturnTimeMatch =
                !searchParams.returnDate ||
                !flight.returnTime ||
                new Date(flight.returnTime) <= new Date(searchParams.returnDate);
      
              // If both dates are empty and one-way is not selected, show all flights
              if (!searchParams.departureDate && !searchParams.returnDate && !searchParams.oneWay) {
                return true;
              }
      
              return isDepartureMatch && isDepartureTimeMatch && isReturnTimeMatch;
            });
      
            setFlights(filteredFlights);
            setLoading(false);
          })
          .catch((error) => {
            console.error('Uçuşları Getirirken Hata Oluştu:', error);
            setError('Uçuşları getirirken bir hata oluştu.');
            setLoading(false);
          });
      }, [searchParams]);
  
  

      const formatDateTime = (dateTimeString) => {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        return new Intl.DateTimeFormat('tr-TR', options).format(new Date(dateTimeString));
      };
      

  const sortFlights = (key) => {
    const sortedFlights = [...flights].sort((a, b) => {
      if (key === 'price') {
        return a[key] - b[key];
      } else {
        return a[key].localeCompare(b[key]);
      }
    });
    setFlights(sortedFlights);
  };

  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (flights.length === 0) {
    return <p>Uygun uçuş bulunamadı.</p>;
  }

  return (
    <div>
      <button onClick={() => sortFlights('departureTime')}>Kalkış Saatine Göre Sırala</button>
      <button onClick={() => sortFlights('returnTime')}>Dönüş Saatine Göre Sırala</button>
      <button onClick={() => sortFlights('price')}>Fiyata Göre Sırala</button>

      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            <p>Kalkış: {flight.departureAirport}</p>
            <p>Varış: {flight.arrivalAirport}</p>
            <p>Kalkış Saati: {formatDateTime(flight.departureTime)}</p>
            <p>Varış Saati: {formatDateTime(flight.returnTime)}</p>
            <p>Fiyat: {flight.price} TL</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightList;
