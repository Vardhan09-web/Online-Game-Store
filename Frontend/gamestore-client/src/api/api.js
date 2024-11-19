
import axios from 'axios'


const API = 'https://gamestore-server-g91e.onrender.com'

//Games Endpoints
const getGames = () => axios.get(`${API}/games/all`)
//const getGamesCount = () => axios.get(`${API}/games/count`)
const addGame = (game) =>axios.post(`${API}/games/addgame`, game)
const editGame = (game, id) => axios.put(`${API}/games/edit/${id}`, game)
const deleteGame= (id) => axios.delete(`${API}/games/delete/${id}`)
const search = (query) => axios.get(`${API}/search?q=${query}`);


//Orders Endpoints
const getOrders = () => axios.get(`${API}/orders/all`)
//const getOrdersCount = () => axios.get(`${API}/orders/count`)

//Login & Register Endpoints
const Login = (credentials) => axios.post(`${API}/auth/login`, credentials)
const Register = (credentials) => axios.post(`${API}/auth/register`, credentials)


//Users Endpoints
const getUsers = () => axios.get(`${API}/users/all`)
const getUsersCount = () => axios.get(`${API}/users/count`)
const addUser = (user) =>axios.post(`${API}/users/add`, user)
const editUser = (user, id) => axios.put(`${API}/users/edit/${id}`, user)
const deleteUser = (id) => axios.delete(`${API}/users/delete/${id}`)



// Reviews Endpoints
const getAllReviews = () => axios.get(`${API}/reviews/all`);
const getReviewsByGame = (gameId) => axios.get(`${API}/reviews/game/${gameId}`);
const addReview = (review) => axios.post(`${API}/reviews/add`, review);
const editReview = (review, id) => axios.put(`${API}/reviews/edit/${id}`, review);
const deleteReview = (id) => axios.delete(`${API}/reviews/delete/${id}`);


export const resetPassword = async (data, userId) => {
  // implementation for password reset
};
//addGame
// export const addnewGame = async (gameData) => {
//   try {
//     // Make the POST request to the backend to add the new game
//     const response = await axios.post(`${API_URL}/games`, gameData);
    
//     // Return the response from the server
//     return response;
//   } catch (error) {
//     // Handle errors if the API call fails
//     console.error('Error adding game:', error);
//     throw error;
//   }
// };

export { 
  getGames, 
  addGame, 
  editGame, 
  deleteGame, 
  getUsers,
  getUsersCount, 
  addUser, 
  editUser, 
  deleteUser, 
  getOrders, 
  Login, 
  Register, 
  getAllReviews, 
  getReviewsByGame, 
  addReview, 
  editReview, 
  deleteReview ,
  search
};
