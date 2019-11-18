import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Cadastro(){
    return(
            <Section>
                    <h2> DADOS PESSOAIS</h2>
            <form action="/" method="get" className="form">
                
                
                <div>
                    <input type="text" name="" id="" placeholder="NOME" required className="barra nome"/>
                </div>
                <div>
                    <input type="text" name="" id="" placeholder="SOBRENOME" required className="barra sobre"/>
                </div>
                <div>
                    <input type="text" name="" id="" placeholder="E-MAIL" required className="barra email" />
                </div>
                <div>
                    <input type="password" name="" id="" placeholder="SENHA" required="" className="barra senha"/>
                </div>
                <div>
                    <input type="password" name="" id="" placeholder="CONFIRME A SENHA" required="" className="barra Csenha"/> 
                </div>
                
                
                
                <div>
                    <input className="barra telefone" type="number" name="" id="" required placeholder="TELEFONE" />
                </div>
                <div>
                    <input className="barra cpf" type="number" name="" id="" placeholder="CPF" required="" minlength="11" />
                </div>
                <div className="sexo">
                        <span>Sexo:</span><br />
                        <input type="radio" name="sex" id="" required="" className="sexy" /><label>Masculino</label>
                        <input type="radio" name="sex" id="" required="" className="sexy" /><label>Feminino</label>
                </div>
                <div>
                        <p><strong>Data de Nascimento:</strong></p>
                        <input className="barra Dnascimento" type="date" name="" id="" placeholder="DATA DE NASCIMENTO" required="" />
                </div>
                <h2>Endereço</h2>
                <div>
                    <input className="barra cep" type="number" name="" id="" placeholder="CEP" min="0" max="99999999999" />
                </div>
                <div>
                    <input className="barra estado" type="text" name="" id="" placeholder="ESTADO" />
                </div>
                <div>
                    <input className="barra bairro" type="text" name="" id="" placeholder="BAIRRO" />
                </div>
                <div>
                    <input className="barra cidade" type="text" name="" id="" placeholder="CIDADE" />
                </div>
                <div>
                    <input type="number" className="barra num" name="" id="" placeholder="NUMERO" />
                </div>
                <div>
                    <input className="barra comp" type="text" name="" id="" placeholder="COMPLEMENTO" /><br />
                </div>
                <div className="sub">
                   {/*  <input type="submit" value="FINALIZAR CADASTRO" className="barra submit"  /> */}
                    <button className="submit"><Link to="/">Finalizar Cadastro</Link></button>
                </div>
            </form>
            </Section>
    )
}

const Section = styled.section`
    max-width: 1000px;
    margin: 20px auto 150px;
    border:4px solid #EDEDED;

    a{
        color: #000;
    }

    .form{
        display: flex;
        flex-wrap: wrap;
        padding: 20px; 
    }

    .barra{
        margin:10px 5px;
        width: 250px;
        height: 15px;
        padding: 10px;
        border-radius: 5px;
        border:1px solid #071726;
    }

    .nome{
        width: 350px;
    }
    .sobre{
        width: 350px;
    }
    .email{
        width: 735px;
    }
    .senha{
        width: 350px;
    }
    .Csenha{
        width: 350px;
    }
    .Dnascimento{
        width: 350px;
    }
    .telefone{
        width: 350px;
    }
    .cpf{
        width: 350px;
    }
    .sub{
        flex-basis:700px;
    }
    .sexo{
        width: 375px;
        border-radius: 5px;
        border:1px solid #071726;
        margin-right: 10px;
        align-self: center;
        }
    .form h2{
        width: 700px;
    }
    .cep{
        width: 350px;
    }
    .estado{
        width: 350px;
    }
    .bairro{
        width: 350px;
    }
    .cidade{
        width: 350px;
    }
    .num{
        width: 350px;
    }
    .comp{
        width: 350px;
    }
    .submit{
        font-weight: bold;
        height: 40px;
        background: #399F4C;
        border:1px solid #55CD6C;
        box-shadow: 4px 4px 8px #0717262f;
        width:250px;
        border-radius:5px;
        margin-left: 50px;
    }
    .submit a{
        padding:25px;
    }

    .submit:hover{
        background:#008818
    }
    @media(max-width: 1000px){
        .barra{
            width: 290px;
        }
        .sexo{
            width: 315px;
        }
    }

    @media(max-width: 480px){

        .barra{
            width: 290px;
        }
        .sexo{
            width: 315px;
        }
    }
`;