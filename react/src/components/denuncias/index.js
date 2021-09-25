import { Container } from './styled'



export default function Compd(){
    return(
      <Container>
           <div className="descricao-conteudohdc1">07/10/2005</div>
           <div className="barra-conteudohdc"></div>
           <div className="descricao-conteudohdcc">Assalto</div>
           <div className="barra-conteudohdc"></div>
           <div className="descricao-conteudohdce">SP</div>
           <div className="barra-conteudohdc"></div>
           <div className="descricao-conteudohdc">Parque Alto do Rio Bonito</div>
           <div className="alinhando-imagem">
                <img className="img1" src="/assets/Images/Group.svg"/>
                <img className="img" src="/assets/Images/Group (1).svg"/>
           </div>
        </Container>
    )
}