import React, { useState, useEffect } from 'react';
import { Users, ShoppingCart, Gamepad2, TrendingUp } from 'lucide-react';
import clsx from 'clsx';
import { getUsersCount } from '../../api/api'; 

const stats = [
  {
    label: 'Total Users',
    value: '0',  // This will be updated dynamically
    icon: Users,
    color: 'purple',
  },
  {
    label: 'Total Sales',
    value: '0',
    icon: ShoppingCart,
    color: 'green',
  },
  {
    label: 'Active Games',
    value: '0',
    icon: Gamepad2,
    color: 'red',
  },
  {
    label: 'Revenue',
    value: '0',
    icon: TrendingUp,
    color: 'yellow',
  }
];

export default function DashboardStats() {
  const [userCount, setUserCount] = useState('0');  // State for storing user count

  useEffect(() => {
    // Fetch the total user count from the API
    const fetchUserCount = async () => {
      try {
        const response = await getUsersCount();  // Using getUsersCount from the API
        if (response.status === 200) {
          setUserCount(response.data.count);  // Assuming response has a 'count' key
        }
      } catch (error) {
        console.error('Error fetching user count:', error);
        setUserCount('Error'); // Set an error message in case of failure
      }
    };

    fetchUserCount();  // Call the function to fetch user count
  }, []);  // Empty dependency array to only run once on mount

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-gray-900 rounded-lg p-6 hover:transform hover:scale-105 transition duration-300 "
        >
          <div className="flex items-center justify-between mb-4">
            <div
              className={clsx(
                'p-3 rounded-lg',
                `bg-${stat.color}-500/10`
              )}
            >
              <stat.icon className={`w-6 h-6 text-${stat.color}-500`} />
            </div>
          </div>
          <h3 className="text-gray-400 text-sm">{stat.label}</h3>
          <p className="text-2xl font-bold text-white mt-1">
            {stat.label === 'Total Users' ? userCount : stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}
