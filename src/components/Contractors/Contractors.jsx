import { useEffect, useState } from "react";
import "./Contractors.css";
import React from "react";



export const Contractors = () => {

    const [contractors, setContractors] = useState([{}]);
    const [addContractor, setAddContractor] = useState({
        id: "",
        nip: "",
        regon: "",
        name: "",
        if_vat: false,
        street: "",
        house: "",
        apartment: "",
    });
    const [addContractors, setAddContractors] = useState(false);
    const [addStatus, setAddStatus] = useState();
    const [editContractorFlag, setEditContractorFlag] = useState(false);

    useEffect(() => {
        getContractors();
    }, [])

    const sendContractor = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://172.22.0.20:3001/contractors`, {
              method: 'POST',
              body: JSON.stringify(addContractor),
              headers: {
                'Content-Type': 'application/json'
            },
        })
        if(res.status === 200){
            setAddContractors(false);
            setAddContractor({});
            getContractors();
        } else if (res.status===500) {
            setAddStatus('Wystąpił błąd podczas dodawania. Spróbuj ponownie później.')
        }
        } catch (e) {
            console.log(e);
        }
    }

    const getContractors = async () => {
        try {
            const res = await fetch(`http://172.22.0.20:3001/contractors`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json();
        setContractors(data);

        } catch (e) {
            console.log(e);
        }
    }

    const deleteContractor = async (e, key) => {
        e.preventDefault();
        const res = await fetch(`http://172.22.0.20:3001/contractors/delete?id=${key}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(res.status === 200) {
            getContractors();
        }
    }

    const editContractor = async (e, id) => {
        e.preventDefault();
        const res = await fetch(`http://172.22.0.20:3001/contractors/edit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contractors)
        })
        if (res.status === 200) {
            setEditContractorFlag(!editContractorFlag);
            getContractors();
        }
    }

    const AddContractorHTML = 
        (
            <div className="add-contractor">
                <form onSubmit={sendContractor}>
                    <h3>Dodaj kontrahenta</h3>
                    <p>Podaj NIP:</p>
                    <input type="text"
                           placeholder=''
                           name="nip"
                           minLength={12}
                           maxLength={12}
                           required
                           value={addContractor.nip}
                           onChange={e => updateForm('nip', e.target.value)}
                    />
                    <p>Podaj REGON:</p>
                    <input type="text"
                           placeholder=''
                           name="regon"
                           minLength={9}
                           maxLength={14}
                           required
                           value={addContractor.regon}
                           onChange={e => updateForm('regon', e.target.value)}
                    />
                    <p>Podaj nazwę:</p>
                    <input type="text"
                           placeholder=''
                           name="name"
                           required
                           value={addContractor.name}
                           onChange={e => updateForm('name', e.target.value)}
                    />
                    <p>Czy podatnik VAT?</p>
                    <input type="checkbox"
                           name="if_vat"
                           value={addContractor.if_vat}
                           onChange={e => updateForm('if_vat', e.target.checked)}
                    />
                    <p>Podaj nazwę ulicy:</p>
                    <input type="text"
                           placeholder=''
                           name="street"
                           required
                           value={addContractor.street}
                           onChange={e => updateForm('street', e.target.value)}
                    />
                    <p>Podaj numer domu:</p>
                    <input type="text"
                           placeholder=''
                           name="house"
                           required
                           value={addContractor.house}
                           onChange={e => updateForm('house', e.target.value)}
                    />
                    <p>Podaj numer mieszkania:</p>
                    <input type="text"
                           placeholder=''
                           name="apartment"
                           required
                           value={addContractor.apartment}
                           onChange={e => updateForm('apartment', e.target.value)}
                    />
                    <button>Dodaj kontrahenta</button>
                </form>
            </div>
        )

    const editContractorHTML = (contractor, index) => (
        <tr key={contractor.id}>
                    <td><input type="text"
                           placeholder={contractor.nip}
                           name="nip"
                           minLength={12}
                           maxLength={12}
                           required
                           value={contractor.nip}
                           onChange={(e) => handleFieldChange(index, 'nip', e.target.value)}
                    /></td>
                    <td><input type="text"
                           placeholder={contractor.regon}
                           name="regon"
                           minLength={9}
                           maxLength={14}
                           required
                           value={contractor.regon}
                           onChange={(e) => handleFieldChange(index, 'regon', e.target.value)}
                    /></td>
                    <td><input type="text"
                           placeholder={contractor.name}
                           name="name"
                           required
                           value={contractor.name}
                           onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
                    /></td>
                    <td><input type="checkbox"
                    name="if_vat"
                    value={contractor.if_vat}
                    onChange={(e) => handleFieldChange(index, 'if_vat', e.target.value)}
             /></td>
                    <td><input type="text"
                           placeholder={contractor.street}
                           name="street"
                           required
                           value={contractor.street}
                           onChange={(e) => handleFieldChange(index, 'street', e.target.value)}
                    /></td>
                    <td> <input type="text"
                           placeholder={contractor.house}
                           name="house"
                           required
                           value={contractor.house}
                           onChange={(e) => handleFieldChange(index, 'house', e.target.value)}
                    /></td>
                    <td><input type="text"
                           placeholder={contractor.apartment}
                           name="apartment"
                           required
                           value={contractor.apartment}
                           onChange={(e) => handleFieldChange(index, 'apartment', e.target.value)}
                    /></td>
                    <td>
                        <button onClick={(e) => deleteContractor(e, contractor.id)}>Usuń</button>
                    </td>
                  </tr>
    )

    const contractorHTML = (contractor) => (
        <tr key={contractor.id}>
                    <td>{contractor.nip}</td>
                    <td>{contractor.regon}</td>
                    <td>{contractor.name}</td>
                    <td>{contractor.if_vat === "true" ? "TAK" : "NIE"}</td>
                    <td>{contractor.street}</td>
                    <td>{contractor.house}</td>
                    <td>{contractor.apartment}</td>
                    <td>
                        <button onClick={(e) => deleteContractor(e, contractor.id)}>Usuń</button>
                    </td>
                  </tr>
    )
    

    const updateForm = (key, value)=> {
        setAddContractor(addContractor => ({
            ...addContractor,
            [key]: value,
        }));
    };

    const handleFieldChange = (index, fieldName, newValue) => {
        const updatedContractors = [...contractors];
        console.log(updatedContractors[index] = { ...updatedContractors[index], [fieldName]: newValue });
        updatedContractors[index] = { ...updatedContractors[index], [fieldName]: newValue };
        setContractors(updatedContractors);
      };

      
    

    return <>
            <div className="contractors-container">
          <h2>Dane kontrahentów</h2>
          <table className="contractors-table">
            <thead>
              <tr>
              <th>NIP</th>
              <th>REGON</th>
              <th>NAZWA</th>
              <th>CZY PŁATNIK VAT?</th>
              <th>ULICA</th>
              <th>NUMER DOMU</th>
              <th>NUMER MIESZKANIA</th>
              <th>USUŃ</th>
              </tr>
            </thead>
            <tbody>
            {contractors.map((contractor, index) => (
                  editContractorFlag ? editContractorHTML(contractor, index) : contractorHTML(contractor)
              ))}
            </tbody>
          </table>
          {addContractors ? AddContractorHTML : null}
          <div  className="button-contractor">
          <button onClick={() => setAddContractors(!addContractors)}>{addContractors ? "Zakończ dodawanie kontrahenta" : "Dodaj kontrahenta"}</button>
          <button onClick={() => setEditContractorFlag(!editContractorFlag)}>{editContractorFlag ? "Zakończ edycję" : "Edytuj"}</button>
          {editContractorFlag ? <button className="add-contractor" onClick={(e) => editContractor(e)}>Zapisz zmiany</button> : null}
          </div>
          
          </div>
    </>
}