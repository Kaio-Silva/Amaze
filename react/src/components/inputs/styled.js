import styled from "styled-components";

const Pesquisa = styled.input`
    display: ${props => props.input === "usar" ? "block" : "none"};
    font-family: regular;
    font-size: 1em;

    background-image: url('/assets/images/Buscar.png');
    background-size: 2em;
    background-repeat: no-repeat;
    background-position-x: 98%;
    background-position-y: center;
    border-width: 0.1em; 
    border-radius: 0.2em;
    width: ${props => props.tamanho === "grande" ? "80%" : "60%"};
    height: 2.2em;

    margin-right: 5em;
    margin-bottom: 1em;
    margin-top: 1em;
    padding: 0.8em;


    &:focus{
        background-image: none;
        outline: none;
    }

    @media (max-width: 1024px) {
        margin-right: 0.7em;
        margin-bottom: 0.5em;
        margin-top: 0em;
        padding: 1em;

        font-size: 0.7em;

        background-size: 1.5em;

        width: 13em;
        height: 2.5em;
    }
`

export { Pesquisa }