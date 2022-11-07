import React from 'react'
import { StyleHome } from '../styled'
import imagemHome from '../img/home.jpg'


export default function Home(){
  
    
    return(
        <StyleHome>
            <h1>FIAP Clothing</h1>
            <img className="img" src={imagemHome} alt="foto loja"/>
            <p className='bemVindo'>Bem vindo ao site oficial da loja de roupas FIAP Clothing, roupas para toda a família.</p>
        </StyleHome>
    )
}