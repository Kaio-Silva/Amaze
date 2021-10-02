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
          transition: 1.5s;
      }
`

export { Button }