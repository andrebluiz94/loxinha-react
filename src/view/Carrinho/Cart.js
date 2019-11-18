import React from 'react';
import styled from 'styled-components'
import pedido from '../../img/adult-black-coat-194917.jpg'
import { Link } from 'react-router-dom'

export default function Cart(){
    return(
            <Section className="Container">
                <div className="car">
                    <h1>Meu carrinho</h1>
                  
                    <div>
                        <img src={ pedido } alt="" />
                        <span>
                            Casaco marrom para sobreviver ao inverno do canada <br />R$150,00
                        </span>
                    </div>
                </div>
                
                <div class="finalizarCompra">
                    Valor total dos produtos: <span>R$29,90</span><br />
                    <button> <Link to="/" >FINALIZAR A COMPRA!</Link> </button>
                </div>
                
            </Section>
    )
}

const Section = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 50px auto;
    flex-wrap: wrap;


   

    .car{
        padding: 20px;
        border:2px solid #EDEDED;
        flex-basis: 500px;
    }

    .car > div:hover{
        border-left:5px solid #55CD6C;
    }

    .car img{
        border:1px solid #071726;
        margin-right: 5px;
        max-width: 17.5%;
    }

    .car > div{
        display: flex;
        padding: 10px;
        border:1px solid #071726;
        box-shadow: 4px 4px 8px rgba(0, 0,0,0.25);
        flex:1;
    }
    .finalizarCompra{
        border:1px solid #071726;
        padding: 20px;
        text-align: center;
        box-shadow: 4px 4px 8px rgba(0, 0,0,0.25);
    }
    .finalizarCompra > button{
        background:  #399F4C;
        
        border:1px solid #55CD6C;
        font-weight: bold;
        height: 40px;
        border-radius: 5px;
        
    }

    .finalizarCompra > button:hover{
        box-shadow: 4px 4px 8px rgba(0, 0,0,0.25);
        margin-bottom: 5px;
    }

    .finalizarCompra a {
        color:#071726;
    }
`;