import React, { useState, useRef } from 'react';
import { User, Lock, ArrowRight } from 'lucide-react';
import { Login, Register } from "../api/api";
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import { toast } from 'sonner';
import { storeToken, getRole } from '../service/Auth'; // Import getRole and storeToken

export default function LoginPage() {
  const [isSignIn, setIsSignIn] = useState(true); // Toggle between login and register
  const [error, setError] = useState('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');
  const nameRef = useRef('');
  const phoneRef = useRef('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect input values
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current?.value;
    const name = nameRef.current?.value;
    const phone = phoneRef.current?.value;

    // Validation
    if (!email || !password || (!isSignIn && (!name || !phone || !confirmPassword))) {
      setError('Please fill in all required fields.');
      toast.error('Please fill in all required fields.');
      return;
    }

    if (!isSignIn && password !== confirmPassword) {
      setError('Passwords do not match.');
      toast.error('Passwords do not match.');
      return;
    }

    setError(''); // Clear previous errors

    try {
      if (isSignIn) {
        // Login API Call
        const response = await Login({ email, password });

        // Check if login is successful
        if (response.status === 200) {
          const { token } = response.data;
          storeToken(token); // Save the token
          toast.success('Login Success!');

          // Check user role
          const role = getRole();
          console.log('Decoded Role:', role);
          if (role === 'ADMIN') {
            navigate('/admin'); // Redirect to admin page
          } else {
            navigate('/home'); // Redirect to homepage
          }
        }
      } else {
        // Register API Call
        const response = await Register({ name, phone, email, password });

        // Check if registration is successful
        if (response.status === 200) {
          toast.success('Registration Success!');
          navigate('/'); // Switch to login after registration
        }
      }
    } catch (err) {
      // Handle API errors
      const errorMessage = err.response?.data?.message || 'An unexpected error occurred';
      setError(errorMessage); // Update the error message in the state
      toast.error(errorMessage); // Show error toast
      console.error('Error:', err); // Log for debugging
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-gray-900/90 to-purple-900/90" />
      <div className="absolute inset-0 bg-[url('/grid.png')] bg-repeat opacity-20" />

      {/* Login/Register Form */}
      <div className="relative w-full max-w-md p-8">
        <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-gray-800/50">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              GameStore
            </h1>
            <p className="text-gray-400 mt-2">
              {isSignIn ? 'Sign in to your account' : 'Create your account'}
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {!isSignIn && (
              <div className="space-y-4">
                {/* Name Input */}
                <div className="relative">
                  <label htmlFor="name" className="sr-only">Name</label>
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    ref={nameRef}
                    id="name"
                    type="text"
                    placeholder="Name"
                    className="w-full bg-gray-800/50 border border-gray-700 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 transition"
                  />
                </div>

                {/* Phone Input */}
                <div className="relative">
                  <label htmlFor="phone" className="sr-only">Phone</label>
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    ref={phoneRef}
                    id="phone"
                    type="number"
                    placeholder="Phone"
                    className="w-full bg-gray-800/50 border border-gray-700 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
              </div>
            )}

            {/* Email Input */}
            <div className="relative">
              <label htmlFor="email" className="sr-only">Email</label>
              <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                ref={emailRef}
                id="email"
                type="email"
                placeholder="Email"
                className="w-full bg-gray-800/50 border border-gray-700 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <label htmlFor="password" className="sr-only">Password</label>
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                ref={passwordRef}
                id="password"
                type="password"
                placeholder="Password"
                className="w-full bg-gray-800/50 border border-gray-700 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            {/* Confirm Password Input */}
            {!isSignIn && (
              <div className="relative">
                <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  ref={confirmPasswordRef}
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full bg-gray-800/50 border border-gray-700 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 transition"
                />
              </div>
            )}

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-3 rounded-lg flex items-center justify-center space-x-2 transition transform hover:scale-105"
            >
              <span>{isSignIn ? 'Sign In' : 'Create Account'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Toggle Sign In/Up */}
          <div className="mt-6 text-center">
            <button
              onClick={() => setIsSignIn(!isSignIn)}
              className="text-blue-400 hover:text-blue-300 transition"
            >
              {isSignIn
                ? "Don't have an account? Sign up"
                : 'Already have an account? Sign in'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
