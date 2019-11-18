import React from 'react';
import Head from './Header'

import Footer from './Footer';
import styled from 'styled-components';
import { BrowserRouter as Router,
} from 'react-router-dom';
import Routers from './Routes'; 

export default function App() {
  return (
    <Router>
        <Main>
          <Head />
          <Routers />
          <Footer />

        </Main>
    </Router>
  );
}

const Main = styled.main`
  margin: 0px;
  padding: 0px;
  font-size: 1.2rem;
  font-family: 'Raleway', sans-serif;
  img{
    width: 100%;
  }
  a{
    text-decoration: none;
  }
`;


