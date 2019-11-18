import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import Delete from '../../../img/delete 1.svg';
import Pencil from '../../../img/VectorPencil.svg';


export default function SelectEndereco(){
    return(
        <Section>
            
            <div>
                <p>Casa</p>
                    <div className="op">
                        <Link to="/editEnd/"><img src={ Pencil } alt="Editar endereco" srcset="" /></Link>
                        <Link to="/endereco/"><img src={ Delete } alt="Deletar endereco" /></Link>
                    </div>
                
            </div>
            <div>
                <p>  Seu nome aqui<br />
                Rua logo ali, 42 <br />
                CEP: 999999-55 - Bairro <br />
                Estado, cidade</p>
            </div>
            <div>
                <input type="radio" name="estado" id="" /><label htmlFor=""> 
                Selecione seu endereço </label>
            </div>
        </Section>
    )
}

const Section = styled.section`

 font-size: 0.9rem;
 display: flex;
 flex-wrap: wrap;
 flex-direction: column;

    div:nth-child(1){
        display: flex;
        justify-content: space-between;
    }
    div{
        border:1px solid #071726;
        padding: 5px;
        width: 250px;
    }


    div img{
        width: 15%;
    }
    .op{
        border: none;
        text-align: right;
    }

.selectEnd div:nth-child(1){
 
 display: flex;
 justify-content: space-between;
 align-items: center;
}

@media(max-width:700px){
 .pedido{
     margin: 0 10px;
 }
}

`;