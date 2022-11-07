import React from 'react'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import ModaFeminina from './components/ModaFeminina'
import ModaInfantil from './components/ModaInfantil'
import ModaMasculina from './components/ModaMasculina'
import Rodape from './components/Rodape'
import Menu from './components/Menu'
import Sobre from './components/Sobre'





export default function App (){
    return(
        <Router>     
            <Menu/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/ModaFeminina' element={<ModaFeminina/>}/>
                <Route path='/ModaMasculina' element={<ModaMasculina/>}/>
                <Route path='/ModaInfantil' element={<ModaInfantil/>}/>
                <Route path='/Sobre' element={<Sobre/>}/>
            </Routes>
            <Rodape/>  
        </Router>
            
            

          
        
    )
}