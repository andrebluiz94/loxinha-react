import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Cadlogin(){
    return (
        <Section>
            <form action="./perfil.html" method="get">
                <h1>Já sou cliente</h1>
                <input type="email" placeholder="E-MAIL" required /><br />
                <input type="password" placeholder="SENHA" required /><br />
                <span><Link to="/esqueciSenha/" >Esqueci a senha</Link></span><br />
                {/* <input type="submit" value="LOGAR" className="submit" /> */}
                <buttom className="submit"><Link to="/perfil/" >LOGAR</Link></buttom>
            </form>
        
        
        
        
            <form action="./cadastro.html" method="GET" className="cad">
                <h1>Ainda não sou<br />
                cliente
                </h1>
                <buttom className="submit"><Link to="/cadastro/" >CADASTRE-SE</Link></buttom>
            </form>
        
        </Section>
    )
}

const Section = styled.section`
    border-radius: 5px;
    border:4px solid #EDEDED;
    max-width: 59.375rem;
    margin: 20px auto 150px;
    display: flex;
    flex-wrap: wrap;
    padding: 30px ;
    justify-content: space-between;

    a{
        color: #000;
    }

    h1{
        margin: 0 10px;
        font-size: 2rem;
        align-self: flex-start;
    }

    form:nth-child(1){
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        border-right: 1px solid #333;
    }

    span{
        align-self: center;  
    }

    input{
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0;
    width: 20rem;
    border: 2px solid #333;
    margin-right: 100px;
    }

    .login input::placeholder{
        color:333;
    }
    /* links */
    .login a{
        color: #000;
    }
    /* buttom */
    .submit{
        border-radius: 10px;
        padding: 10px;
        width: 21.5rem;
        background: #399F4C;
        border: 2px solid #55CD6C;
        font-weight: bolder;
        text-align: center;
    }
    .submit:hover{
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    }
    /* Cadastre-se */

    .cad{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
    }


    /* h1 */

    .cad h1{
        text-align: center;
        align-self: center;
    }
    .submit:nth-child(2){
        margin: 0 auto;
        max-width: 100%;

    }

    @media(max-width: 480px){
        .container{
        justify-content: center;
        align-items: center;
        text-align: center;
        }
        .container h1{
            text-align: center;
        }
        .login{
            border: none;
        /*  flex-grow: 1; */
            align-items: center;
            justify-content: center;
        }
        .submit{
            margin-left: 20px;
        }
        .login input{
        /*  width: 100%; */

        }
        .cad{
            flex-grow: 1;
            align-items: center;
            justify-content: center;
        }
        .submit:nth-child(2){
            margin: 0 auto;
            max-width: 60%;

        }

    }
    @media(max-width:875px){
        .container{
            justify-content: center;
            max-width: 100%;
        }

        .login{
            border: none;
        /*  flex-direction:row ; */
        /*  flex-grow: 1;
            align-items: center;
            justify-content: center;
            margin: 0 auto; */
        }
        .login input{
            max-width:100%;
        }

    }

`;