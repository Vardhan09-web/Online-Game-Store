import React from 'react';
import { Bell, Settings, User } from 'lucide-react';

export default function AdminHeader() {
  return (
    <header className="bg-gray-800 border-b border-gray-700 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-white"> Admin</h1>
        
        <div className="flex items-center space-x-4">
          <button aria-label="Notifications" className="p-2 text-gray-400 hover:text-white transition">
            <Bell className="w-6 h-6" />
          </button>
          <button aria-label="Settings" className="p-2 text-gray-400 hover:text-white transition">
            <Settings className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-2">
            <User className="w-8 h-8 text-gray-400" />
            <span className="text-white">Admin User</span>
          </div>
        </div>
      </div>
    </header>
  );
}
