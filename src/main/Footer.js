import React from 'react';
import styled from 'styled-components';
import  wpp  from '../img/whatsapp 1wpp.png';
import  hsbc  from '../img/VectorHSBC.svg';
import  bitCoin  from '../img/VectorBITcoin.svg';
import  visa  from '../img/Vectorvisa.svg';



export default function Footer(){
    return(
        <Foot>
            <section>
                <h1>RECEBA NOSSAS NOVIDADES</h1>
                <input type="text" name={""} id={""} placeholder="E-mail" />
            </section>
            <section>
                <h1>CONTATO</h1>
                <p>Alguma dúvida ou sugestão <br /> pode chamar</p>
                <img src={wpp} alt={""} /><br /><span>(21)9 5684-2846</span>
                <br />
            </section>
            <section>
                <h1>FORMAS DE PAGAMENTO</h1>
                <img src={ hsbc }  alt={""}/>
                <img src={ bitCoin }  alt={""}/>
                <img src={ visa } alt={""} />
            </section>
        </Foot>
    )
}

const Foot = styled.footer`
    margin:0 auto;
    max-width: 1366px;
    color:white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #071726;
    align-items: flex-start;

    section{
        flex: 1 1 300;
        margin: 10px;
        
    }
    
    section:nth-child(2) img{
        width:10%
    }
    section:nth-child(3) img{
        width:20%
    }

    section h1{
        font-size: 1.2rem;
        padding: 10px;
    }
    input{
        padding: 10px;
        margin: 0 10px;
        min-width: 275px;
        min-height: 35px;
        border-radius: 10px;
        color: #333;
        box-sizing: border-box;
        border: 2px solid rgba(0, 0, 0, 1);
    }
    p{
        margin: 0 0 10px 10px;
    }

    span{
        margin: 10px;
        font-size: 1.5rem;
    }
`;