import React from "react";

const TableTop = () => {
  return (
    <div className="p-5">
      <div className="text-2xl font-medium">Transactions | This Month</div>
      <div className="flex gap-4 mt-6">
        <div className="px-3 py-1.5 bg-black-200 text-black-300 rounded-full">
          Payouts (22)
        </div>
        <div className="px-3 py-1.5 rounded-full bg-blue-700 text-white-500">
          Refunds (6)
        </div>
      </div>
    </div>
  );
};

export default TableTop;
