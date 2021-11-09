import { useState } from 'react';
import { Container } from './styled'
import ReactStars from "react-rating-stars-component";

export default function P1(props){
     const[star, setStar] = useState(0); 

     console.log(star)
    const ratingChanged = (newRating) => {
        setStar(newRating)
      };

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
               <div className="botao"><button>Confirmar Avaliação</button></div>
          </div>
          
          { props.children}
        </Container>
    ) : "";
}  