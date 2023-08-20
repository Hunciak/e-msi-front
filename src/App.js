import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "./components/Home/Home";
import {Title} from "./components/Title/Title";
import {Navbar} from "./components/Navbar/Navbar";
import { Workers } from './components/Workers/Workers';
import { VAT } from './components/VAT/Vat';
import "./App.css"

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
                    {/*<Route path='/aftersignin' element={<LayoutPanel/>}/>*/}
                    {/*<Route path='/contact' element={<Contact/>}/>*/}
                    {/*<Route path='/' element={<Layout/>}/>*/}
                    {/*<Route path='/signin' element={<SignIn/>}/>*/}
                    {/*<Route path='/profil' element={<Profile/>}/>*/}
                </Routes>
            </div>

        </div>
        </>

    );
}
