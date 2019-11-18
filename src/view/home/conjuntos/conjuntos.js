import React from 'react'
import styled from 'styled-components'

import blackView from "../../../img/back-view-bucket-hat-hairstyle-2464090.jpg"
import accessoriesFashion from "../../../img/accessories-fashion-fashionable-1687719lancamentos.jpg"
import adultCasual from "../../../img/adult-casual-contemporary-1898866.jpg"
import blondHair from "../../../img/blonde-hair-blouse-bright-720606.jpg"
import attractiveBeauty from "../../../img/attractive-beautiful-beauty-1070058.jpg"
import adultBeauty from "../../../img/adult-beautiful-beauty-1449667.jpg" 

export default function Conjuntos(){
    return(
            <Section>
                <div>
                    <img src={ blackView } alt="" />
                </div>
                <div>
                    <img src={ accessoriesFashion } alt="" />
                </div>
                <div>
                    <img src={ adultCasual } alt="" />
                </div>
                <div>
                    <img src={ blondHair } alt="" />
                    <p>T-Shirt branca<br />
                        R$36,90</p>
                </div>
                <div>
                    <img src={ attractiveBeauty } alt="" />
                    <p>Camisa coca-cola<br />
                        R$50,90</p>
                </div>
                <div>
                    <img src={ adultBeauty }alt="" />
                    <p>T-Shirt preta<br />
                        R$59,90</p>
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