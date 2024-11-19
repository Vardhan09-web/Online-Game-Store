// src/pages/Library.jsx
import React, { useEffect, useState } from 'react';
import { getOrders } from '../api/api';  // API call to get orders (games user has purchased)

const Library = () => {
  const [purchasedGames, setPurchasedGames] = useState([]);

  useEffect(() => {
    const fetchPurchasedGames = async () => {
      try {
        const response = await getOrders();
        if (response.status === 200) {
          setPurchasedGames(response.data);  // Assuming response.data contains the list of orders
        }
      } catch (error) {
        console.error('Error fetching purchased games:', error);
      }
    };

    fetchPurchasedGames();
  }, []);

  return (
    <div className="bg-gray-800 min-h-screen p-6">
      <h2 className="text-3xl text-white mb-6">Library</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {purchasedGames.length > 0 ? (
          purchasedGames.map((game) => (
            <div key={game._id} className="bg-gray-700 p-4 rounded-lg">
              <img src={game.image} alt={game.name} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-lg text-white">{game.name}</h3>
              <p className="text-sm text-gray-400">{game.description}</p>
            </div>
          ))
        ) : (
          <p className="text-white">You haven't purchased any games yet.</p>
        )}
      </div>
    </div>
  );
};

export default Library;
