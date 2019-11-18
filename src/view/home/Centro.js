import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import  destaque1  from "../../img/bonFire.jpg";
import  destaque2  from "../../img/blond-hair-blonde-boy-3117341.jpg";
import  destaque3  from "../../img/blur-boy-depth-of-field-1183266.jpg";
import  img1  from "../../img/adult-beautiful-beauty-2887879.jpg";
import  img4  from "../../img/adult-black-coat-194917.jpg";
import  img2  from "../../img/adult-beauty-close-up-2887718.jpg";
import  img3  from "../../img/casual-wear-facial-expression-fashion-3125080.jpg";
import  img5  from "../../img/blur-close-up-depth-of-field-458649.jpg";
import  img6  from "../../img/casual-cute-elegant-428338casual-conjunto.png";

export default function Centro(){
    return (
        <Aside>
            
                {/* <!-- Destaque --> */}
                    <Section>
                       <Link to="compras"><img src={destaque1} alt="Destaque 1" /></Link>
                    </Section>
                    <Section>
                        <img src={destaque2} alt=" Destaque 2" />
                    </Section>
                    <Section>
                        <img src={destaque3} alt="destaque 3" />
                    </Section>
                {/*  <!-- Geral --> */}
                    <Section>
                        <img src={img1} alt="" />
                        <br /><span>
                                CASACO <br />
                                29.90
                        </span>
                    </Section>
                    <Section>
                        <img src={img2} alt="" />
                        <span>
                                CASACO <br />
                                29.90
                        </span>
                    </Section>
                    <Section>
                            <img src={img3} alt="" />
                            <p>
                                    CASACO <br />
                                    29.90
                            </p>
                    </Section>
                    <Section>
                                <img src={img4} alt="" />
                                <p>
                                        CASACO <br />
                                        29.90
                                </p>
                    </Section>
                    <Section>
                                <img src={img5} alt="" />
                                <p>
                                    CASACO <br />
                                    29.90
                                </p>
                    </Section>
                    <Section>
                        <img src={img6} alt="" />
                            <p>
                                CASACO <br />
                                29.90
                            </p>
                    </Section>        
                
        </Aside>
    )
}


const Aside = styled.aside`
    display: flex;
    max-width: 1300px;
    margin: 0px auto;
    flex-wrap: wrap;
    text-align: center;
    background-color: rgb(252, 245, 237);


    section{
        padding:10px 5px;
    }
    section:nth-child(-n+3){
        flex: 2 0 400px;
    }

    section:hover{
        border: 4px 4px 10px #000;
    }

    section:nth-child(1) img{
    border-bottom: 25px solid #333;
    }
    section:nth-child(2) img{
    border-bottom: 25px solid #071726;
    }

    section:nth-child(3) img{
    border-bottom: 25px solid #9CA4A6;
    }

    section:nth-child(n+4){
    flex: 1 0 270px;
    }
    section >a,img:hover{
        box-shadow: 4px 4px 10px rgba(0,0,0,0.25);
    }
    section:nth-child(n+8){
    flex: 1 0 500px;
    }

    @media(max-width: 1200px){
            section:nth-child(-n+3){
            flex: 1 0 333px;
        }
    }
`;

const Section = styled.section`

`;

