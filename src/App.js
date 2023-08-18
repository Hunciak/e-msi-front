import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "./components/Home/Home";
import {Title} from "./components/Title/Title";
import {Navbar} from "./components/Navbar/Navbar";
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
                    {/*<Route path='/logout' element={<Logout/>}/>*/}
                    {/*<Route path='/createexercise' element={<CreateNewExercise/>}/>*/}
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
