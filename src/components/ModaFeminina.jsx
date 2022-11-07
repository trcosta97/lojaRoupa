import React from "react";
import Vestido1 from '../img/mf1.jpg'
import Vestido2 from '../img/mf2.jpg'
import Vestido3 from '../img/mf3.jpeg'
import { StyleFeminino } from "../styled";




export default function ModaFeminina(){
     
    return(
        <StyleFeminino>
            <div className="main">
                <h1 className="titulo">MODA FEMININA</h1>
                <div className="artigo">
                    <img className="img" src={Vestido1} alt="vestido branco" />
                    <p className="nome_roupa">VESTIDO BRANCO</p>
                    <p className="preco">$199.99</p>
                    <button className="carrinho">ADICIONAR AO CARRINHO</button>
                </div>
                <div className="artigo">
                    <img className="img" src={Vestido2} alt="vestido florido"/>
                    <p className="nome_roupa">VESTIDO FLORES</p>
                    <p className="preco">$219.99</p>
                    <button className="carrinho">ADICIONAR AO CARRINHO</button>
                </div>
                <div className="artigo">
                    <img className="img" src={Vestido3} alt="vestido azul"/>
                    <p className="nome_roupa">VESTIDO AZUL</p>
                    <p className="preco">$219.99</p>
                    <button className="carrinho">ADICIONAR AO CARRINHO</button>
                </div>
            </div>
            
        </StyleFeminino>
        
        

    )
}
