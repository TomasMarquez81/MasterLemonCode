import React from "react";
import { generatePath, Link } from "react-router-dom";

export const SelectApi: React.FC = () => {
    return <>
        <div className="menuApi">
        <div><Link to={generatePath("/private/list/:company", { company: "lemoncode"})}><img src="../img/githubLogo.png" /></Link></div>
        <div><Link to="/private/listApiRickMorthi"><img src="../img/Rick_and_Morty.svg"/></Link></div>
        </div>
        
    </>
}