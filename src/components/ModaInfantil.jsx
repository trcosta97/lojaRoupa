import React from "react";
import Infantil1 from '../img/mi1.jpg'
import Infantil2 from '../img/mi2.webp'
import Infantil3 from '../img/mi3.webp'
import { StyleInfantil } from "../styled";



export default function ModaInfantil(){
    
   
    return(
        <StyleInfantil>
            <div className="main">
            <h1 className="titulo">MODA INFANTIL</h1>
            <div className="artigo">
                <img className="img" src={Infantil1} alt="camisa xadrez azul" />
                <p className="nome_roupa">VESTIDO JEANS</p>
                <p className="preco">$89.99</p>
                <button className="carrinho">ADICIONAR AO CARRINHO</button>
            </div>
            <div className="artigo">
                <img className="img" src={Infantil2} alt="camisa xadrez clara" />
                <p className="nome_roupa">CONJUNTO MENINO</p>
                <p className="preco">$109.99</p>
                <button className="carrinho">ADICIONAR AO CARRINHO</button>
            </div>
            <div className="artigo">
                <img className="img" src={Infantil3} alt="camisa xadrez preta" />
                <p className="nome_roupa">VESTIDO VERMELHO</p>
                <p className="preco">$99.99</p>
                <button className="carrinho">ADICIONAR AO CARRINHO</button>
            </div>
            </div>
        </StyleInfantil>
        
    )
}