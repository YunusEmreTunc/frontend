// src/mock-api.js
const mockData = [
    { id: 1, departureAirport: 'IST', arrivalAirport: 'JFK', departureTime: '2024-10-28T10:00:00', returnTime: '2024-10-29T15:00:00', price: 200 },
    { id: 2, departureAirport: 'JFK', arrivalAirport: 'CDG', departureTime: '2024-12-18T12:00:00', returnTime: '2024-12-18T12:00:00', price: 250 },
    { id: 3, departureAirport: 'CDG', arrivalAirport: 'HND', departureTime: '2024-04-17T11:00:00', returnTime: '2024-04-17T11:00:00', price: 25 },
    { id: 4, departureAirport: 'HND', arrivalAirport: 'LHR', departureTime: '2024-03-20T14:00:00', returnTime: '2024-03-20T14:00:00', price: 450 },
    { id: 5, departureAirport: 'LHR', arrivalAirport: 'SYD', departureTime: '2024-08-21T18:00:00', returnTime: '2024-08-21T18:00:00', price: 550 },
    { id: 6, departureAirport: 'SYD', arrivalAirport: 'IST', departureTime: '2024-09-28T12:30:00', returnTime: '2024-09-28T12:30:00', price: 220 },
    { id: 7, departureAirport: 'IST', arrivalAirport: 'TXL', departureTime: '2024-11-14T15:30:00', returnTime: '2024-11-14T15:30:00', price: 180 },
    { id: 8, departureAirport: 'CDG', arrivalAirport: 'MUC', departureTime: '2024-02-03T13:45:00', returnTime: '2024-08-28T16:30:00', price: 300 },
    { id: 9, departureAirport: 'LHR', arrivalAirport: 'SIN', departureTime: '2024-07-30T16:15:00', returnTime: '2024-08-29T01:00:00', price: 400 },
    { id: 10, departureAirport: 'HND', arrivalAirport: 'PEK', departureTime: '2024-08-18T09:30:00', returnTime: '2024-08-28T14:30:00', price: 320 },
    { id: 11, departureAirport: 'SYD', arrivalAirport: 'DXB', departureTime: '2024-08-28T17:45:00', returnTime: '2024-08-29T03:00:00', price: 480 },
    { id: 12, departureAirport: 'JFK', arrivalAirport: 'YYZ', departureTime: '2024-08-28T14:45:00', returnTime: '2024-08-28T18:30:00', price: 270 },
    { id: 13, departureAirport: 'IST', arrivalAirport: 'BOM', departureTime: '2024-08-28T08:00:00', returnTime: '2024-08-28T12:45:00', price: 180 },
    { id: 14, departureAirport: 'MUC', arrivalAirport: 'CAI', departureTime: '2024-08-28T19:30:00', returnTime: '2024-08-29T01:30:00', price: 370 },
    { id: 15, departureAirport: 'PEK', arrivalAirport: 'ICN', departureTime: '2024-08-28T11:30:00', returnTime: '2024-08-28T16:15:00', price: 280 },
    { id: 16, departureAirport: 'SYD', arrivalAirport: 'BCN', departureTime: '2024-08-28T14:00:00', returnTime: '2024-08-28T19:45:00', price: 320 },
    { id: 17, departureAirport: 'LHR', arrivalAirport: 'LAX', departureTime: '2024-08-28T20:15:00', returnTime: '2024-08-29T01:45:00', price: 490 },
    { id: 18, departureAirport: 'CDG', arrivalAirport: 'GIG', departureTime: '2024-08-28T16:45:00', returnTime: '2024-08-28T22:30:00', price: 380 },
    { id: 19, departureAirport: 'HND', arrivalAirport: 'ATH', departureTime: '2024-08-28T13:00:00', returnTime: '2024-08-28T17:45:00', price: 250 },
    { id: 20, departureAirport: 'IST', arrivalAirport: 'CPT', departureTime: '2024-08-28T10:45:00', returnTime: '2024-08-28T15:30:00', price: 300 },
  ];
  
  const getFlights = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData);
      }, 1000); // 1 saniye gecikme ekleyerek yükleniyor animasyonunu gösterelim
    });
  };
  
  export default getFlights;
  