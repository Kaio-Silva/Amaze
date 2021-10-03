
import { Container } from './styled'
import Logo from '../../components/commom/logo';

export default function criarDenunc(props){
    
    return(props.value) ?(
        <Container>
          <div className="abox">
             <div className="cabecalho">
                 <div className="logo"><Logo cor="verde" tamanho="medio"/></div>
                 <div className="ld"><button onClick={() => props.func(false)}><img src="/assets/images/Fechar 5.png" alt=""/></button></div>
             </div>


             <div className="forms">

                   <div className="titulo-form">Criar Denúncia</div>

                   <div className="form1">
                      <label><input placeholder="Digite o nome da rua" className="f1"/></label> 
                  </div> 

                  <div className="form2">
                      <label><input placeholder="Digite o nome do bairro" className="f2"/></label> 
                  </div> 

                  <div className="teext">
                      <label><textarea placeholder="Descreva a ocorrência" className="txt"/></label> 
                  </div> 

             </div>

             <div className="checks">
                 <div className="l1">
                   <label> <input className="ty" name="actmnt" type="radio" value="Furto" />Furto </label>
                   <label> <input className="ty" name="actmnt" type="radio" value="Latrocínio" /> Latrocínio  </label>
                   <label> <input className="ty" name="actmnt" type="radio" value="Homicídio" />Homicídio </label>
                   <label> <input className="ty" name="actmnt" type="radio" value="Sequestro" />Sequestro </label>
                </div>


                <div className="l2">
                   <label> <input className="ty" name="actmnt" type="radio" value="Feminicídio" />Feminicídio </label>
                   <label> <input className="ty" name="actmnt" type="radio" value="Tráfico" /> Trafico  </label>
                   <label> <input className="ty" name="actmnt" type="radio" value="Estupro" />Estupro </label>
                </div>


                <div className="botao">
                    <button>Concretizar Denúncia</button>
                </div>


             </div>


             <div className="taxas">
                <div className="tituloco">Taxa de perigo</div>

                <div className="cores">

                    <div className="bloco">
                        <div className="ajustarTaxas">
                            <div className="cor"></div>
                            <div className="indice">Perigoso</div>
                        </div>    
                        <div className="qtddenunc">+20 denúncias</div>
                    </div>

                    <div className="bloco">
                        <div className="ajustarTaxas">
                            <div className="cor2"></div>
                            <div className="indice">Cuidado</div>
                        </div>    
                        <div className="qtddenunc">+10 denúncias</div>
                    </div>

                    <div className="bloco">
                        <div className="ajustarTaxas">
                            <div className="cor3"></div>
                            <div className="indice">Alerta</div>
                        </div>    
                        <div className="qtddenunc">+5 denúncias</div>
                    </div>

                    <div className="bloco">
                        <div className="ajustarTaxas">
                            <div className="cor4"></div>
                            <div className="indice">Passivo</div>
                        </div>    
                        <div className="qtddenunc">+Sem denúncias</div>
                    </div>

                </div>


             </div>



          </div>



          { props.children}
        </Container>
    ) : "";
}  