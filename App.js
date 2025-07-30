// src/App.js
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import Transactions from "./Pages/Transactions";
import Profile from "./Pages/Profile";
import Layout from "./Pages/Layout";
import ProtectedRoute from "./Pages/ProtectedRoute";
import TransferMoney from "./Pages/TransferMoney";


function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/transfer" element={<TransferMoney />} />
        </Route>
      </Route>

      {/* Redirect root to login */}
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;
