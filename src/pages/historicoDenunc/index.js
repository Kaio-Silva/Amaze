import { Container } from './styled'
import Comp from "../../components/denuncias/index"

export default function paghd(){
    return(
        <Container>

           <div className="cabecalho-hd">

               <div className="logo-cabecalhohd">
                  <div className="img-logohd">  <img src="/assets/Images/BussolaPreta.png" alt=""/>   </div>
                  <div className="escrita-logohd">Amaze</div>
               </div>


               <div className="descricao-cabecalhohd">
                   <div className="elements-desc-cabhd">Home</div>
                   <div className="elements-desc-cabhd">Contate-nos</div>
                   <div className="elements-desc-cabhd">Buscar Região</div>
                   <div className="barrahd"></div>
                   <div className="elements-desc-cabhd">Log-in</div>
               </div>

           </div>


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