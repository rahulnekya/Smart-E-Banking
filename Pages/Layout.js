import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: "🏠" },
        { name: "Profile", path: "/profile", icon: "👤" },
        { name: "TransferMoney", path: "/transfer", icon: "💸" },
            { name: "Transactions", path: "/transactions", icon: "📑" },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-8 text-center">💳 SmartBank</h1>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                  isActive ? "bg-blue-600" : "hover:bg-gray-700"
                }`
              }
            >
              <span>{item.icon}</span>
              {item.name}
            </NavLink>
          ))}
        </nav>
        {/* Logout */}
        <NavLink
          to="/login"
          className="mt-auto bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-center transition"
        >
          🚪 Logout
        </NavLink>
      </aside>
      {/* Content Area */}
      <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
