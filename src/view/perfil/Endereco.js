import React from 'react';
import styled from 'styled-components';

import Menu from './menu/menu';
import EditEndereco from './selectEndereco/SelectEndereco';


export default function Endereco(){
    return(
            <Section className="container">
                <Menu />
                <div><h2 className="h2"> Selecionar endereço</h2></div>
                    <EditEndereco />
            </Section>
             
    )
}

const Section = styled.section`
    max-width: 950px;
    margin: 50px auto;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #ccc;
    padding: 10px;

    h1 {
        flex-basis: 950px;
    }

/* endereço */

    .h2{
        flex-basis: 600px;
        display:flex;
        height: 75px;
    }

 
`;