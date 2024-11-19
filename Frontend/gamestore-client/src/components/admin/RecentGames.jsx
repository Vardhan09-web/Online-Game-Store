import React from 'react';
import { MoreVertical } from 'lucide-react';

const recentGames = [
  {
    id: 1,
    title: 'Cyber Odyssey 2077',
    status: 'Active',
    sales: 1234,
    revenue: '$12,340',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=100&q=80'
  },
  {
    id: 2,
    title: 'Stellar Warriors',
    status: 'Active',
    sales: 856,
    revenue: '$8,560',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=100&q=80'
  },
  {
    id: 3,
    title: 'Ancient Legends',
    status: 'Maintenance',
    sales: 654,
    revenue: '$6,540',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=100&q=80'
  }
];

export default function RecentGames() {
  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">Recent Games</h2>
        <button className="text-gray-400 hover:text-white transition">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left text-gray-400 text-sm">
              <th className="pb-4">Game</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Sales</th>
              <th className="pb-4">Revenue</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            {recentGames.map((game) => (
              <tr
                key={game.id}
                className="border-t border-gray-800 hover:bg-gray-700 transition-colors"
              >
                <td className="py-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <span className="font-medium">{game.title}</span>
                  </div>
                </td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      game.status === 'Active'
                        ? 'bg-green-500/10 text-green-500'
                        : 'bg-yellow-500/10 text-yellow-500'
                    }`}
                  >
                    {game.status}
                  </span>
                </td>
                <td>{game.sales}</td>
                <td>{game.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
