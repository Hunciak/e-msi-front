import React from "react";
import {NavLink} from "react-router-dom";
import './Navbar.css';


export const Navbar = () => {
    return (
                <div id="Lewy">
                    <ul>
                        <li>
                            <NavLink to="/">Różne kontrolki HTML</NavLink>
                        </li>
                        <li>
                            <NavLink to="/workers">Tabela Pracowników</NavLink>
                        </li>
                        <li>
                            <NavLink to="/vat">Tabela Faktur VAT</NavLink>
                        </li>
                        <li>
                            <NavLink to="/delegation">Tabela Delegacji BD</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contractors">Dane Kontrahentów</NavLink>
                        </li>
                    </ul>
                </div>
    )
}