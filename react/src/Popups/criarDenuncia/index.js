import { Container } from './styled'
import Logo from '../../components/commom/logo';
import { Padrao, Textarea } from '../../components/styled/inputs.js';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Api from '../../services/api'
import Cookies from 'js-cookie'
import { useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'


const api = new Api()


export default function P4(props){
    const loading = useRef(null);
    const[cordinates, setCordinates] = useState([])
    const[bairro,setBairro] = useState('')
    const[ocorrencia,setOcorrencia] = useState('')
    const[loc,setLoc] = useState('')
    const[tipo,setTipo] = useState('')
    const[avaliacao] = useState(0)
    const[id,setId] = useState([])
    const[qtdreporte] = useState(0)
    const[hashh,setHash] = useState('')
    let d = new Date();
    
    let Data = d.toLocaleDateString();
    

    useEffect(() =>{
        let idu = Cookies.get('Idusu')
        setId(idu)
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

    useEffect(()=>{

        var geohash =  require('ngeohash');
        let hash = geohash.encode(cordinates.Latitude,cordinates.Longitude, 6)
        setHash(hash)
  
    },[cordinates])



    async function Inserir(){
        loading.current.continuousStart();
        if(bairro === '' || loc === '' || ocorrencia === '' || tipo === '' )
        return toast.error('Todos os campos são obrigatórios')
        else{ 
            let idu = Cookies.get('Idusu')

            if(idu === undefined || null){
              return toast.error('Não é possível criar uma denúncia sem possuir uma conta Amaze.')
                 
            }else{   
                  let r = await api.inserirDENU(id, cordinates.Latitude, cordinates.Longitude, Data,ocorrencia,qtdreporte,loc,bairro,avaliacao,tipo,hashh)
                  toast.success('Denúncia criada com sucesso!') 
                  loading.current.complete();  
                  
        }
    
     }
    }

    

    function Tipagem(e){
        setTipo(e.target.value)
    }
      

  
    return(props.value) ?(
        <Container>
            <LoadingBar color='#f11946' ref={loading} />
          <div className="abox">
              <ToastContainer/>
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