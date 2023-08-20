import React, { useState } from "react";
import "./Workers.css";

export const Workers = () => {

    const exampleWorkers = [
        {id: 1, name: 'Piotr', lastName: 'Czubaski', position: 'Elekryk', hireDate:new Date(2019, 0, 3), vacationDays: 50},
        {id: 2, name: 'Mateusz', lastName: 'Bielgosz', position: 'Automatyk', hireDate:new Date(2019, 11, 1), vacationDays: 60},
        {id: 3, name: 'Paweł', lastName: 'Busiak', position: 'Mechani', hireDate:new Date(2020, 0, 16), vacationDays: 7},
        {id: 4, name: 'Karol', lastName: 'Dziurawiec', position: 'Mechanik', hireDate:new Date(2022, 7, 1), vacationDays: 2},
        {id: 5, name: 'Michał', lastName: 'Żelek', position: 'Automatyk', hireDate:new Date(2020, 0, 3), vacationDays: 10},
    ]

    const [color, setColor] = useState({
      first: 'red',
      second: 'green',
    })

    const updateForm = (key, value) => {
      setColor(color => ({
          ...color,
          [key]: value,
      }));
  }


    return (
        <div className="table-container">
          <h2>Tabela pracowników</h2>
          <table className="worker-table">
            <thead>
              <td>Lp.</td>
              <td>Imię</td>
              <td>Nazwisko</td>
              <td>Stanowisko</td>
              <td>Data zatrudnienia</td>
              <td>Ilość dni urlopowych</td>
            </thead>
            <tbody>
              {exampleWorkers.map((worker, index) => (
                <React.Fragment key={worker.id}>
                  <tr key={worker.id} style={index % 2 === 0 ? {backgroundColor: color.first} : {backgroundColor: color.second}}>
                    <td>{worker.id}</td>
                    <td>{worker.name}</td>
                    <td>{worker.lastName}</td>
                    <td>{worker.position}</td>
                    <td>
                      {worker.hireDate instanceof Date
                        ? worker.hireDate.toLocaleDateString()
                        : worker.hireDate}
                    </td>
                    <td>{worker.vacationDays}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>

          <h2>Wybierz kolory:</h2>
          <h3>Pierwszy kolor</h3>
          <input 
          type="color"
          onChange={e => updateForm('first', e.target.value)}
          />        
          <h3>Drugi kolor</h3> 
          <input 
          type="color"
          onChange={e => updateForm('second', e.target.value)}
          />

        </div>
      );
}