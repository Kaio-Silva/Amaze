import React from 'react'
import { Container, Conteudo } from './styled'
import MenuLateral from '../../components/commom/Menu';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Relatorio from './relatorioDenuncias'
import Remover from './removerUsuario'


export default function Adm(){
    return(
        <Container>
            <BrowserRouter>
                <MenuLateral/>
                <Conteudo>
                        <Switch>
                            <Route path="/adm/realtorio" exact={true} component={Relatorio} />
                            <Route path="/adm/remover" exact={true} component={Remover} />
                        </Switch>
                </Conteudo>
            </BrowserRouter>
        </Container>
    )
}