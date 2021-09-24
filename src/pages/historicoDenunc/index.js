import { Container } from './styled'
import Comp from "../../components/denuncias/index"
import Cabecalho from '../../components/cabecalho'

export default function paghd(){
    return(
        <Container>
          <Cabecalho />
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