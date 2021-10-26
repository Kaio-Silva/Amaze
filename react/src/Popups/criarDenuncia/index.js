import { Container } from './styled'
import Logo from '../../components/commom/logo';
import { Padrao, Textarea } from '../../components/styled/inputs.js';
import { useState } from 'react';
import Api from '../../services/api'

const api = new Api()

export default function P4(props){
    const[cordinates,setCordinates] = useState([])
    const[bairro,setBairro] = useState('')
    const[ocorrencia,setOcorrencia] = useState('')
    const[loc,setLoc] = useState('')
    const[tipo,setTipo] = useState('')
    const[avaliacao,setAvaliacao] = useState(9)
    const[id,setId] = useState(2)
    const[qtdreporte,seQtdReporte] = useState(12)
    let data = new Date();
  
    let lat = cordinates.Latitude
    let lng = cordinates.Longitude

    async function Inserir(){
        let r = await api.inserirDENU(id,lat,lng,data,ocorrencia,qtdreporte,loc,bairro,avaliacao,tipo)
    }


    async function Tipagem(){
        let a = await (document.querySelector('input[name=actmnt]:checked').value)
        setTipo(a)
      }
      

  async function geo(){
    let r = await api.Geocoding(loc);

    let insert= 
      {
       Latitude: r[0].geometry.lat,
       Longitude: r[0].geometry.lng
     
    }

    setCordinates(insert)
    Tipagem()
    Inserir()
    console.log(lat)
    console.log(lng)
    console.log(cordinates)
    console.log(bairro)
    console.log(loc)
    console.log(ocorrencia)
    console.log(tipo)
    console.log(avaliacao)
    console.log(id)
    console.log(qtdreporte)
  }
  
    return(props.value) ?(
        <Container>
          <div className="abox">
             <div className="cabecalho">
                 <div className="logo"><Logo cor="verde" tamanho="medio"/></div>
                 <div className="ld"><button onClick={() => props.func(false)}><img src="/assets/images/Fechar 5.png" alt=""/></button></div>
             </div>


             <div className="forms">

                   <div className="titulo-form">Criar Denúncia</div>

                   <div className="inputs">
                      <Padrao onChange={ e => setLoc(e.target.value)} className="ajustarInput" placeholder="Digite o nome da rua" cor="verde"tamanho="100%"/>
                  </div> 

                  <div className="inputs">
                      <Padrao onChange={ e => setBairro(e.target.value)} className="ajustarInput" placeholder="Digite o nome do bairro" cor="verde"tamanho="100%"/>
                  </div> 

                  <div className="inputs">
                      <Textarea onChange={ e => setOcorrencia(e.target.value)}  placeholder="Descreva a ocorrência" cor="verde"tamanho="100%"/>
                  </div> 

             </div>

             <div className="checks">
                 <div className="l1">
                   <label> <input className="ty" name="actmnt" type="radio" value="Latrocínio" /> Latrocínio  </label>
                   <label> <input className="ty" name="actmnt" type="radio" value="Homicídio" />Homicídio </label>
                   <label> <input className="ty" name="actmnt" type="radio" value="Sequestro" />Sequestro </label>
                </div>


                <div className="l2">
                   <label> <input className="ty" name="actmnt" type="radio" value="Furto" />Furto </label>
                   <label> <input className="ty" name="actmnt" type="radio" value="Feminicídio" />Feminicídio </label>
                   <label> <input className="ty" name="actmnt" type="radio" value="Tráfico" /> Trafico  </label>
                   <label> <input className="ty" name="actmnt" type="radio" value="Estupro" />Estupro </label>
                </div>


                <div className="botao">
                    <button onClick={geo}>Concretizar Denúncia</button>
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