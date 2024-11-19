import React from "react";
import TableBar from "./TableBar";
import { orderData } from "../../data/orders";
const Table = () => {
  return (
    <div className="p-5 bg-white-500">
      <TableBar />
      <div className="relative overflow-x-auto mt-5">
        <table className="w-full text-left text-gray-500">
          <thead className="text-md font-medium rounded text-black-400">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium">
                ORDER ID
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                STATUS
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                TRANSACTION ID
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                REFUND DATE
              </th>
              <th scope="col" className="px-6 py-3 font-medium text-right">
                ORDER AMOUNT
              </th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((ele) => {
              return (
                <tr className="bg-white border-b border-black-200">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-blue-700 whitespace-nowrap"
                  >
                    #{ele.id}
                  </th>
                  <td className="px-6 py-4 flex items-center gap-2 text-black-600">
                    {ele.status === "Successful" && (
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                    )}
                    {ele.status === "Processing" && (
                      <div className="h-2.5 w-2.5 rounded-full bg-black-500" />
                    )}
                    {ele.status === "Failed" && (
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                    )}
                    {ele.status}
                  </td>

                  <td className="px-5 py-4 text-black-400">
                    {ele.transactionID}
                  </td>

                  <td className="px-5 py-4 text-black-400">{ele.refundDate}</td>

                  <td className="px-5 py-4 text-black-400 text-right">
                    {ele.amount}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
