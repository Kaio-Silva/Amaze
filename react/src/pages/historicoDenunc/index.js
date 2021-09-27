import { Container } from './styled'
import Comp from "../../components/denuncias/index"
import Cabecalho from '../../components/cabecalho'

export default function paghd(props){
    return(
        <Container >
          <Cabecalho cor="white" titulo="block" input="" home="usar" contatenos="usar" buscar="usar" criar="" login="usar" historico="" cadastrar="usar"/>
           <div className="conteudo-hd">
            <div className="registros-denuncias-hd">
                <div className="barra-inicialhd">
                    <div className="titulo-conteudohd">Histórico de denúncias</div>
                </div>
                <div className="boxhd-scrool">
                  <div className="denuc"id="style-2">
                  <div class="force-overflow"></div>
                    <Comp/>
                    <Comp/>
                    <Comp/>
                    <Comp/>
                    <Comp/>
                    <Comp/>
                    <Comp/>
                    <Comp/>
                  </div>
                </div>
            </div>
           </div>
        </Container> 
    )
}