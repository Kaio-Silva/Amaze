import React from 'react'
import { Container, Conteudo } from './styled'
import MenuLateral from '../../components/commom/Menu';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Relatorio from './relatorioDenuncias'
import Remover from './removerUsuario'
import HomeAdm from './home'


export default function Adm(){
    return(
        <Container>
            <BrowserRouter>
                <MenuLateral home="true"/>
                <Conteudo>
                        <Switch>
                            <Route path="/adm/relatorio" exact={true} component={Relatorio} />
                            <Route path="/adm/remover" exact={true} component={Remover} />
                            <Route path="/adm" exact={true} component={HomeAdm} />
                        </Switch>
                </Conteudo>
            </BrowserRouter>
        </Container>
    )
}