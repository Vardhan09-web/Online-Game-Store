import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const featuredGames = [
  {
    id: 1,
    title: "Medieval Quest 2023",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1920&q=80",
    price: "$41.99"
  },
  {
    id: 2,
    title: "Neon Hunters",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=1920&q=80",
    price: "$39.99"
  },
  {
    id: 3,
    title: "Space Warriors ",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1920&q=80",
    price: "$29.99"
  },
  {
    id: 4,
    title: "Cyber Racers",
    image: "https://c.wallhere.com/photos/89/e3/car_flying_car_cyberpunk_racer_motion_blur_night_police_city-1768387.jpg!d",
    price: "$34.99",
   
    
  }
];

export default function GameCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredGames.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredGames.length) % featuredGames.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
      
      <div className="relative h-full">
        {featuredGames.map((game, index) => (
          <div
            key={game.id}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-2">{game.title}</h2>
                <p className="text-2xl text-blue-400">{game.price}</p>
                <button className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 p-2 rounded-full hover:bg-black/75 transition"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 p-2 rounded-full hover:bg-black/75 transition"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}
