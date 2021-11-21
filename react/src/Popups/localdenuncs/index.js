import { Container } from './styled'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function P6(props){
    const[ denuncia, setDenuncia] = useState([{}])

    function listar(){
        setDenuncia(props.item)
    }

    useEffect(()=>{
     listar()
    },[props.item])

    return(props.bool) ?(

            <Container>
             <div className="abox">
                <div className="Cabecalho">
                    <div className="txt">Denuncias:</div>
                    <div className="x"><button onClick={() => props.func(false)}><img src="/assets/images/Fechar 5.png" alt=""/></button></div>
                </div>
              
                <div className="denuncs" id="style-2">
                        <div className="b1">
                            {denuncia.map( item =>
                               <div className="alinhar"> 
                                    <div className="bloco" id="lado">
                                        <div className="titulob">{item.ds_rua}</div>
                                        <div className="aval"><img src={item.qtd_avaliacao === 1 ? "/assets/Images/ESTRELA-1.svg" : 
                                                                                             item.qtd_avaliacao === 2 ? "/assets/Images/ESTRELA-2.svg" :
                                                                                                                      item.qtd_avaliacao === 3 ? "/assets/Images/ESTRELA-3.svg" :
                                                                                                                                                  item.qtd_avaliacao === 4 ? "/assets/Images/ESTRELA-4.svg" :
                                                                                                                                                                             item.qtd_avaliacao >= 5 ? "/assets/Images/ESTRELA-5.svg" : "/assets/Images/ESTRELA-0.svg"} alt="" /></div>
                                        <div className="descr">{item.ds_tipo_denuncia}</div>
                                        <div className="date">{item.dt_denuncia}</div>
                                        <div className="botao">
                                        <Link to={{
                                            pathname:"/Denuncia",
                                            state: item
                                        }}>
                                                <button>Saiba Mais</button>
                                            </Link>
                                        </div>
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
