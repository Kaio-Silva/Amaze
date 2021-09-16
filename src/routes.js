import {  BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages';
import BuscarRegioes from './pages/buscarRegioes';

export default function Rotes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route  path="/"  exact={true}  component={Home} />   
                <Route  path="/Buscar" component={BuscarRegioes} />  
            </Switch>
        </BrowserRouter> 
    )
}