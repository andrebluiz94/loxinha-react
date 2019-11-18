import React from 'react';
import styled from 'styled-components';

import blondHair from '../../../img/blond-hair-blonde-boy-3117341.jpg'
import blurBoy from '../../../img/blur-boy-depth-of-field-1183266.jpg'
import adultBeuty from '../../../img/adult-beauty-close-up-2887718.jpg'
import adventureBack from '../../../img/adventure-back-view-beautiful-1995718.jpg'
import agricultureBlond from '../../../img/agriculture-blond-hair-boy-3132634.jpg'
import casualWear from '../../../img/casual-wear-facial-expression-fashion-3125080.jpg'


export default function Moletons(){
    return(
            <Section>
                <div>
                    <img src={blondHair} alt="" />
                </div>
                <div>
                    
                    <img src={blurBoy} alt="" />
                </div>
                <div>
                    <img src={ adultBeuty } alt="" />
                </div>
                <div>
                    <img src={ adventureBack } alt="" />
                    <p>T-Shirt Strip <br />
                        R$36,90</p>
                </div>
                <div>
                    <img src={ agricultureBlond } alt="" />
                    <p>Camisa Strip<br />
                        R$50,90</p>
                </div>
                <div>
                    <img src={ casualWear } alt="" />
                    <p>Double coat<br />
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