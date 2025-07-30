// Pages/TransferMoney.js
import React, { useState } from "react";

const TransferMoney = () => {
  const [formData, setFormData] = useState({
    accountNumber: "",
    ifsc: "",
    name: "",
    amount: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTransfer = (e) => {
    e.preventDefault();

    if (!formData.accountNumber || !formData.ifsc || !formData.name || !formData.amount) {
      alert("Please fill all fields!");
      return;
    }

    // 🚀 Here you can integrate with backend API for actual transfer
    alert(`₹${formData.amount} transferred to ${formData.name} successfully!`);

    // Reset form
    setFormData({ accountNumber: "", ifsc: "", name: "", amount: "" });
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Bank Transfer</h2>
      <form onSubmit={handleTransfer} className="space-y-4">
        <input
          type="text"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleChange}
          placeholder="Account Number"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="ifsc"
          value={formData.ifsc}
          onChange={handleChange}
          placeholder="IFSC Code"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Account Holder Name"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Amount"
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Transfer
        </button>
      </form>
    </div>
  );
};

export default TransferMoney;
