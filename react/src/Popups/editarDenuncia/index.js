import { Container } from './styled'

export default function p4(props){
    return(props.edit) ?(
        <Container>
          <div className="abox">
             <div className="cabecalho">

                 <div className="le">
                     <div className="img"><img src="/assets/images/BussolaPreta.png" alt=""/></div>
                     <div className="amz">Amaze</div>
                 </div>

                 <div className="ld"><button onClick={() => props.setEedit(false)}><img src="/assets/images/xpreto.png" alt=""/></button></div>
             </div>


             <div className="forms">

                   <div className="titulo-form">Editar Denúncia</div>

                   <div className="form1">
                      <label><input placeholder="Rua júlio silvino" className="f1"/></label> 
                  </div> 

                  <div className="form2">
                      <label><input placeholder="Parque alto rio Bonito" className="f2"/></label> 
                  </div> 

                  <div className="teext">
                      <label><textarea placeholder="Rua júlio silvino" className="txt"/></label> 
                  </div> 

             </div>

             <div className="checks">
                 <div className="l1">
                   <label> <input className="ty" name="actmnt" type="radio" value="Furto" />Furto </label>
                   <label> <input className="ty" name="actmnt" type="radio" value="Latrocínio" /> Latrocínio  </label>
                   <label> <input className="ty" name="actmnt" type="radio" value="Homicídio" />Homicídio </label>
                   <label> <input className="ty" name="actmnt" type="radio" value="Sequestro" />Sequestro </label>
                </div>


                <div className="l2">
                   <label> <input className="ty" name="actmnt" type="radio" value="Feminicídio" />Feminicídio </label>
                   <label> <input className="ty" name="actmnt" type="radio" value="Tráfico" /> Tráfic  </label>
                   <label> <input className="ty" name="actmnt" type="radio" value="Estupro" />Estupro </label>
                </div>


                <div className="botao">
                    <button>Concretizar Denúncia</button>
                </div>

                { props.children}
             </div>



          </div>




        </Container>
    ) :"";
}  