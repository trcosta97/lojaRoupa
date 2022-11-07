import React from "react";
import Camisa1 from '../img/mm1.jpg'
import Camisa2 from '../img/mm2.jpg'
import Camisa3 from '../img/mm3.webp'
import { StyleMasculino } from "../styled";



export default function ModaMasculina(){
    
   
    return(
        <StyleMasculino>
            <div className="main">
            <h1 className="titulo">MODA MASCULINA</h1>
            <div className="artigo">
                <img className="img" src={Camisa1} alt="camisa xadrez azul" />
                <p className="nome_roupa">XADREZ AZUL</p>
                <p className="preco">$199.99</p>
                <button className="carrinho">ADICIONAR AO CARRINHO</button>
            </div>
            <div className="artigo">
                <img className="img" src={Camisa2} alt="camisa xadrez clara" />
                <p className="nome_roupa">XADREZ CLARO</p>
                <p className="preco">$219.99</p>
                <button className="carrinho">ADICIONAR AO CARRINHO</button>
            </div>
            <div className="artigo">
                <img className="img" src={Camisa3} alt="camisa xadrez preta" />
                <p className="nome_roupa">XADREZ ESCURO</p>
                <p className="preco">$219.99</p>
                <button className="carrinho">ADICIONAR AO CARRINHO</button>
            </div>
            </div>
        </StyleMasculino>
        
    )
}