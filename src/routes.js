import {  BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages';

export default function Rotes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route  path="/"  exact={true}  component={Home} />   
            </Switch>
        </BrowserRouter> 
    )
}