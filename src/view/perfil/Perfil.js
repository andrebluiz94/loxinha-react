import React from 'react';
import styled from 'styled-components';
import Menu from './menu/menu';
import pedido from '../../img/adult-black-coat-194917.jpg'

export default function Perfil(){
    return(

            <Section>
                <Menu />
                <div className="pedido">
                    <h2> Pedido</h2>                
                    <div className="listPedido">   
                    <h3>Pedido entregue com sucesso :)
                                <span>Entregue dia dd/mm/aaaa</span></h3> 
                                <div > 
                                    <ul className="itensPedidos">
                                            <li> 
                                                <img src={ pedido } alt="Pedido" />
                                                <p>Casaco para o frio do canada - cor marrom
                                                <br/> <sub><i>R$ 150</i></sub></p>
                                            </li>
                                        </ul>
                                </div>
                        </div> 
                    </div>
            </Section>

    )
}

const Section = styled.section`
    max-width: 950px;
    margin: 50px auto;
    display: flex;
    flex-wrap:wrap ;
    border: 1px solid #ccc;
    padding: 10px;


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

    /*MENU PEDIDOS*/

    .pedido {
        width: 650px; /*Alterar para max-width: */
        margin: 0px 10px;
    /* border-left: 1px solid #071726;*/
        padding-left: 10px;
    }

    /*Lista de pedidos do clientes*/
    .listPedido{
        background: #e9e8e8;
        border-left:10px solid rgb(31, 173, 31) ;
        margin-left: 50px;
        padding-left:10px ;
    }

    .listPedido p{
        font-size: 20px;

    }

    .listPedido h3{
        font-size: 20px;
    }

    .listPedido span{
        font-size: 15px;
    }

    /* ITENS DE PEDIDOS DOS CLIENTES*/
    .itensPedidos{
        display: flex;
        
    }
    .itensPedidos  img{
        border: 2px solid #071726;
        min-width: 150px;
        width: 25%;
        height: 170px;
        
    }

    .itensPedidos p{
        margin: 10px; 
    }
    .itensPedidos > li{
        list-style: none;
        display: flex;
        padding: 5px;
    }

`;