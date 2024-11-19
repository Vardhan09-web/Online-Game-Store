// src/pages/Community.jsx
import React, { useState, useEffect } from 'react';
import { getAllReviews } from '../api/api';  // API call to get all reviews

const Community = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await getAllReviews();
        if (response.status === 200) {
          setReviews(response.data);  // Assuming response.data contains reviews
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="bg-gray-800 min-h-screen p-6">
      <h2 className="text-3xl text-white mb-6">Community</h2>
      <div className="space-y-6">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review._id} className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg text-white">{review.gameName}</h3>
              <p className="text-sm text-gray-400">{review.content}</p>
              <div className="mt-2 text-yellow-400">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}  {/* Display star rating */}
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No community reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default Community;
