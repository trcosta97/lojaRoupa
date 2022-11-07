import React from "react";  
import { Link } from "react-router-dom";
import { StyleMenu } from "../styled";

export default function Menu(){
    
    return(
        <StyleMenu>
            <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/modaFeminina'>Moda Feminina</Link></li>
                <li><Link to='/modaMasculina'>Moda Masculina</Link></li>
                <li><Link to='/modaInfantil'>Moda Infantil</Link></li>
                <li><Link to='/sobre'>Sobre</Link></li>
            </ul>
            </nav>
        </StyleMenu>
        
    )
}