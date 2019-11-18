import React from 'react'
import styled from 'styled-components'


import bonFire from '../../../img/bonFire.jpg'
import blondHair from '../../../img/blond-hair-blonde-boy-3117341.jpg'
import blurBoy from '../../../img/blur-boy-depth-of-field-1183266.jpg'
import blurCasual from '../../../img/blur-casual-depth-of-field-2589653lancamentos.jpg'
import adolescentAdver from '../../../img/adolescent-advertisement-aesthetic-2887775lancamentos.jpg'
import accessoriesFashion from '../../../img/accessories-fashion-fashionable-1687719lancamentos.jpg'
import adultBlack from '../../../img/adult-black-coat-194917.jpg'

export default function Lancamentos(){
    return(
        <Section>
            <div>
                <img src={ bonFire } alt="Primeiro destaques" />
            </div>
            <div>
                <img src={ blondHair } alt="" />
            </div>
            <div>
                <img src={ blurBoy } alt="" />
            </div>
            <div>
                <img src={ blurCasual } alt="" />
                <p>T-Shirt branca<br />
                    R$36,90</p>
            </div>
            <div>
                
                <img src={accessoriesFashion} alt="" />
                <p>Camisa coca-cola<br />
                    R$50,90</p>
            </div>
            <div>
                <img src={adolescentAdver} alt="" />
                <p>T-Shirt preta<br />
                    R$59,90</p>
            </div>
            <div>
                <img src={adultBlack} alt="" />
                <p>Conjunto de Halloween <br />
                    R$60,90</p>
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