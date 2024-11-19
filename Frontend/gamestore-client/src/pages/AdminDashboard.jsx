// import React from 'react';
// import AdminLayout from '../layouts/AdminLayout';
// import DashboardStats from '../components/admin/DashboardStats';
// import RecentGames from '../components/admin/RecentGames';
// import { Plus, FileText, Users, Settings } from 'lucide-react';

// export default function AdminDashboard() {
//   return (
//     <AdminLayout>
//       <div className="space-y-6">
//         <DashboardStats />
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           <RecentGames />
//           <div className="bg-gray-900 rounded-lg p-6">
//             <h2 className="text-xl font-semibold text-white mb-6">Quick Actions</h2>
//             <div className="grid grid-cols-2 gap-4">
//               {[
//                 { action: 'Add New Game', icon: <Plus className="w-5 h-5" /> },
//                 { action: 'View Reports', icon: <FileText className="w-5 h-5" /> },
//                 { action: 'Manage Users', icon: <Users className="w-5 h-5" /> },
//                 { action: 'System Settings', icon: <Settings className="w-5 h-5" /> },
//               ].map(({ action, icon }) => (
//                 <button
//                   key={action}
//                   className="flex items-center space-x-2 p-4 bg-gray-800 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition"
//                 >
//                   {icon}
//                   <span>{action}</span>
//                 </button>
                
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </AdminLayout>
//   );
// }
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import AdminLayout from '../layouts/AdminLayout';
import DashboardStats from '../components/admin/DashboardStats';
import RecentGames from '../components/admin/RecentGames';
import { Plus, FileText, Users, Settings } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <DashboardStats />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentGames />
          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              {[ 
                { action: 'Add New Game', icon: <Plus className="w-5 h-5" />,link: '/admin/addnewgame' },
               // { action: 'View Reports', icon: <FileText className="w-5 h-5" /> },
                // Wrap the "Manage Users" action with Link
                { action: 'Manage Users', icon: <Users className="w-5 h-5" />, link: '/admin/users' },
                //{ action: 'System Settings', icon: <Settings className="w-5 h-5" /> },
              ].map(({ action, icon, link }) => (
                <button
                  key={action}
                  className="flex items-center space-x-2 p-4 bg-gray-800 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition"
                >
                  {link ? (
                    // If the link is provided, wrap it with Link component
                    <Link to={link} className="flex items-center space-x-2 w-full">
                      {icon}
                      <span>{action}</span>
                    </Link>
                  ) : (
                    // Otherwise, just render the button as usual
                    <>
                      {icon}
                      <span>{action}</span>
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
