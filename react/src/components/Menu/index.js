import React from 'react'

import { Menu } from './styled.js'
import Logo from '../logo'

export default function MenuLateral(){
    return (
        <Menu>
            <Logo cor="white"/>
            <div className="relatorio">
                <img src="/assets/Images/DocsBranco1.png" alt=""/>
                <div className="ABA a">
                    <div className="aba1"> Relatorio </div>
                    <div className="aba2"> Denuncias </div>
                </div>
            </div>
            <div className="remover">
                <img src="/assets/Images/Denuncias1.png" alt=""/>
                <div className="aba a">
                    <div className="ABA1"> Remover </div>
                    <div className="ABA2"> Usuario </div>
                </div>
            </div>
        </Menu>
    )
}