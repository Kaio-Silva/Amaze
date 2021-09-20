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
      font-size: 2em;
      width: 12em;
      height: 2.8em;
  }

  .Descricao{
      font-family: regular;
      font-size: 1.1em;
      height: 3em;
  }

  .Botão{
      font-family: semiBold;
      font-size: 1.1em;
      color: white;

      border: none;
      padding: 0.7em 2.5em;

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

  .Titulo2{
      font-family: montserratBold;
      font-size: 2em;
      width: 8em;
      height: 3.5em;
  }

  .Texto{
      font-family: regular;
      font-size: 1em;
      line-height: 1.6em;

      width: 21em;
  }

  .AgrupandoTextos{
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      height: 12em;
  }

  .Container2{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      height: 30vh;
  }

  .MiniTitulo{
      font-family: montserratBold;
      font-size: 1.5em;
  }

  .TextBenficios{
      font-family: regular;
      font-size: 1em;
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

  .BoxInfo:nth-child(1){
      margin-top: 1em;
  }

  .BoxImagens{
      height: 7em;
      width: 7em;
  }


  .BoxTitulo{
      font-family: semiBold;
      font-size: 1.2em;
  }

  .BoxDesc{
      font-family: regular;
      font-size: 0.8em;
      line-height: 1.6em;
  }


  @media (max-width: 1024px) {
    *{ margin: none;
       padding: none;
    }

    .AlinhandoPag{
        
    }

    .AlinhandoConteudo{
        display: flex;
        flex-direction: column;
    }

    .AlinhandoConteudo:nth-child(2){
        display: flex;
        flex-direction: column;
    }

    .AlinhandoConteudo:nth-child(5){
        display: flex;
        flex-direction: column;
    }

    }
`

export { Container }