import React, { useState } from 'react'

import { Menu, MenuResp } from './styled.js'
import { Link } from 'react-router-dom';
import Logo from '../logo'
import { Pesquisa } from '../../styled/inputs.js';
import Comp from '../../../Popups/menu'

export default function MenuLateral(props){
    const[pop,SetPop] = useState(false)
    return (
        <Menu>
            <Logo className="logo" cor="white" tamanho="medio"/>
            <Pesquisa className="MenuPesq" input="usar" tamanho=""/>
            <div><button onClick={() => SetPop(true)}><MenuResp src="/assets/Images/MenuBranco.svg" alt="" /></button></div>
            <div className="relatorio">
                <img src="/assets/Images/DocsBranco1.png" alt=""/>
                <Link className="link" to="/Relatorio"> Relatorio Denuncias </Link>
            </div>
            <div className="remover">
                <img src="/assets/Images/Denuncias1.png" alt=""/>
                <Link className="link" to="/Remover" > Remover Usuario </Link>
            </div>
            <Comp trigger={pop} setTrigger={SetPop}   background="" home="usar" login="usar" />
        </Menu>
    )
}