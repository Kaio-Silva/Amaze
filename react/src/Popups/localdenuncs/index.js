import { Container } from './styled'
import { Link } from 'react-router-dom';


export default function p6(props){
    
    return(props.bool) ?(

            <Container>
             <div className="abox">
                <div className="Cabecalho">
                    <div className="txt">Deununcias, Jardim Colonial</div>
                    <div className="x"><button onClick={() => props.func(false)}><img src="/assets/images/Fechar 5.png" alt=""/></button></div>
                </div>
              
              <div className="denuncs" id="style-2">
                <div className="b1">
                    <div className="bloco" id="lado">
                        <div className="titulob">{}</div>
                        <div className="aval"><img src="/assets/images/aval.png" alt=""/></div>
                        <div className="descr">Latrocínio</div>
                        <div className="date">27/10/2021</div>
                         <div className="botao"><Link to="/Denuncia"><button>Saiba Mais</button></Link></div>
                    </div>
        
                    <div className="linha"></div>
        
                    <div className="bloco" id="lado2">
                        <div className="titulob">Rua júlio Silvino</div>
                        <div className="aval"><img src="/assets/images/aval.png" alt=""/></div>
                        <div className="descr">Latrocínio</div>
                        <div className="date">27/10/2021</div>
                        <div className="botao">
                            <Link to="/Denuncia">
                                <button>Saiba Mais</button>
                            </Link>
                        </div>
                    </div>
                </div>
        
        
                <div className="linhah"></div>
        
        
                <div className="b2">
                <div className="bloco" id="lado3">
                        <div className="titulob">Rua júlio Silvino</div>
                        <div className="aval"><img src="/assets/images/aval.png" alt=""/></div>
                        <div className="descr">Latrocínio</div>
                        <div className="date">27/10/2021</div>
                        <div className="botao"><Link to="/Denuncia"><button>Saiba Mais</button></Link></div>
                    </div>
        
                    <div className="linha2"></div>
        
                    <div className="bloco">
                        <div className="titulob">Rua júlio Silvino</div>
                        <div className="aval"><img src="/assets/images/aval.png" alt=""/></div>
                        <div className="descr">Latrocínio</div>
                        <div className="date">27/10/2021</div>
                        <div className="botao"><Link to="/Denuncia"><button>Saiba Mais</button></Link></div>
        
                    </div>
        
                </div>
        
                <div className="linhah"></div>
        
        
                <div className="b1">
                    <div className="bloco" id="lado4">
                        <div className="titulob">Rua júlio Silvino</div>
                        <div className="aval"><img src="/assets/images/aval.png" alt=""/></div>
                        <div className="descr">Latrocínio</div>
                        <div className="date">27/10/2021</div>
                        <div className="botao"><Link to="/Denuncia"><button>Saiba Mais</button></Link></div>
                    </div>
        
                    <div className="linha"></div>
        
                    <div className="bloco">
                        <div className="titulob">Rua júlio Silvino</div>
                        <div className="aval"><img src="/assets/images/aval.png" alt=""/></div>
                        <div className="descr">Latrocínio</div>
                        <div className="date">27/10/2021</div>
                        <div className="botao"><Link to="/Denuncia"><button>Saiba Mais</button></Link></div>
                    </div>
                </div>
        
        
                <div className="linhah"></div>
        
        
                <div className="b2">
                <div className="bloco" id="lado5">
                        <div className="titulob">Rua júlio Silvino</div>
                        <div className="aval"><img src="/assets/images/aval.png" alt=""/></div>
                        <div className="descr">Latrocínio</div>
                        <div className="date">27/10/2021</div>
                        <div className="botao"><Link to="/Denuncia"><button>Saiba Mais</button></Link></div>
                    </div>
        
                    <div className="linha2"></div>
        
                    <div className="bloco">
                        <div className="titulob">Rua júlio Silvino</div>
                        <div className="aval"><img src="/assets/images/aval.png" alt=""/></div>
                        <div className="descr">Latrocínio</div>
                        <div className="date">27/10/2021</div>
                        <div className="botao"><Link to="/Denuncia"><button>Saiba Mais</button></Link></div>
                    </div>
                </div>
        
                </div>
        
                </div>
                { props.children}
        
            </Container>
            ):""
        } 
