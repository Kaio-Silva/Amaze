import {  BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages';
import BuscarRegioes from './pages/buscarRegioes';
import EsqueceuSenha from './pages/esqueceuSenha';
import HistoricoDenunc from './pages/historicoDenunc'
import cadastrar from './pages/cadastrar'
import { Login }  from './pages/login'
import Relatorio from './pages/relatorioDenuncias';
import Remover from './pages/removerUsuario';
import Denuncias from './pages/Denuncias';
import Mapa from './pages/Mapa'
import loginAdm from './pages/loginAdm';
import Error from './pages/error';

import Contatenos from './pages/contateNos';

export default function Rotes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route  path="/" exact={true} component={Home} />   
                <Route  path="/Buscar" component={BuscarRegioes} /> 
                <Route  path="/EsqueceuSenha" component={EsqueceuSenha} /> 
                <Route path="/HistoricoDenunc" component={HistoricoDenunc} />
                <Route path="/cadastro" component={cadastrar} />
                <Route path="/Login" component={Login} />
                <Route path="/Relatorio" component={Relatorio} />
                <Route path="/Remover" component={Remover} />
                <Route path="/Denuncia" component={Denuncias} />
                <Route path="/Mapa" component={Mapa} />
                <Route path="/LoginAdm" component={loginAdm} />
                <Route path="/Contatenos" component={Contatenos} />
                <Route path="/*" component={Error} />
                
            </Switch>
        </BrowserRouter> 
    )
    
}