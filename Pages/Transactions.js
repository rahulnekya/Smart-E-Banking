import React from "react";

const transactionsData = [
  { title: "Netflix Subscription", amount: "-₹499", date: "24 July, 2025", status: "Completed" },
  { title: "Salary Credit", amount: "+₹50,000", date: "23 July, 2025", status: "Completed" },
  { title: "Amazon Purchase", amount: "-₹3,200", date: "21 July, 2025", status: "Pending" },
  { title: "Electricity Bill", amount: "-₹2,000", date: "19 July, 2025", status: "Completed" },
  { title: "Freelance Payment", amount: "+₹15,000", date: "18 July, 2025", status: "Completed" },
  { title: "Zomato Order", amount: "-₹850", date: "17 July, 2025", status: "Failed" },
];

const Transactions = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Transaction History</h2>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-right">Amount</th>
              <th className="py-3 px-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactionsData.map((tx, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 transition">
                <td className="py-3 px-4">{tx.title}</td>
                <td className="py-3 px-4">{tx.date}</td>
                <td className={`py-3 px-4 text-right font-semibold ${tx.amount.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>{tx.amount}</td>
                <td className="py-3 px-4 text-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium 
                    ${tx.status === 'Completed' ? 'bg-green-100 text-green-700' : 
                      tx.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 
                      'bg-red-100 text-red-700'}`}>
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
