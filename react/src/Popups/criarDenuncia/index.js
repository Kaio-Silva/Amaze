import { Container } from './styled'
import Logo from '../../components/commom/logo';
import { Padrao, Textarea } from '../../components/styled/inputs.js';
import { useEffect, useState } from 'react';
import Api from '../../services/api'
import Cookies from 'js-cookie'

const api = new Api()

export default function P4(props){
    const[cordinates,setCordinates] = useState([])
    const[bairro,setBairro] = useState('')
    const[ocorrencia,setOcorrencia] = useState('')
    const[loc,setLoc] = useState('')
    const[tipo,setTipo] = useState('')
    const[avaliacao,setAvaliacao] = useState(9)
    const[id,setId] = useState([])
    const[qtdreporte,seQtdReporte] = useState(12)
    let data = new Date();

    useEffect(() =>{
        let idu = Cookies.get('Idusu')
        setId(idu)
        console.log(idu)
    },[])
  


    useEffect(() => {
        async function loadGeoloc() {
            try {
                let r = await api.Geocoding(loc);
                
                let insert = {
                    Latitude: r[0].geometry.lat,
                    Longitude: r[0].geometry.lng
                }
               
                setCordinates(insert);
            } catch (e) {
                
                setCordinates({
                    Latitude: 23.34234,
                    Longitude: 23.34234
                });
            }
        }
        loadGeoloc();
    }, [loc]
    
    )



    async function Inserir(){
 
        if(bairro === '' || loc === '' || ocorrencia === '' || tipo === '' )
        return alert('Todos os campos sao obrigatorios')
          else{ 
        let idu = Cookies.get('Idusu')
        if(idu === undefined){
         return alert('Não é possível criar uma denúncia sem possuir uma conta Amaze.')
        }else{      
        let r = await api.inserirDENU(id, cordinates.Latitude, cordinates.Longitude, data,ocorrencia,qtdreporte,loc,bairro,avaliacao,tipo)
        console.log(r);
        }
     }
    }

    

    function Tipagem(e){
        setTipo(e.target.value)
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
                      <Padrao onBlur={ e => setLoc(e.target.value)} className="ajustarInput" placeholder="Digite o nome da rua" cor="verde"tamanho="100%"/>
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
                   <label> <input className="ty" name="actmnt" type="radio" value="Latrocínio" onChange={Tipagem} /> Latrocínio  </label>
                   <label> <input className="ty" name="actmnt" type="radio" value="Homicídio" onChange={Tipagem} />Homicídio </label>
                   <label> <input className="ty" name="actmnt" type="radio" value="Sequestro" onChange={Tipagem} />Sequestro </label>
                </div>


                <div className="l2">
                   <label> <input className="ty" name="actmnt" type="radio" value="Furto" onChange={Tipagem} />Furto </label>
                   <label> <input className="ty" name="actmnt" type="radio" value="Feminicídio" onChange={Tipagem} />Feminicídio </label>
                   <label> <input className="ty" name="actmnt" type="radio" value="Tráfico" onChange={Tipagem} /> Trafico  </label>
                   <label> <input className="ty" name="actmnt" type="radio" value="Estupro" onChange={Tipagem} />Estupro </label>
                </div>


                <div className="botao">
                    <button onClick={Inserir}>Concretizar Denúncia</button>
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