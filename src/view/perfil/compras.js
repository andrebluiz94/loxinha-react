import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import compra from "../../img/bonFire.jpg"

export default function Compras(){
    return(
        <Section>
            <div class="car">
                <h1>Meu carrinho</h1>
                <hr />
                <div>
                    <img src={ compra } alt="" />
                    <span>
                        Jaqueta de couro <br />R$150,00
                    </span>
                </div>
            </div>
            
            <div class="finalizarCompra">
                <button><Link to="/Cart/" >Adicionar ao carrinho!</Link></button>
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
    }

    .car img{
        border:1px solid #071726;
        margin-right: 5px;
        width: 20%;
    }
    .car > div{
        display: flex;
        padding: 10px;
        border:1px solid #071726;
        box-shadow: 4px 4px 8px rgba(0, 0,0,0.25);
    }
    .car{
        width: 700px;
    }
    .finalizarCompra{
        border:1px solid #071726;
        padding: 10px;
        text-align: center;
    }
    .finalizarCompra > button{
        background:  #399F4C;
        
        border:1px solid #55CD6C;
        font-weight: bold;
        height: 40px;
        border-radius: 5px;
        box-shadow: 4px 4px 8px rgba(0, 0,0,0.25);
    }

    .finalizarCompra a {
        color:#071726;
    }

`;