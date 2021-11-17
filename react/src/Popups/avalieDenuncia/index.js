import { useState } from 'react';
import { Container } from './styled'
import ReactStars from "react-rating-stars-component";

import Api from '../../services/api';

const api = new Api();

export default function P1(props){
     const[avaliacao, setAvaliacao] = useState(0);
     const id = props.item.id_denuncia

     console.log(avaliacao)

    const ratingChanged = (newRating) => {
        setAvaliacao(newRating)
      };

    async function Avaliar(){
        let r = await api.AvaliarDENU(id,avaliacao);
        setAvaliacao(r)
    }

    return(props.bool) ?(
        <Container>
           <div className="abox">
               <div className="cabecalho"><button onClick={() => props.func(false)}><img src="/assets/images/Fechar 5.png" alt=""/></button></div>
               <div className="img"><img src="/assets/images/estrelinha.png" alt=""/></div>
               <div className="titulo"> Avalie esta Denúncia</div>
               <div className="star">
                <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />
                </div>
               <div className="botao"><button onClick={Avaliar}>Confirmar Avaliação</button></div>
          </div>
          
          { props.children}
        </Container>
    ) : "";
}  