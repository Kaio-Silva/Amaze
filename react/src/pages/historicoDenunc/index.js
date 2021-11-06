import { Container } from './styled'
import Comp from "../../components/commom/denuncias/index"
import Cabecalho from '../../components/commom/cabecalho'
import Cookies from 'js-cookie'
import Api from '../../services/api'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const api = new Api()



export default function Paghd(){

  const [idusu,setIdusu] = useState([])
console.log('oi')
   useEffect(()=>{
    let id = Cookies.get('Idusu')
    if(id !== undefined || id !== null){
    async function Listar(){
      let r = await api.listarDENUpoUsu(id)
       return setIdusu(r)  
    }
      Listar();
  }else{
    return toast.error('Não é possível exibir o histórico de denúncias sem ter uma conta logada.')
  }
   },[])

  
  
    return(
        <Container >
          <Cabecalho cor="white" titulo="block" input="" home="usar" homep="usar" contatenos="usar" background="" contatenosp="usar" mapa="usar" mapap="usar" criar="" login="usar" loginp="usar" historico="" cadastrop="usar"/>
           <div className="conteudo-hd">
            <div className="registros-denuncias-hd">
                <div className="barra-inicialhd">
                    <div className="titulo-conteudohd">Histórico de denúncias</div>
                </div>
                <div className="boxhd-scrool">
                  <div className="denuc"id="style-2">
                  <div class="force-overflow"></div>
                   
                  {idusu.map((item,i)=>
                     <Comp item={item}/>
                  )}
                   
                  </div>
                </div>
            </div>
           </div>
        </Container> 
    )
}