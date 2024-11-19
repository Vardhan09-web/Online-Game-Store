// import React, { useState } from 'react';
// import { 
//   LayoutDashboard, 
//   Gamepad2, 
//   Users, 
//   ShoppingCart, 
//   BarChart2, 
//   Settings,
//   LogOut
// } from 'lucide-react';

// const menuItems = [
//   { icon: LayoutDashboard,  active: true },
//   { icon: Gamepad2 },
//   { icon: Users },
//   { icon: ShoppingCart },
//   { icon: BarChart2},
//   { icon: Settings }
// ];
// // const menuItems = [
// //   { icon: LayoutDashboard, label: 'Dashboard', active: true },
// //   { icon: Gamepad2, label: 'Games' },
// //   { icon: Users, label: 'Users' },
// //   { icon: ShoppingCart, label: 'Orders' },
// //   { icon: BarChart2, label: 'Analytics' },
// //   { icon: Settings, label: 'Settings' }
// // ];

// export default function AdminSidebar() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleItemClick = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className="w-64 bg-gray-800 text-white flex flex-col md:w-16">
//       <div className="p-4">
//         <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
//           GameStore
//         </h1>
//       </div>
      
//       <nav className="flex-1 p-4">
//         <ul className="space-y-2">
//           {menuItems.map((item, index) => (
//             <li key={item.label}>
//               <button
//                 aria-label={`Go to ${item.label}`}
//                 onClick={() => handleItemClick(index)}
//                 className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition
//                   ${index === activeIndex 
//                     ? 'bg-blue-600 text-white' 
//                     : 'text-gray-400 hover:bg-gray-700 hover:text-white'
//                   }`}
//               >
//                 <item.icon className="w-5 h-5" />
//                 <span className={index === activeIndex ? 'block' : 'hidden md:block'}>{item.label}</span>
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>
      
//       <div className="p-4 border-t border-gray-700">
//         <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-400 hover:text-white transition" aria-label="Logout">
//           <LogOut className="w-5 h-5" />
//           <span>Logout</span>
//         </button>
//       </div>
//     </div>
//   );
// }
