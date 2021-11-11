import { Container } from './styled'
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function P6(props){
    const[ denuncia, setDenuncia] = useState(props.item)
    console.log(denuncia)

    return(props.bool) ?(

            <Container>
             <div className="abox">
                <div className="Cabecalho">
                    <div className="txt">Deununcias, Jardim Colonial</div>
                    <div className="x"><button onClick={() => props.func(false)}><img src="/assets/images/Fechar 5.png" alt=""/></button></div>
                </div>
              
                <div className="denuncs" id="style-2">
                        <div className="b1">
                            {denuncia.map( item =>
                               <div className="alinhar"> 
                                    <div className="bloco" id="lado">
                                        <div className="titulob">{item.ds_rua}</div>
                                        <div className="aval"><img src="/assets/images/aval.png" alt=""/></div>
                                        <div className="descr">{item.ds_tipo_denuncia}</div>
                                        <div className="date">{item.dt_denuncia}</div>
                                        <div className="botao"><Link to="/Denuncia"><button>Saiba Mais</button></Link></div>
                                        <div className="linha2"></div>
                                    </div>
                                    <div className="linha"></div>
                                    
                                </div> 
                            )}
                        </div>
                    </div>
        
                </div>
                { props.children}
        
            </Container>
            ):""
        } 
