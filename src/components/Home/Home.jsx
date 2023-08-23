import React, {useState} from "react";
import "./Home.css"

export const Home = () => {

    const colorsArray = ['zielony', 'niebieski', 'szary', 'turkusowy', 'granatowy', 'czerwony', 'biały'];
    const vatArray = ['ZW', 'NP.', '0%', '3%', '8%', '23%' ];
    const elementArray = ['Element', 'Element', 'Element'];

    const [data, setData] = useState({
        nip: '',
        regon: '',
        nazwa: '',
        dataPowstania: new Date(),
        ulica: '',
        numerDomu: '',
        numerMieszkania: '',
        uwagi: '',
        color: '',
        vat: '',
    })

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

    const olElement = elementArray.map((element, i) => (
        <li key={i}>{element}</li>
    ))
            
    return (
        <div className='home'>
            <h1>Wprowadź dane</h1>
            <form >
                <p>Wprowadź nip</p>
                <input type="text"
                       placeholder=''
                       name="nip"
                       value={data.nip}
                       onChange={e => updateForm('nip', e.target.value)}/>
                <p>Wprowadź regon</p>
                <input type="number"
                       placeholder=''
                       name="regon"
                       value={data.regon}
                       onChange={e => updateForm('regon', e.target.value)}/>
                <p>Wprowadź nazwę</p>
                <input type="text"
                       placeholder=''
                       name="nazwa"
                       value={data.nazwa}
                       onChange={e => updateForm('nazwa', e.target.value)}/>
                <p>Wprowadź datę powstania</p>
                <input
                    type="date"
                    placeholder=""
                    name="dataPowstania"
                    value={data.dataPowstania}
                    onChange={(e) => updateForm("dataPowstania", e.target.value)}
                />
                <p>Wprowadź nazwę ulicy</p>
                <input type="text"
                       placeholder=''
                       name="ulica"
                       value={data.ulica}
                       onChange={e => updateForm('ulica', e.target.value)}/>
                <p>Wprowadź numer domu</p>
                <input type="text"
                       placeholder=''
                       name="numerDomu"
                       value={data.numerDomu}
                       onChange={e => updateForm('numerDomu', e.target.value)}/>
                <p>Wprowadź numer mieszkania</p>
                <input type="text"
                       placeholder=''
                       name="numerMieszkania"
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
            <ol>
                {olElement}
            </ol>
        </div>
    )
}