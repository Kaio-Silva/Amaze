import {  BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages';
// import BuscarRegioes from './pages/buscarRegioes';
import EsqueceuSenha from './pages/esqueceuSenha';
import HistoricoDenunc from './pages/historicoDenunc'
import cadastrar from './pages/cadastrar'
import { Login }  from './pages/login'
import Denuncias from './pages/Denuncias';
import Mapa from './pages/Mapa'
import Adm from './pages/adm';
import LoginAdm from './pages/adm/loginAdm'
import Error from './pages/error';
import Criar from './components/commom/criar'
import Contatenos from './pages/contateNos';

export default function Rotes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route path="/" exact={true} component={Home} />   
                {/* <Route path="/Buscar" component={BuscarRegioes} />  */}
                <Route path="/EsqueceuSenha" component={EsqueceuSenha} /> 
                <Route path="/HistoricoDenunc" component={HistoricoDenunc} />
                <Route path="/cadastro" component={cadastrar} />
                <Route path="/Login" component={Login} />
                <Route path="/adm" component={Adm} />
                <Route path="/loginAdm" component={LoginAdm} />
                <Route path="/Denuncia" component={Denuncias} />
                <Route path="/Mapa" component={Mapa} />
                <Route path="/Criar" component={Criar} />
                <Route path="/Contatenos" component={Contatenos} />
                <Route path="/*" component={Error} />   
            </Switch>
        </BrowserRouter> 
    )
    
}