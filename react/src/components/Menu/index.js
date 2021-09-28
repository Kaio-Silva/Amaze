import React from 'react'

import { Menu } from './styled.js'
import { Link } from 'react-router-dom';
import Logo from '../logo'

export default function MenuLateral(props){
    return (
        <Menu>
            <Logo cor="white"/>
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