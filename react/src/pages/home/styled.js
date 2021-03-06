import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

  .AlinhandoPag{
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
  }

  
  .link{
        font-family: regular;
        font-size: 0.9em;
        color: ${props => props.cor === "white" ? 'white' 
                                             : props.cor === "black" ? 'black' : '#24BF99'};

        text-decoration: none;
    }
    .link:hover{
        cursor: pointer;
    }
  
  .AlinhandoConteudo{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    background-image: url('/assets/images/Triangulo.png');
    background-repeat: no-repeat;
    background-position: right;
    background-size: 35em;

    width: 100%;
    height: 82vh;
  }

  .AgrupandoConteudo{
      height: 13em; 
  }

  .Titulo{
      font-family: montserratBold;
      font-size: 2.4em;
      width: 12em;
      height: 2.7em;
      margin-left: 5%;
  }

  .Descricao{
      font-family: medio;
      font-size: 1.3em;
      height: 3em;
      margin-left: 7%;
  }

  .Botão{
      font-family: semiBold;
      font-size: 1.3em;
      color: white;
      margin-left: 5%;

      border: none;
      padding: 0.7em 2.8em;

      background-color: #24BF99;
  }

  .Botão:hover{
      background-color: #47ECC3;
      cursor: pointer;
      transition: .5s;
  }

  @keyframes  float{

    0% {
        transform: translatey(0px);
    }
    50% {
        transform: translatey(-30px);
    }

    100%{
        transform: translatey(0px);
    } 

  }

  .Imagem{
      display: none;
  }

  .ImagemP1{
      animation: float 5s ease-in-out infinite;

      transform: translatey(0px);
      width: 35em;
      height: 35em;

  }

  .AlinhandoConteudo:nth-child(2){
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;

      background-image: url('/assets/images/Circulo.png');
      background-repeat: no-repeat;
      background-position: left;
      background-size: 18em;

      height: 70vh;

  }

  .AlinhandoConteudo:nth-child(3){
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    background-image: url('/assets/images/Triangulo.png');
    background-repeat: no-repeat;
    background-position: right;
    background-size: 35em;

    width: 100%;
    height: 82vh;
  }

  hr{
      display: none;
  }

  .Titulo2{
      font-family: montserratBold;
      font-size: 2em;
      width: 8em;
      height: 3.5em;
  }


  .Texto2{
      font-family: medio;
      font-size: 1.3em;
      line-height: 1.6em;

      width: 15.2em;
     
      margin-bottom: 0.5em;
  }

  .Texto3{
      font-family: medio;
      font-size: 1.3em;
      line-height: 1.6em;

      width: 15.2em;
     
      margin-bottom: 0.5em;
  }

  .Texto{
      font-family: medio;
      font-size: 1.3em;
      line-height: 1.6em;

      width: 19em;
    
  }
  

  .AgrupandoTextos{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 14em;
  }

  .imageLadrao{
      height: auto;
      width: 23.5em;

      margin-bottom: 8%;
      margin-right: 5%;
  }

  .Container2{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      height: 30vh;
  }

  .AgrupandoTextos2{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 14em;
    }

  .MiniTitulo{
      font-family: montserratBold;
      font-size: 1.5em;
  }

  .TextBenficios{
      font-family: medio;
      font-size: 1.2em;
      line-height: 1.6em;
      width: 32em;
  }

  span{
      font-family: semiBold;
      color: #24BF99;
  }

  .AlinhandoConteudo:nth-child(5){
      background-image: none;
      height: 65vh;
  }

  .BoxInfo{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      width: 10em;
      height: 15em;

  }

  .BoxImagens1{
      height: 7em;
      width: 7em;
  }
  .BoxImagens2{
      height: 7em;
      width: 7em;
  }
  .BoxImagens{
      height: 7em;
      width: 7em;
  }

  .BoxImagens:nth-child(1){
      margin-bottom: 1em;
  }


  .BoxTitulo{
      font-family: semiBold;
      font-size: 1.2em;
  }

  .BoxTitulo:nth-child(2){
      margin-bottom: 1em;
  }

  .BoxDesc{
      font-family: medio;
      font-size: 0.9em;
      line-height: 1.6em;
      width: 15em;
  }

  .BoxDesc:nth-child(1){
      width: 1vw;
  }

  @media (max-width: 600px) {
    background-color: #24BF99;

        *{ margin: none;
        padding: none;
        }

        .AgrupandoConteudo{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            height: 100%; 
            
        }

        .AlinhandoPag{
            width: 100%;
            width: 85%;
            align-self: center;
            height: auto;
            background-color: #fff;
            border-radius: 0.8em;
            box-shadow: 10px;

            padding-bottom: 3em;
            margin-top: 5%;
            margin-bottom: 5%;
            box-shadow: 0em 0em .4em .2em grey;
        }

        .AlinhandoConteudo{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            background-position: right;
            background-position-y: 3em;
            background-size: 18em;


        }
        .Titulo{
            font-size: 1.5em;
            width: 11em;
            margin-bottom: 0.7em;
        }

        .Descricao{
            font-size: 1em;
            font-family: medio;
        }


        .Botão{
            font-size: 1em;
            padding: 1em 6.6em;
            margin: 1.5em 0em;
        }   

        @keyframes  float2{

        0% {
            transform: translatey(0px);
        }
        50% {
            transform: translatey(-5px);
        }

        100%{
            transform: translatey(0px);
        } 

        }

        .Imagem{
            animation: float 5s ease-in-out infinite;

            display: block;
            width: 21em;
            height: 21em;
        }

        .ImagemP1{
            display: none;
        }

        .AlinhandoConteudo:nth-child(2){
            display: flex;
            flex-direction: column;
            background-image: none;
            margin-top: 2em;
            height: auto;
        }

        .AlinhandoConteudo > img{
            width: 15em;
            height: 15em;
        }


        .Titulo2{
        font-family: semiBold;
        font-size: 1.6em;
        width: 10em;
        height: 3.5em;
        text-align: center;
        }


        .Texto{
        font-family: medio;
        font-size: .9em;
        line-height: 1.6em;
        text-align: center;

        width: 80%;
        margin-bottom: 1em;
        }

        .Texto2 {
        font-family: medio;
        font-size: .9em;
        line-height: 1.6em;

        text-align: center;
        width: 80%;
        margin-bottom: 2%;
        margin-top: 5%;
        }
        .Texto3{
        font-family: medio;
        font-size: .9em;
        line-height: 1.6em;

        text-align: center;
        width: 70%;
        margin-bottom: 0.5em;
        
        }

        .AgrupandoTextos{
        display: flex;
        align-items: center;
        }

        hr{
        display: block;
        width: 18em;

        border: 1px thin ;
        }

        img:nth-child(2){
        display: none;
        }

        .AlinhandoConteudo:nth-child(3){
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: none;
            background-image: none;

            height: auto;
            padding-bottom: 4em;
        }

        .Container2{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        }

        .AgrupandoTextos2{
            display: flex;
            align-items: center;
            height: 10em;
        }

        .MiniTitulo{
        font-family: semiBold;
        font-size: 1.6em;
        width: 10em;
        }

        .TextBenficios{
        font-family: medio;
        font-size: .9em;
        width: 90%;
        }


        .AlinhandoConteudo:nth-child(5){
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-image: none;

            height: 100vh;
        }


        .BoxInfo{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 12em;
        height: 14em;

        padding-top: 8%;
        }

        .BoxInfo:nth-child(1){
        margin-top: 14%;
        }

        .BoxImagens{
        height: 5.5em;
        width: 5.5em;
        }


        .BoxTitulo{
        font-family: semiBold;
        font-size: 1.1em;
        }

        .BoxDesc{
        font-family: medio;
        font-size: 0.9em;
        line-height: 1em;
        }


    
  }

`

export { Container }