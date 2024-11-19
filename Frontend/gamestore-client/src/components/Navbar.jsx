import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);  // For managing cart visibility
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);  // For managing user menu visibility

  // Function to toggle cart visibility
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Function to toggle user menu visibility
  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            <Link to="/home">GameStore</Link> {/* Link to redirect to Home */}
          </h1>
          <div className="hidden md:flex space-x-6">
            <Link to="/store" className="hover:text-blue-400 transition">Store</Link>
            <Link to="/library" className="hover:text-blue-400 transition">Library</Link>
            <Link to="/community" className="hover:text-blue-400 transition">Community</Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search games..."
              className="bg-gray-800 text-white px-4 py-2 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Shopping Cart Icon */}
            <ShoppingCart 
              className="w-6 h-6 cursor-pointer hover:text-blue-400 transition"
              onClick={toggleCart}  // Toggles cart visibility on click
            />
            
            {/* User Icon */}
            <User 
              className="w-6 h-6 cursor-pointer hover:text-blue-400 transition"
              onClick={toggleUserMenu}  // Toggles user menu visibility on click
            />
            
            {/* Menu Icon for Mobile View */}
            <Menu className="w-6 h-6 md:hidden cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="absolute top-20 right-6 bg-gray-800 text-white p-4 rounded-lg shadow-lg w-80 z-50">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <p>Your cart is empty.</p>
          {/* Add cart items dynamically here */}
          <button onClick={toggleCart} className="mt-4 text-blue-500 hover:text-blue-400">Close Cart</button>
        </div>
      )}

      {/* User Menu */}
      {isUserMenuOpen && (
        <div className="absolute top-20 right-6 bg-gray-800 text-white p-4 rounded-lg shadow-lg w-48 z-50">
          <h2 className="text-lg font-bold">User Menu</h2>
          <Link to="/profile" className="block mt-2 text-blue-500 hover:text-blue-400">Profile</Link>
          <Link to="/login" className="block mt-2 text-blue-500 hover:text-blue-400">Login</Link>
          <button className="block mt-2 text-red-500 hover:text-red-400" onClick={() => alert('Logging out')}>Logout</button>
        </div>
      )}
    </nav>
  );
}
