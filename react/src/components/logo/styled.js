
import styled from "styled-components"



const Container = styled.div`
    display: ${props => props.ambos === "false" ? "none" : "flex" };
    flex-direction: ${props => props.direction === "column" ? 'column' : 'row'};
    align-items: center;
    padding-left: 2.2em;
    padding-top: 0.5em;

    width: 10em;


@keyframes rotate {
    0%{
        transform: rotate(0deg);
    }

    25%{
        transform: rotate(40deg)
    }

    50%{
        transform: rotate(-25deg);
    }

    75%{
        transform: rotate(360deg);
    }

    100%{
        transform: rotate(0deg);
    }
} 


.img-logohd{
    animation: rotate 2.5s normal;
    height: ${props => props.tamanho === "grande" ? "5em" 
                                                  : props.tamanho === "medio" ? "3.7em" : "3.3em"};

    width: ${props => props.tamanho === "grande" ? "5em" 
                                                  : props.tamanho === "medio" ? "3.7em" : "3.3em"};
    margin-right:0.5em;
    content: url(${props => props.cor === "white" ? '/assets/Images/BussolaBranca.png' : props.cor === "black" ? '/assets/Images/BussolaPreta.png' : '/assets/Images/BussolaVerde.png'})}

.img-logohd:hover{
    cursor: pointer;
}

  .texto{
    font-family: medio;
    font-size: ${props => props.tamanho === "grande" ? "2em" 
                                                  : props.tamanho === "medio" ? "1.5em" : "1em"};
    color: ${props => props.cor === "white" ? 'white' 
                                             : props.cor === "black" ? 'black' : '#24BF99'}
  }

  .texto:hover{
    cursor: pointer;
  }

  
  .link{
        font-family: regular;
        font-size: 0.9em;
        color: black;

        text-decoration: none;
    }
    .link:hover{
        cursor: pointer;
    }

  @media (max-width: 1024px) {
      display: ${props => props.ambos & "false" ? "flex" : "flex" };
      padding-left: 1em;
      .texto{
        display: ${ props => props.titulo === "block" ? "block" : "none"};
        font-size: 1.5em;
      }

      .img-logohd{
          margin-right: 0.2em;
          height: ${props => props.tamanho === "grande" ? "3.5em" 
                                                  : props.tamanho === "medio" ? "3.1em" : "2.8em"};

          width: ${props => props.tamanho === "grande" ? "3.5em" 
                                                  : props.tamanho === "medio" ? "3.1em" : "2.8em"};
      }
  }

  @media(max-width:1031px){
    width: 5em;
  }

`

export { Container }