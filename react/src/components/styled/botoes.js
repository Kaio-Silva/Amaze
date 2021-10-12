import styled from "styled-components";



const Button = styled.button`
      font-family: semiBold;
      font-size: 1.1em;
      color: white;

      border: none;
      padding: 1em ;

      width: ${ props => props.tamanho === "grande" ? "100%" : "50%" };

      background-color: ${ props => props.cor === "verde" ? "#24BF99" 
                                                          : props.cor === "azul" ? "#011640" : "#6BBAB5"};

      &:hover{
          cursor: pointer;
          background-color: ${ props => props.cor === "verde" ? "#rgba(36, 191, 153, 0.5)" 
                                                          : props.cor === "azul" ? "rgba(1, 22, 64, 0.8)" : "rgba(87, 166, 161, 1)"}; 
          transition: .5s;
      }

`

const Redondo = styled.button`
      font-family: medio;
      font-size: 1.1em;
      color: white;

      border: none;
      border-radius: 2em;
      padding: 1em ;

      width: ${ props => props.tamanho === "grande" ? "100%" : "50%" };

      background-color: ${ props => props.cor === "verde" ? "#24BF99" 
                                                          : props.cor === "azul" ? "#011640" : "#6BBAB5"};

      &:hover{
          cursor: pointer;
          background-color: ${ props => props.cor === "verde" ? "#rgba(36, 191, 153, 0.5)" 
                                                          : props.cor === "azul" ? "rgba(1, 22, 64, 0.8)" : "rgba(87, 166, 161, 1)"}; 
          transition: .5s;
      }


`

const Botao = styled.button`
    width: 5em;
    height:38px;
    border-radius: 1.5em;
    border: 1px solid black;
    color: white;
    font-size: 1em;
    background-color: black;

      &:hover{
          cursor: pointer;
          background-color: black;
          transition: .5s;
      }


`

export { Button, Redondo, Botao }