import React, { useState, useRef } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import { Plus, X, Edit2, Trash2 } from 'lucide-react'; // Added icons for Edit and Trash
import { toast } from 'sonner';
import { addGame } from '../api/api';  // Ensure this is correctly imported

const AddNewGame = () => {
  const [loading, setLoading] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [gamesList, setGamesList] = useState([]); // State to hold added games

  // References for form fields
  const titleRef = useRef('');
  const descriptionRef = useRef('');
  const categoryRef = useRef('');  // category for dropdown
  const releaseDateRef = useRef('');
  const imgUrlRef = useRef('');
  const priceRef = useRef('');

  const handleAddGame = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Collecting data from form fields
    const newGame = {
      title: titleRef.current.value,
      desc: descriptionRef.current.value,
      category: categoryRef.current.value,  // Get category from dropdown
      releaseDate: releaseDateRef.current.value,
      imgUrl: imgUrlRef.current.value,
      price: priceRef.current.value,
    };

    try {
      const response = await addGame(newGame);  // Correct API call to add the game
      if (response.status === 200) {
        toast.success('Game added successfully!');
        setGamesList([...gamesList, newGame]); // Add the new game to the games list
        setShowAdd(false);  // Close modal after successful addition
      }
    } catch (error) {
      toast.error('Error while adding game.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteGame = (gameTitle) => {
    setGamesList(gamesList.filter(game => game.title !== gameTitle)); // Delete the game from the list
    toast.success('Game deleted successfully!');
  };

  const handleEditGame = (gameTitle) => {
    // Logic to edit the game, can be a form with pre-filled values
    const gameToEdit = gamesList.find(game => game.title === gameTitle);
    if (gameToEdit) {
      titleRef.current.value = gameToEdit.title;
      descriptionRef.current.value = gameToEdit.desc;
      categoryRef.current.value = gameToEdit.category;
      releaseDateRef.current.value = gameToEdit.releaseDate;
      imgUrlRef.current.value = gameToEdit.imgUrl;
      priceRef.current.value = gameToEdit.price;

      setShowAdd(true);  // Open the modal with the game data pre-filled
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6 text-white"> {/* Make all text white inside this div */}
        <div className="w-full flex justify-between items-center my-4 shadow-md rounded-md p-1 border">
          <h1 className="text-xl font-semibold">Add New Game</h1>
          <button
            className="w-10 h-10 text-green-500 border-2 border-green-500 rounded-md hover:bg-green-500 hover:text-white"
            onClick={() => setShowAdd(true)}
          >
            <Plus className="w-8 h-8" />
          </button>
        </div>

        {/* Games List */}
        <div className="space-y-4">
          {gamesList.length > 0 ? (
            gamesList.map((game, index) => (
              <div key={index} className="flex justify-between items-center p-4 border-b">
                <div className="flex-1">
                  <h3 className="font-semibold">{game.title}</h3>
                  <p>{game.category} | {game.releaseDate}</p>
                  <p>{game.desc}</p>
                  <p className="text-green-500">${game.price}</p>
                </div>
                <div className="flex space-x-2">
                  <button onClick={() => handleEditGame(game.title)} className="text-blue-500 hover:text-blue-700">
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button onClick={() => handleDeleteGame(game.title)} className="text-red-500 hover:text-red-700">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No games added yet.</p>
          )}
        </div>

        {/* Add New Game Modal */}
        {showAdd && (
          <div className="absolute top-0 left-0 z-50 w-full h-screen bg-black/40 flex justify-center items-center">
            <div className="w-1/3 bg-white p-6 rounded-md shadow-2xl">
              <div className="flex justify-between items-center">
                <h2 className="text-xl text-green-500">Add New Game</h2>
                <button className="text-red-500" onClick={() => setShowAdd(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              <form onSubmit={handleAddGame} className="space-y-4">
                <input
                  ref={titleRef}
                  type="text"
                  placeholder="Game Title"
                  className="w-full p-4 border-b-2 border-gray-300 focus:border-green-500 text-black"
                  required
                />
                <textarea
                  ref={descriptionRef}
                  placeholder="Description"
                  className="w-full p-4 border-b-2 border-gray-300 focus:border-green-500 text-black"
                  rows="4"
                  required
                />
                
                {/* Category Dropdown */}
                <select
                  ref={categoryRef}  // Reference for category dropdown
                  className="w-full p-4 border-b-2 border-gray-300 focus:border-green-500 text-black"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Arcade">Arcade</option>
                  <option value="Shooting">Shooting</option>
                  <option value="Action">Action</option>
                  <option value="Racing">Racing</option>
                  <option value="Sports">Sports</option>
                  <option value="Puzzle">Puzzle</option>
                  <option value="Multiplayer">Multiplayer</option>
                  <option value="Adventure">Adventure</option>
                </select>

                <input
                  ref={releaseDateRef}
                  type="date"
                  placeholder="Release Date"
                  className="w-full p-4 border-b-2 border-gray-300 focus:border-green-500 text-black"
                  required
                />
                <input
                  ref={imgUrlRef}
                  type="text"
                  placeholder="Image URL"
                  className="w-full p-4 border-b-2 border-gray-300 focus:border-green-500 text-black"
                  required
                />
                <input
                  ref={priceRef}
                  type="number"
                  placeholder="Price"
                  className="w-full p-4 border-b-2 border-gray-300 focus:border-green-500 text-black"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-green-500 text-white rounded-md"
                  disabled={loading}
                >
                  {loading ? 'Adding...' : 'Add Game'}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AddNewGame;
