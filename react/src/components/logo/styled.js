
import styled from "styled-components"



const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 2.2em;
    padding-top: 0.5em;


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
}

.img-logohd:hover{
    cursor: pointer;
}

  .texto{
    font-family: medio;
    font-size: 1.5em;
  }

  .texto:hover{
    cursor: pointer;
  }

`

export { Container }