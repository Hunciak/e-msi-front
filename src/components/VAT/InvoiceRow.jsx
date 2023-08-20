import React, { useState, useEffect } from "react";

export const InvoiceRow = ({ invoice }) => {
  const [selectedVat, setSelectedVat] = useState(invoice.vat);
  const [gross, setGross] = useState(invoice.net * (1 + selectedVat / 100));
  const [netSum, setNetSum] = useState(invoice.net * invoice.amount)
  const [grossSum, setGrossSum] = useState(0);
  const vatArray = ['ZW', 'NP.', 0, 3, 8, 23 ];

  useEffect(() => {
    const vatValue = typeof selectedVat === 'string' ? 0 : parseFloat(selectedVat);
    setGross(invoice.net * (1 + vatValue / 100));
    setGrossSum(invoice.net * invoice.amount * (1 + vatValue / 100));
  }, [selectedVat, invoice.net]);

  return (
    <tr key={invoice.id}  style={invoice.over1kFlag ? {backgroundColor: 'green'} : null}>
      <td>{invoice.id}</td>
      <td>{invoice.description}</td>
      <td>{invoice.MPK}</td>
      <td>{invoice.net}</td>
      <td>{invoice.amount}</td>
      <td>
        <select
          value={selectedVat}
          onChange={(e) => {
            const newValue = !isNaN(e.target.value) ? parseFloat(e.target.value) : e.target.value;
            setSelectedVat(newValue);
          }}
        >
          {
            vatArray.map((vat, index) => (
              <option key={index} value={vat}>{vat}</option>
            ))
          }
        </select>
      </td>
      <td>{gross.toFixed(2)}</td>
      <td>{netSum.toFixed(2)}</td>
      <td>{grossSum.toFixed(2)}</td>
    </tr>

  );
};