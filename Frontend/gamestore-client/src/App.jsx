import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import GameCarousel from './components/GameCarousel';
import CategoryMenu from './components/CategoryMenu';
import GameGrid from './components/GameGrid';
import AdminDashboard from './pages/AdminDashboard';
import LoginPage from './pages/LoginPage';
import Store from './pages/Store';
import Library from './pages/Library';
import Community from './pages/Community';

import ArcadePage from './pages/ArcadePage';
import ShootingPage from './pages/ShootingPage';
import RacingPage from './pages/RacingPage';
import SportsPage from './pages/SportsPage';
import PuzzlePage from './pages/PuzzlePage';
import MultiplayerPage from './pages/MultiplayerPage';
import AdventurePage from './pages/AdventurePage';
import ActionPage from './pages/ActionPage';
import AdminUsers from './pages/AdminUsers';
import AddNewGame from './pages/AddNewGame';


function Layout() {
  const location = useLocation();

  // Define paths where the Navbar should be hidden
  const hideNavbarRoutes = ['/', '/admin'];

  return (
    <>
      {/* Conditionally render Navbar */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        {/* Home Route */}
        <Route path="/home" element={
          <main>
            <GameCarousel />
            <CategoryMenu />
            <GameGrid />
          </main>
        } />

        {/* Login Route */}
        <Route path="/" element={<LoginPage />} />

        {/* Admin Dashboard */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Other Pages */}
        <Route path="/arcade" element={<ArcadePage />} />
        <Route path="/shooting" element={<ShootingPage />} />
        <Route path="/racing" element={<RacingPage />} />
        <Route path="/sports" element={<SportsPage />} />
        <Route path="/puzzle" element={<PuzzlePage />} />
        <Route path="/multiplayer" element={<MultiplayerPage />} />
        <Route path="/adventure" element={<AdventurePage />} />
        <Route path="/action" element={<ActionPage />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/addnewgame" element={<AddNewGame />} />
        <Route path="/store" element={<Store />} />
        <Route path="/library" element={<Library />} />
        <Route path="/community" element={<Community />} />
        

        {/* Catch-All Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

function App() {
  const [isAdmin, setIsAdmin] = useState(() => localStorage.getItem('isAdmin') === 'true');
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('isLoggedIn') === 'true');

  useEffect(() => {
    // Persist login and admin state to localStorage
    localStorage.setItem('isLoggedIn', isLoggedIn);
    localStorage.setItem('isAdmin', isAdmin);
  }, [isLoggedIn, isAdmin]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('isAdmin');
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Layout />
        {/* Footer */}
        <footer className="bg-gray-800 text-gray-400 py-8">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p>© 2024 GameStore. All rights reserved.</p>
            {isLoggedIn && (
              <>
                {!isAdmin && (
                  <button
                    onClick={() => setIsAdmin(true)}
                    className="mt-4 text-sm text-blue-400 hover:text-blue-300"
                  >
                    Access Admin Dashboard
                  </button>
                )}
                <button
                  onClick={handleLogout}
                  className="mt-4 text-sm text-red-400 hover:text-red-300"
                >
                  Log out
                </button>
              </>
            )}
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
