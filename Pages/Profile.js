import React from "react";

const Profile = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">User Profile</h2>

      <div className="bg-white rounded-xl shadow-lg p-6 w-full md:w-2/3 lg:w-1/2">
        {/* Profile Header */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src="https://i.pravatar.cc/100"
            alt="user avatar"
            className="w-20 h-20 rounded-full border-4 border-blue-500 shadow-md"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Rahul Nekya</h3>
            <p className="text-gray-500">rahul@example.com</p>
          </div>
        </div>

        {/* Account Info */}
        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-gray-50">
            <p className="text-gray-600">Account Number</p>
            <p className="font-bold text-gray-800">SBIN00012345</p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-50">
            <p className="text-gray-600">Account Balance</p>
            <p className="font-bold text-green-600 text-lg">₹1,24,500.00</p>
          </div>
        </div>

        {/* Edit & Logout Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">Edit Profile</button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
