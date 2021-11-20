import { useState } from 'react';
import { Container } from './styled'
import ReactStars from "react-rating-stars-component";
import { useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'
import Api from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router';
const api = new Api();

export default function P1(props){
     const[avaliacao, setAvaliacao] = useState(0);
     const id = props.item.id_denuncia
     const loading = useRef(null);
     const nav = useHistory();
     console.log(avaliacao)
     console.log(id)

    const ratingChanged = (newRating) => {
        setAvaliacao(newRating)
      };

 
       
    

      async function Avaliar(){

        loading.current.continuousStart();
    
            let r = await api.AvaliarDENU(id,avaliacao)
            if( r.erro ){
                toast.error(r.erro)
                nav.push('/mapa')
        loading.current.complete();   
                toast.success('Denucia avaliada com sucesso.')
                setTimeout(() => nav.push('/mapa'), 2000);
            }
        }
       

    

    return(props.bool) ?(
        <Container>
             <ToastContainer/>
             <LoadingBar color='#f11946' ref={loading} />
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