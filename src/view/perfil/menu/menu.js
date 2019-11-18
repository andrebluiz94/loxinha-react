import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import vetorPedido from '../../../img/VectorPedido.svg';
import vetorEndereco from '../../../img/VectorEndereco.svg';
import vetorCad from '../../../img/VetorCad.svg';

export default function menu(){
    return(
        <Section>
            <h1>Minha conta</h1>
                            
                <ul className="menuConta">
                    <li><Link to="/perfil/"> <img src={ vetorPedido } alt="" /> Pedidos</Link></li>
                    <li><Link to="/endereco/"> <img src={ vetorEndereco } alt="" /> Endereço</Link></li>
                    <li><Link to="/editCad/"> <img src={ vetorCad } alt="" /> Cadastro</Link></li>
                </ul>
        </Section>
    )
}

const Section = styled.section`
    h1{
        flex-basis: 900px;
    }

    .menuConta{
        width: 200px;
        padding: 10px;
    }


    .menuConta > li{
        padding: 5px;
        margin-bottom: 5px;
        text-align: left; 
        font-family: 'Times New Roman', Times, serif;
        font-size: 2.3rem;
        border-left: 1px solid #071726;
        list-style: none;
    }
    .menuConta img {
        margin-bottom: -5px;
        width: 35px;
    }

    .menuConta  a{
        color: #000;
    }

`;