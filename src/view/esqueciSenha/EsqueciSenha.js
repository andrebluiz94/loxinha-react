import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function EsqueciSenha(){
    return(
      
        
        <Section>
           
            <form className="form">
                <h1>Recuperar senha:</h1>
                <input type="text" name="" id="" placeholder="DIGITE SEU E-MAIL" required />
                <input type="password" name="" id="" placeholder="NOVA SENHA" required />
                <input type="password" name="" id="" placeholder="CONFIRME A SENHA" required />
                {/* <input type="submit" value="FINALIZAR" /> */}
                <button className="submit"><Link to="/cadlogin/">Recuperar!</Link></button>
            </form>
        </Section>
               
        
    )
}

const Section = styled.section`
    margin: 20px auto 150px;
    max-width: 450px;
    margin: 50px auto;
    border:4px solid #EDEDED;
    align-items: center;

    
    a{
        color: #000;
    }
.form{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    margin: 40px 0;
}
.form input, .submit{
    width: 200px;
    margin: 5px;
    padding: 5px;
    height: 20px;
    border:1px solid #071726;
    border-radius: 5px;
    box-shadow: 4px 4px 8px rgba(0, 0,0, 0.25);
}
.submit{
    height: 30px;
    text-align: center;
    border-radius: 10px;
    background: #399F4C;
    border: 2px solid #55CD6C;
    font-weight: bolder;
    box-shadow: 4px 4px 8px rgba(0, 0,0, 0.25);
}



`;