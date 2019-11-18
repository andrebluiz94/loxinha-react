import React from 'react'
import styled from 'styled-components'

import adultAfro from '../../../img/adult-afro-cool-991509 1.png'
import accessoriesFashio from "../../../img/accessories-fashion-fashionable-1687719lancamentos.jpg"
import adultCasual from "../../../img/adult-casual-contemporary-1898866.jpg"
import smokeCouple from "../../../img/affection-colored-smoke-couple-2536576 1.png"
import armBoy from "../../../img/arm-boy-fashion-2205839.png"

export default function Camisa(){
    return(

        <Section >
            <div>
                <img src={ adultAfro }alt="" />
            </div>
            <div>
                <img src={ accessoriesFashio } alt="" />
            </div>
            <div>
                <img src={ adultCasual }alt="" />
            </div>
            <div>
                <img src={ smokeCouple } alt="" />
                <p>Double T-Shirt branca<br />
                    R$36,90</p>
            </div>
            <div>
                <img src={ armBoy } alt="" />
                <p>Camisa New cool<br />
                    R$50,90</p>
            </div>
        
    </Section>

    )
}

const Section = styled.section`

display: flex;
    max-width: 1300px;
    margin: 0px auto;
    flex-wrap: wrap;
    text-align: center;
    background-color: rgb(252, 245, 237);

    div{
        padding:10px 5px;
    }
    /* Destaque primeira linha */
    div:nth-child(-n+3){
        flex: 1 0 333px;
    }
    div:nth-child(1) img{
        border-bottom: 25px solid #333;
    }
    div:nth-child(2) img{

        border-bottom: 25px solid #071726;
    }
    div:nth-child(3) img{
        border-bottom: 25px solid #9CA4A6;
    }

    /*  */

    div:nth-child(n+4) {
        flex: 1 0 270px;
    }

`;