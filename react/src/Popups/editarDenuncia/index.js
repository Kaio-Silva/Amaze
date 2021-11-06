import { useState } from 'react'
import { Container } from './styled'
import { Padrao } from '../../components/styled/inputs.js';
import { Textarea } from '../../components/styled/inputs.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Botao } from '../../components/styled/botoes';
import Api from '../../services/api'
import Cookies from 'js-cookie'

const api = new Api()

export default function P4(props){

    const[bairro, setBairro] = useState(props.bairro)
    const[ocorrencia, setOcorrencia] = useState(props.ocorrencia)
    const[loc, setLoc] = useState(props.rua)
    const[tipo, setTipo] = useState('')
    console.log(bairro)
    console.log(ocorrencia)
    console.log(loc)

    let id = Cookies.get('Idusu')

    function Tipagem(e){
        setTipo(e.target.value)
    }
    async function Listar(){
        let r = await api.listarDENUpoUsu(id)
    }

    async function alterar(){
    let r = await api.alterarDENU(props.id, props.den.id_usuario, props.den.dt_denuncia, props.den.qtd_avaliacao, bairro, ocorrencia, loc, tipo) //Falta a LatLng...
    
    if(r.erro)
        toast.error(r.erro)
    else
        toast.success("Alteração concluída")
        Listar()
        props.setEdit(false)
}
    
    return(props.edit) ?(
        <Container>
          <div className="abox">
              <ToastContainer/>
             <div className="cabecalho">

                 <div className="le">
                     <div className="img"><img src="/assets/images/BussolaPreta.png" alt=""/></div>
                     <div className="amz">Amaze</div>
                 </div>

                 <div className="ld"><button onClick={ () => props.setEdit(false)}><img src="/assets/images/xpreto.png" alt=""/></button></div>
             </div>


             <div className="forms">

                   <div className="titulo-form">Editar Denúncia</div>

                   <div className="form1">
                      <label><Padrao onBlur={ e => setLoc(e.target.value)}  placeholder="Rua júlio silvino"></Padrao></label> 
                  </div> 

                  <div className="form2">
                      <label><Padrao onChange={ e => setBairro(e.target.value)}  placeholder="Parque alto rio Bonito"></Padrao></label> 
                  </div> 

                  <div className="teext">
                      <label><Textarea onChange={ e => setOcorrencia(e.target.value)}  placeholder="Rua júlio silvino" className="txt"></Textarea></label> 
                  </div> 

             </div>

             <div className="checks">
                 <div className="l1">
                   <label> <input className="ty" name="actmnt" type="radio" value="Furto" onChange={Tipagem}/>Furto </label>
                   <label> <input className="ty" name="actmnt" type="radio" value="Latrocínio" onChange={Tipagem}/> Latrocínio  </label>
                   <label> <input className="ty" name="actmnt" type="radio" value="Homicídio" onChange={Tipagem}/> Homicídio </label>
                   <label> <input className="ty" name="actmnt" type="radio" value="Sequestro" onChange={Tipagem}/> Sequestro </label>
                </div>


                <div className="l2">
                   <label> <input className="ty" name="actmnt" type="radio" value="Feminicídio" onChange={Tipagem}/>Feminicídio </label>
                   <label> <input className="ty" name="actmnt" type="radio" value="Tráfico" onChange={Tipagem}/> Tráfic  </label>
                   <label> <input className="ty" name="actmnt" type="radio" value="Estupro" onChange={Tipagem}/>Estupro </label>
                </div>


                <div className="botao">
                    <Botao onClick={alterar} className="botao">Concretizar Denúncia</Botao>
                </div>

                { props.children}
             </div>



          </div>




        </Container>
    ) :"";
}  