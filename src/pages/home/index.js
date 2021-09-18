import React from 'react';
import { Container } from './styled.js'

export default function Home(){
    return(
        <Container>
            <div className="Container">
                <div className="AgrupandoConteudo">                    
                        <div className="Titulo"> A sua segurança é a nossa segurança </div>
                        <div className="Descricao"> Amaze tranquiliza o seu dia a dia. </div>   
                    <button className="Botão"> Criar Conta </button>
                </div>
                <img className="ImagemP1" src="/assets/images/Celular.png" alt=""/>
            </div>
            <div className="Container">
                <img className="ImagensFloat"  src="/assets/images/Computador.png" alt=""/>
                <div className="AgrupandoConteudo"> 
                    <div className="Titulo2"> Sua proteção a um click </div>  
                    <div className="Texto"> amaze é um serviço que busca locais com auto indice de perigo para que nossos usuarios possam 
                    tomar cuidado é estejam alerta quanto a isso </div>  
                </div>     
            </div> 
            <div className="Container"> 
                <div className="AgrupandoTextos"> 
                    <div className="Texto"> nós começamos este projeto pensando em como proteger 
                    nossos usuarios de possiveis locais perigosos </div>
                    <div className="Texto"> para que vocé esteja sempre seguro, inclusive durante 
                    seus paseios, caminhadas é pelo seu trajeto </div>
                </div>
                <img className="ImagensFloat" src="/assets/images/Ladrao.png" alt=""/>    
            </div>
            <div className="Container2">
                <div className="AgrupandoTextos"> 
                    <div className="MiniTitulo"> Beneficios </div>
                    <div className="TextBenficios"> Amaze é uma empresa que busca fornecer a melhor experiência para seus usuários, veja alguns dos nossos <span> beneficios :</span></div>
                </div>
            </div>
            <div className="Container">
                <div className="BoxInfo">
                    <img className="BoxImagens" src="/assets/images/Child.svg" alt=""/>
                    <div className="BoxTitulo"> Proteção </div>
                    <div className="BoxDesc"> Amaze te protege inclusive em seus momentos de descanso </div>
                </div>
                <div className="BoxInfo">
                    <img className="BoxImagens" src="/assets/images/LadraoBox.svg" alt=""/>
                    <div className="BoxTitulo"> Funcionamento </div>
                    <div className="BoxDesc"> Nosso serviço funciona por 24 horas por dia </div>
                </div>
                <div className="BoxInfo">
                    <img className="BoxImagens" src="/assets/images/Map.svg" alt=""/>
                    <div className="BoxTitulo"> Mapa </div>
                    <div className="BoxDesc"> Amaze é um serviço que cobre o brasil inteiro </div>
                </div>
            </div> 
        </Container>
    )
}