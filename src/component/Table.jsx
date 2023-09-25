// DataTable.js
import React from 'react';

const Table = () => {
  const tableRows = Array.from({ length: 9 }, (_, index) => (
    <tr key={index}>
      <td><input type="checkbox" /></td>
      <td className="text-primary">#AHGA68</td>
      <td>23/09/2022</td>
      <td>Jacob Marcus</td>
      <td>$100</td>
      <td>$000</td>
      <td>$000</td>
    </tr>
  ));

  return (
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>Invoice ID</th>
          <th>Date</th>
          <th>Customer</th>
          <th>Payable Amount</th>
          <th>Paid Amount</th>
          <th>Due</th>
        </tr>
      </thead>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
}

export default Table;
