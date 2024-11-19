import React from 'react';
// import AdminSidebar from './AdminSidebar';
import AdminHeader from '../components/admin/AdminHeader';

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-900">
      {/* <AdminSidebar /> */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto bg-gray-800 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
