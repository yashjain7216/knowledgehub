/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Gradient } from "./design/Services";
import { HamburgerMenu, SideLines, BackgroundCircles } from "./design/Header";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); 

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      if (data.success) {
        // Show success toast notification
        toast.success('Signed up successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log('signed up successfully');
        setTimeout(() => {
          // Optional: Redirect to login page instead of dashboard
          navigate("/login");
        }, 2000);
      } else {
        // Show error toast notification if signup fails
        toast.error('Signup failed. Please try again.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-5">
      <Gradient />
      <HamburgerMenu />
      <SideLines />
      <BackgroundCircles />
      <div className="w-full max-w-md bg-n-8 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Create an Account</h2>
       
        <form onSubmit={handleSignup} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Signup
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
