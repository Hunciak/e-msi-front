import React, { useEffect, useState } from "react";
import "./Delegations.css";

export const Delegations = () => {
    
  const [delegations, setDelegations] = useState([{}]);
 

    useEffect(() => {
      (async () => {
        try {
          const res = await fetch(`http://172.22.0.20:3001/delegations`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
            },
          })

          const data = await res.json();
          setDelegations(data);


      } catch (e) {
          console.log(e);
      }
      })()

    }, [])

    return <>
        <div className="table-container">
          <h2>Tabela delegacji BD</h2>
          <table className="delegations-table">
            <thead>
              <tr>
              <th>Lp.</th>
              <th>Imię i nazwisko</th>
              <th>Data od:</th>
              <th>Data do:</th>
              <th>Miejsce wyjazdu:</th>
              <th>Miejsce przyjazdu:</th>
              </tr>
            </thead>
            <tbody>
            {delegations.map((delegation, index) => (
                  <tr key={index}>
                    <td>{delegation.id}</td>
                    <td>{delegation.name}</td>
                    <td>{delegation.date_from}</td>
                    <td>{delegation.date_to}</td>
                    <td>{delegation.departure}</td>
                    <td>{delegation.destination}</td>
                  </tr>
              ))}
            </tbody>
          </table>

          </div>




    </>
}