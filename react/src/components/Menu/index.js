import React from 'react'

import { Menu, MenuResp } from './styled.js'
import { Link } from 'react-router-dom';
import Logo from '../logo'
import { Pesquisa } from '../inputs/styled.js';

export default function MenuLateral(props){
    return (
        <Menu>
            <Logo className="logo" cor="white" tamanho="medio"/>
            <Pesquisa className="MenuPesq" input="usar" tamanho=""/>
            <MenuResp src="/assets/Images/MenuBranco.svg" alt="" />
            <div className="relatorio">
                <img src="/assets/Images/DocsBranco1.png" alt=""/>
                <Link className="link" to="/Relatorio"> Relatorio Denuncias </Link>
            </div>
            <div className="remover">
                <img src="/assets/Images/Denuncias1.png" alt=""/>
                <Link className="link" to="/Remover" > Remover Usuario </Link>
            </div>
        </Menu>
    )
}