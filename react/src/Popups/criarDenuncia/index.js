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
    const[avaliacao] = useState(1)
    const[id,setId] = useState([])
    const[qtdreporte] = useState(0)
    const[hashh,setHash] = useState('')
    
    let d = new Date();
    
    const Data = d.toISOString() //(d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear())
    
    const Substr = Data.substr(0, 10);

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
        return toast.error('Todos os campos s??o obrigat??rios')
        else{ 
            let idu = Cookies.get('Idusu')

            if(idu === undefined || null){
              return toast.error('N??o ?? poss??vel criar uma den??ncia sem possuir uma conta Amaze.')
                 
            }else{   
                  let r = await api.inserirDENU(id, cordinates.Latitude, cordinates.Longitude, Substr,ocorrencia,qtdreporte,loc,bairro,avaliacao,tipo,hashh)
                  toast.success('Den??ncia criada com sucesso!') 
                  loading.current.complete();  
                  
                  setTimeout(() => props.func(false), 2000);
                  
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

                   <div className="titulo-form">Criar Den??ncia</div>

                   <div className="inputs">
                      <Padrao onBlur={ e => setLoc(e.target.value)} className="ajustarInput" placeholder="Digite o nome da rua" cor="verde"tamanho="100%"/>
                  </div> 

                  <div className="inputs">
                      <Padrao onChange={ e => setBairro(e.target.value)} className="ajustarInput" placeholder="Digite o nome do bairro" cor="verde"tamanho="100%"/>
                  </div> 

                  <div className="inputs">
                      <Textarea onChange={ e => setOcorrencia(e.target.value)}  placeholder="Descreva a ocorr??ncia" cor="verde"tamanho="100%"/>
                  </div> 

             </div>

             <div className="checks">
                 <div className="l1">
                   <label> <input className="ty" name="actmnt" type="radio" value="Latroc??nio" onChange={Tipagem} /> Latroc??nio  </label>
                   <label> <input className="ty" name="actmnt" type="radio" value="Homic??dio" onChange={Tipagem} />Homic??dio </label>
                   <label> <input className="ty" name="actmnt" type="radio" value="Sequestro" onChange={Tipagem} />Sequestro </label>
                </div>


                <div className="l2">
                   <label> <input className="ty" name="actmnt" type="radio" value="Furto" onChange={Tipagem} />Furto </label>
                   <label> <input className="ty" name="actmnt" type="radio" value="Feminic??dio" onChange={Tipagem} />Feminic??dio </label>
                   <label> <input className="ty" name="actmnt" type="radio" value="Tr??fico" onChange={Tipagem} /> Trafico  </label>
                   <label> <input className="ty" name="actmnt" type="radio" value="Estupro" onChange={Tipagem} />Estupro </label>
                </div>


                <div className="botao">
                    <button onClick={Inserir}>Concretizar Den??ncia</button>
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
                        <div className="qtddenunc">+20 den??ncias</div>
                    </div>

                    <div className="bloco">
                        <div className="ajustarTaxas">
                            <div className="cor2"></div>
                            <div className="indice">Cuidado</div>
                        </div>    
                        <div className="qtddenunc">+10 den??ncias</div>
                    </div>

                    <div className="bloco">
                        <div className="ajustarTaxas">
                            <div className="cor3"></div>
                            <div className="indice">Alerta</div>
                        </div>    
                        <div className="qtddenunc">+5 den??ncias</div>
                    </div>

                    <div className="bloco">
                        <div className="ajustarTaxas">
                            <div className="cor4"></div>
                            <div className="indice">Passivo</div>
                        </div>    
                        <div className="qtddenunc">+Sem den??ncias</div>
                    </div>

                </div>


             </div>



          </div>



          { props.children}
        </Container>
    ) : "";
}  