import React, {useEffect, useState} from "react";
import "./Home.css"

export const Home = () => {

    const colorsArray = ['zielony', 'niebieski', 'szary', 'turkusowy', 'granatowy', 'czerwony', 'biały'];
    const vatArray = ['ZW', 'NP.', '0%', '3%',  ];

    const [data, setData] = useState({
        nip: '',
        regon: '',
        nazwa: '',
        dataPowstania: new Date(),
        ulica: '',
        numerDomu: '',
        numberMieszkania: '',
        uwagi: '',
        color: '',
        vat: '',
    })


    const [vat, setVat] = useState();
    const updateForm = (key, value) => {
        setData(data => ({
            ...data,
            [key]: value,
        }));
    }

    const selectColor =
        <select  placeholder="Wybierz kolor" defaultValue={colorsArray[0]}
                onChange={e => updateForm('color', e.target.value)}>
            {
                colorsArray.filter((color) => {
                    return color;
                })
                    .map(color => (
                        <option key={color} value={color}>{color}</option>
                    ))
            }
        </select>

    const selectVat =
        <select  placeholder="Wybierz stawkę VAT" defaultValue={vatArray[0]}
                onChange={e => updateForm('vat', e.target.value)}>
            {
                vatArray.filter((vat) => {
                    return vat;
                })
                    .map(vat => (
                        <option key={vat} value={vat}>{vat}</option>
                    ))
            }
        </select>

    return (
        <div className='home'>
            <form >
                <h1>Wprowadź dane</h1>
                <p>Wprowadź nip</p>
                <input type="text"
                       placeholder=''
                       name="nip"
                       required
                       value={data.nip}
                       onChange={e => updateForm('nip', e.target.value)}/>
                <p>Wprowadź regon</p>
                <input type="number"
                       placeholder=''
                       name="regon"
                       required
                       value={data.regon}
                       onChange={e => updateForm('regon', e.target.value)}/>
                <p>Wprowadź nazwę</p>
                <input type="text"
                       placeholder=''
                       name="nazwa"
                       required
                       value={data.nazwa}
                       onChange={e => updateForm('nazwa', e.target.value)}/>
                <p>Wprowadź date powstania</p>
                <input
                    type="date"
                    placeholder=""
                    name="dataPowstania"
                    required
                    value={data.dataPowstania.toISOString().substr(0, 10)}
                    onChange={(e) => updateForm("dataPowstania", e.target.value)}
                />
                <p>Wprowadź nazwę ulicy</p>
                <input type="text"
                       placeholder=''
                       name="ulica"
                       required
                       value={data.ulica}
                       onChange={e => updateForm('ulica', e.target.value)}/>
                <p>Wprowadź numer domu</p>
                <input type="text"
                       placeholder=''
                       name="numerDomu"
                       required
                       value={data.numerDomu}
                       onChange={e => updateForm('numerDomu', e.target.value)}/>
                <p>Wprowadź numer mieszkania</p>
                <input type="text"
                       placeholder=''
                       name="numerMieszkania"
                       required
                       value={data.numberMieszkania}
                       onChange={e => updateForm('numerMieszkania', e.target.value)}/>
                <p>Uwagi</p>
                <textarea
                       placeholder=''
                       name="uwagi"
                       value={data.uwagi}
                       onChange={e => updateForm('uwagi', e.target.value)}/>
            </form>
            <p>Kolory</p>
            {selectColor}
            <p>VAT</p>
            {selectVat}

        </div>
    )
}