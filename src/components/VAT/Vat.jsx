import React, { useEffect, useState } from "react";
import { InvoiceRow } from "./InvoiceRow";
import "./Vat.css";


export const VAT = () => {


    const [vat, setVat] = useState([
        {id: 1, description: "Usługi projektowe", MPK: "Studio Projektowe M.CH", net: 140, amount: 62, vat: 'ZW', gross: 0, netSum: 0},
        {id: 2, description: "Usługi stolarskie", MPK: "Zbigniew Stunożny", net: 3000, amount: 2, vat: 'ZW'},
        {id: 3, description: "Usługi wykończeniowe", MPK: "Piotr Wesołek", net: 500, amount: 61, vat: 'ZW'},
        {id: 4, description: "Wylanie posadzki", MPK: "Adam Wylewka", net: 200, amount: 62, vat: 'ZW'},
        {id: 5, description: "Sprzedarz miodu", MPK: "Jarosław Żelek", net: 50, amount: 8, vat: 'ZW'},
    ])

    const over1knet = () => {
      setVat(prevVat => {
        return prevVat.map(invoice => {
          return {
            ...invoice,
            over1kFlag: invoice.net > 1000,
          };
        });
      });
    }

    return <>
     <div className="table-container">
      <h2>Tabela VAT</h2>
      <table className="vat-table">
        <thead>
          <tr>
            <th>Lp.</th>
            <th>Opis</th>
            <th>MPK</th>
            <th>Kwota Netto</th>
            <th>Ilość</th>
            <th>VAT</th>
            <th>Kwota Brutto</th>
            <th>Wartość Netto</th>
            <th>Wartość Brutto</th>
          </tr>
        </thead>
        <tbody>
        {vat.map((invoice) => (
              <InvoiceRow key={invoice.id} invoice={invoice} />
            ))}
        </tbody>    
      </table>
      <button onClick={over1knet}>Powyżej 1000,00 zł Netto</button>
    </div>
    
    </>
}
