// src/pages/Store.jsx
import React, { useEffect, useState } from 'react';
import { getGames } from '../api/api';  // Assuming you have an API call to fetch games

const Store = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await getGames();
        if (response.status === 200) {
          setGames(response.data);  // Assuming response.data contains the list of games
        }
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className="bg-gray-800 min-h-screen p-6">
      <h2 className="text-3xl text-white mb-6">Store</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.length > 0 ? (
          games.map((game) => (
            <div key={game._id} className="bg-gray-700 p-4 rounded-lg">
              <img src={game.image} alt={game.name} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-lg text-white">{game.name}</h3>
              <p className="text-sm text-gray-400">{game.description}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">Buy Now</button>
            </div>
          ))
        ) : (
          <p className="text-white">No games available in the store yet.</p>
        )}
      </div>
    </div>
  );
};

export default Store;
