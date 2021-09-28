import styled from "styled-components";



const Button = styled.button`
      font-family: semiBold;
      font-size: 1.1em;
      color: white;

      border: none;
      padding: 1em ;

      width: ${ props => props.tamanho === "grande" ? "100%" : "50%" };

      background-color: #24BF99;

      &:hover{
          cursor: pointer;
          background-color: rgba(36, 191, 153, 0.5);
          transition: 2s;
      }
`

export { Button }