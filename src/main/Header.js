import React from "react";
import styled from  'styled-components';
import { Link } from 'react-router-dom'
import usuarioSvg from '../img/Vectorusuario.svg'
import cartSvg from '../img/cart.svg'
 

export default function Header() {
    return(
        <Head>
            <Section>
                <Link to="/"><span>LoXinha</span></Link>
                <label><input type="search" name="" id="" placeholder="O que seu coração deseja?"/></label>
                <div>
                    <Link to="/Cadlogin/" ><img src={usuarioSvg} alt="Acessar conta ou se cadastrar" /></Link>
                    <Link to="/Cart/" ><img src={cartSvg} alt="Acessar o carrinho" /></Link>
                </div>
                
            </Section>
            
                <Nav>
                    <ul>
                        <li><Link to="/lancamentos/" >Lançamentos |</Link></li>
                        <li><Link to="/moletons/" >Moletons   |</Link></li>
                        <li><Link to="/camisa/" >Camisa   |</Link></li>
                        <li><Link to="/conjuntos/" >Conjuntos |</Link></li>
                    </ul>   
                </Nav> 
          
        </Head>
    );
}

const Head = styled.header`
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    max-width: 1366px;
    background: #071726;
    align-items: center;
    justify-content: space-between;

`;

const Section = styled.section`
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    flex-basis: 1366px;
    align-items: center;
    justify-content: space-between;

    span{
        font-size: 3rem;
    }

    a {
        
        color:white;
      /*   padding: 10px; */
        text-decoration: none;
    }
    
    a:nth-child(1){
        font-weight: 768;
        font-size: 1.2rem;
    }

    a:hover {
        color: #9CA4A6;
        font-weight: 768;
    }

    input {
        height: 35px;
        padding: 15px;
        border-radius: 20px;
        border:1px solid #333;
        background: #ededed url("https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png") no-repeat 5px center;
        padding: 9px 10px 9px 32px;
        flex: 1;
    }



    input::placeholder{
        color: #333;
        padding: 10px;
    }

    label{
        display:flex;
        align-items: center;
        flex:1;
        margin:0 150px;
        background: black;
    }

    div img{
        max-width: 50%;
    }
`;

const Nav = styled.nav`
    display: flex;
    flex-basis: 1366px;
    background: #333;
    min-height: 2.5rem;
    align-items:center;
    ul{
        display: flex;
        flex-wrap: wrap;
        list-style: none;
    
    }
    a {
        color:white;
        font-size: 2rem;  
        padding: 12px;
        font-size: 1rem;
        font-weight: 900;
        text-decoration: none;
    }
    a:hover{
        background: white;
        color: #071726;
    }

    li{
        
    }
`;