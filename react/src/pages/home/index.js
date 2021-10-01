import React from 'react';
import { Container } from './styled.js'
import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho/index'

export default function Home(props){
    return(
        <Container> 
            <Cabecalho cor="" titulo="block" input="" home="" contatenos="usar" contatenosp="usar" buscar="usar" buscarp="usar" criar="" login="usar" loginp="usar" historico="usar" histp="usar"/>
            <div className="AlinhandoPag">  
                <div className="AlinhandoConteudo">
                    <div className="AgrupandoConteudo">  
                    <img className="Imagem" src="/assets/images/Celular.png" alt=""/>                  
                            <div className="Titulo"> A sua segurança é a nossa segurança </div>
                            <div className="Descricao"> Amaze tranquiliza o seu dia a dia. </div>   
                            <Link className="link" to="/cadastro"><button className="Botão"> Criar Conta </button></Link>
                    </div>
                    <img className="ImagemP1" src="/assets/images/Celular.png" alt=""/>
                </div>
                <div className="AlinhandoConteudo">
                    <img src="/assets/images/Computador.png" alt=""/>
                    <div className="AgrupandoConteudo"> 
                        <div className="Titulo2"> Sua proteção em um click </div>  
                        <div className="Texto"> Amaze é um serviço que busca locais com auto índice de perigo, para que nossos usuários possam 
                        tomar cuidado e estejam alerta quanto a isso. </div> <hr/> 
                    </div>     
                </div> 
                <div className="AlinhandoConteudo"> 
                    <div className="AgrupandoTextos"> 
                        <div className="Texto2"> Nós começamos este projeto, pensando em como proteger 
                        nossos usuários de possiveis locais perigosos. </div><hr/> 
                        <div className="Texto2"> Para que você esteja sempre seguro, inclusive durante 
                        seus passeios, caminhadas e trajetos. </div> <hr/> 
                    </div>
                    <img src="/assets/images/Ladrao.png" alt=""/>    
                </div>
                <div className="Container2">
                    <div className="AgrupandoTextos"> 
                        <div className="MiniTitulo"> Benefícios </div>
                        <div className="TextBenficios"> Amaze é uma empresa que busca fornecer a melhor experiência para seus usuários, veja alguns dos nossos <span> benefícios :</span></div>
                    </div>
                </div>
                <div className="AlinhandoConteudo">
                    <div className="BoxInfo">
                        <img className="BoxImagens" src="/assets/images/Child.svg" alt=""/>
                        <div className="BoxTitulo"> Proteção </div>
                        <div className="BoxDesc"> Amaze te protege em todos os momentos.</div>
                    </div>
                    <div className="BoxInfo">
                        <img className="BoxImagens" src="/assets/images/LadraoBox.png" alt=""/>
                        <div className="BoxTitulo"> Funcionamento </div>
                        <div className="BoxDesc"> Nosso serviço funciona por 24 horas por dia. </div>
                    </div>
                    <div className="BoxInfo">
                        <img className="BoxImagens" src="/assets/images/Map.svg" alt=""/>
                        <div className="BoxTitulo"> Mapa </div>
                        <div className="BoxDesc"> Amaze é um serviço que cobre o brasil inteiro. </div>
                    </div>
                </div>
              </div>   
        </Container>
    )
}