import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Menu from './menu/menu'

export default function EditEnd(){
    return(
        
        <Section>
            <Menu />
            <h2> Editar endereço</h2>
            <div class="editEnd">
                <form action="./endereco.html" method="get" class="form">            
                    <input type="text" placeholder="Nome do destinatario" />
                    <input type="text" placeholder="Tipo de endereço" />
                    <input type="number" placeholder="CEP" minlength="8"/>
                    <input type="text" placeholder="Endereço" />
                    <input type="number" placeholder="Número" />
                    <input type="text" placeholder="Complemento" />
                    <input type="text" placeholder="Informações de referência" />
                    <input type="text" placeholder="Bairro" />
                    <input type="text" placeholder="Cidade" />
                    <input type="text" placeholder="Estado" />
                   {/*  <input type="submit" value="Salvar Alterações" /> */}
                   <button><Link to="/endereco/">Salvar Alterações</Link></button>
                </form>
            </div>
        </Section>
    )
}

const Section = styled.section`
    max-width: 550px;
    margin: 50px auto;
    display: flex;
    flex-wrap:wrap ;
    border: 1px solid #ccc;
    padding: 10px;


    .editEnd {
    max-width: 650px; /*Alterar para max-width: */
    margin: 0px 10px;
    border: 1px solid #ccc;
    padding: 10px;
}

/* endereço */
    .form{
        display: flex;
        flex-direction: column;
    }

    h2{
        flex-basis: 950px;
    }
    
    a{
        color: #000;
        font-weight:600;
       
    }

    .form input{
        border-radius: 5px;
        padding: 10px;
        margin:2px;
        border:1px solid #bbb;
    }

    .form input::placeholder{
        color: #071726;
    }
    .form button{
        color: white;
        background: #399F4C;
        border: 1px solid #55CD6C;
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
        width: 200px;
        height: 35px;
        margin: 0 auto;
        border-radius: 5px;
    }
    .form input:nth-child(3){
        width:200px;
    }
    .form input:nth-child(5){
        width:200px;
    }

`;