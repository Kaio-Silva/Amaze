import {  BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages';
import BuscarRegioes from './pages/buscarRegioes';
import EsqueceuSenha from './pages/esqueceuSenha';
import HistoricoDenunc from './pages/historicoDenunc'

export default function Rotes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route  path="/"  exact={true}  component={Home} />   
                <Route  path="/Buscar" component={BuscarRegioes} /> 
                <Route  path="/EsqueceuSenha" component={EsqueceuSenha} /> 
                <Route path="/HistoricoDenunc" component={HistoricoDenunc} />
            </Switch>
        </BrowserRouter> 
    )
}