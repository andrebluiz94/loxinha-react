import React from 'react';
import { Route, Switch } from "react-router-dom";


import cadlogin from '../view/Cadlogin/Cadlogin';
import cart from '../view/Carrinho/Cart';
import Centro from '../view/home/Centro';
import EsqueciSenha from '../view/esqueciSenha/EsqueciSenha'
import Cadastro from '../view/Cadastro/Cadastro'
import Perfil from '../view/perfil/Perfil'
import Endereco from '../view/perfil/Endereco';
import EditEnd from '../view/perfil/EditEnd';
import EditCad from '../view/perfil/EditCad'
import Lancamentos  from '../view/home/lancamentos/lancamentos'
import Moletons from '../view/home/moletons/moletons'
import Camisa from '../view/home/camisa/Camisa'
import Conjuntos from "../view/home/conjuntos/conjuntos"
import Compras from "../view/perfil/compras"

export default function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={ Centro } />
            <Route path="/Cadlogin/" exact component={cadlogin} />
            <Route path="/Cart/" exact component={cart} /> 
            <Route path="/esqueciSenha/" exact component={EsqueciSenha} />
            <Route path="/cadastro/" exact component={Cadastro} />
            <Route path="/perfil/" exact component={ Perfil } />
            <Route path="/endereco/" exact component={ Endereco } />
            <Route path="/editEnd/" exact component={ EditEnd } />
            <Route path="/editCad/" exact component={ EditCad } />
            <Route path="/lancamentos/" exact component={ Lancamentos } />
            <Route path="/moletons/" exact component={ Moletons } />
            <Route path="/camisa/" exact component={ Camisa } />
            <Route path="/conjuntos/" exact component={ Conjuntos } />
            <Route path="/compras/" exact component={ Compras } />
        </Switch>
    )
}