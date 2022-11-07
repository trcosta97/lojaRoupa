import React from "react";
import styled from "styled-components";


export default function Sobre(){
    
    const StyleSobre = styled.div`
        background-color: #57e7e7;
        height : 85vh;
        text-align: center;
        color: white;
        font-family: sans-serif;

       h1{
          padding:20px;
          font-size: 50px;
        }

        p{
            text-align: justify;
            margin: 30px 90px 0px 90px;
            font-size: 130%;
            background-color: white;
            border-radius: 10px;
            color: #57e7e7;
            padding: 15px;
        }

        .mapa{
            margin-top: 20px;
            width: 80%;
            height: 30%;
        }
        h2{
            margin-top: 50px;
        }


`

    
    return(
        <StyleSobre>
            <h1>SOBRE</h1>
            
            <h3>Thiago Ribeiro - RM 92800</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veniam dolore, dicta et voluptatibus architecto earum ad qui unde consequuntur nam ea voluptatem natus nesciunt libero vitae! Dolore, odit laudantium?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic sed voluptate enim et corrupti natus laboriosam blanditiis. Eveniet placeat minima officia magnam ducimus, suscipit deserunt blanditiis exercitationem debitis harum omnis.lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et neque recusandae nulla aliquam perferendis, rem expedita voluptatibus assumenda consectetur quas qui! Dolore itaque quis quod incidunt, iure minus quibusdam harum.</p>

            <h2>Localização</h2>
            
            <iframe className="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.120727047787!2d-46.65459408451675!3d-23.56410716758003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7dbf9ff57%3A0x4ca8eb5c4f7ecca9!2sFIAP!5e0!3m2!1sen!2sbr!4v1663095420230!5m2!1sen!2sbr"></iframe>

        </StyleSobre>
    )
}