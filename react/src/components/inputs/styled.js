import styled from "styled-components";

const Pesquisa = styled.input`
    font-family: regular;
    font-size: 1em;

    background-image: url('/assets/images/Buscar.png');
    background-size: 2.5em;
    background-repeat: no-repeat;
    background-position-x: 98%;
    background-position-y: center;
    border-width: 0.1em; 
    border-radius: 0.2em;
    width: 60%;

    margin-right: 8em;
    margin-bottom: 1em;
    margin-top: 1em;
    padding: 0.8em;


    &:focus{
        background-image: none;
        outline: none;
    }
`

export { Pesquisa }