import {  BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages';
import BuscarRegioes from './pages/buscarRegioes';
import EsqueceuSenha from './pages/esqueceuSenha';
import HistoricoDenunc from './pages/historicoDenunc'
import cadastrar from './pages/cadastrar'
import {Login} from './pages/login'

export default function Rotes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route  path="/"  exact={true}  component={Home} />   
                <Route  path="/Buscar" component={BuscarRegioes} /> 
                <Route  path="/EsqueceuSenha" component={EsqueceuSenha} /> 
                <Route path="/HistoricoDenunc" component={HistoricoDenunc} />
                <Route path="/cadastrar" component={cadastrar} />
                <Route path="/Login" component={Login} />
            </Switch>
        </BrowserRouter> 
    )
}