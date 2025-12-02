import { Calendar } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";


const LatestTransaction = () => {
  const transactions = [
    { id: "TXN001", user: "John Doe", date: "2024-06-01", amount: "$250.00", status: "Completed" },
    { id: "TXN002", user: "Jane Smith", date: "2024-06-02", amount: "$150.00", status: "Pending" },
    { id: "TXN003", user: "Alice Johnson", date: "2024-06-03", amount: "$300.00", status: "Failed" },
    { id: "TXN004", user: "Bob Brown", date: "2024-06-04", amount: "$400.00", status: "Completed" },
    { id: "TXN005", user: "Charlie Davis", date: "2024-06-05", amount: "$500.00", status: "Pending" },
    { id: "TXN006", user: "Diana Evans", date: "2024-06-06", amount: "$600.00", status: "Completed" },


  ];

  const getStatusColor = (status: "Completed" | "Pending" | "Failed") => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-600 border-green-500";
      case "Pending":
        return "bg-yellow-500/20 text-yellow-600 border-yellow-500";
      case "Failed":
        return "bg-red-500/20 text-red-600 border-red-500";
      default:
        return "bg-gray-200 text-gray-600 border-gray-400";
    }
  };

  return (
<div className="w-full p-2 border-gray-200 rounded-md shadow-sm overflow-y-scroll h-110 no-scrollbar scroll-smooth">
      <h2 className="text-lg font-semibold mb-4">Latest Transactions</h2>

      <div className="flex flex-col gap-2">
        {transactions.map((item) => (
          <div
            className="flex justify-between border px-3 py-2 border-gray-400 rounded-sm items-center"
            key={item.id}
          >
            {/* Left */}
            <div className="flex flex-col gap-1">
              <div className="font-medium">{item.user}</div>
              <div className="text-sm text-gray-400 flex items-center">
                <Calendar className="inline mr-1 h-4 w-4" />
                {item.date}
              </div>
            </div>

            {/* Middle */}
            <div className="flex flex-col items-center gap-1.5">
              <div className="font-medium">{item.amount}</div>

              <div
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-semibold border",
                  getStatusColor(item.status)
                )}
              >
                {item.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestTransaction;
