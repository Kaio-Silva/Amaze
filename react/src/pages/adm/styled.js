import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    background-color:#B8BABF;

    @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;
    }
` 

const Conteudo = styled.div`
        display: flex;
        flex-direction: column;

        min-height: 80vh;
        width: 100%;
`


export { Container, Conteudo }