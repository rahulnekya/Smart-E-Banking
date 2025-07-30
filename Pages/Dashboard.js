// src/Pages/Dashboard.js
import { User } from "lucide-react";
import React from "react";

const Dashboard = () => {
  return (
    
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome back👋</h1>
      <img
            src="https://i.pravatar.cc/100"
            alt="user avatar"
            className="w-20 h-20 rounded-full border-4 border-blue-500 shadow-md"
          />
          <br></br>
        <h2 className="text-black-500">Rahul Nekya</h2>
                    <br></br>
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-gray-500">Current Balance</h2>
        <p className="text-3xl font-bold">₹1,24,500.00</p>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-lg font-semibold mb-3">Recent Transactions</h3>
        <ul className="divide-y">
          <li className="py-2 flex justify-between"><span>Netflix</span><span className="text-red-500">-₹499</span></li>
          <li className="py-2 flex justify-between"><span>Salary</span><span className="text-green-500">+₹50,000</span></li>
          <li className="py-2 flex justify-between"><span>Grocery</span><span className="text-red-500">-₹2,350</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
