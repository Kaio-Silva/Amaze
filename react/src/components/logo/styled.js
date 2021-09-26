
import styled from "styled-components"



const Container = styled.div`
    display: flex;
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
    height: 3.3em;
    width: 3.3em;
    margin-right:0.5em;
    content: url(${props => props.cor === "white" ? '/assets/Images/BussolaBranca.png' : props.cor === "black" ? '/assets/Images/BussolaPreta.png' : '/assets/Images/BussolaVerde.png'})}

.img-logohd:hover{
    cursor: pointer;
}

  .texto{
    font-family: medio;
    font-size: 1.5em;
    color: ${props => props.cor === "white" ? 'white' 
                                             : props.cor === "black" ? 'black' : '#24BF99'}
  }

  .texto:hover{
    cursor: pointer;
  }

  @media (max-width: 1024px) {
      .texto{
          display: none;
      }
  }

`

export { Container }