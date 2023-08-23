import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "./components/Home/Home";
import {Title} from "./components/Title/Title";
import {Navbar} from "./components/Navbar/Navbar";
import { Workers } from './components/Workers/Workers';
import { VAT } from './components/VAT/Vat';
import "./App.css"
import { Delegations } from './components/Delegations/Delegations';
import { Contractors } from './components/Contractors/Contractors';

export const App = () => {
    return (
        <>
            <Title/>
        <div className="flex-container">
            <Navbar/>
            <div id="Prawy">
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/workers' element={<Workers/>}/>
                    <Route path='/vat' element={<VAT/>}/>
                    <Route path='/delegations' element={<Delegations/>}/>
                    <Route path='/contractors' element={<Contractors/>}/>
                </Routes>
            </div>

        </div>
        </>

    );
}
