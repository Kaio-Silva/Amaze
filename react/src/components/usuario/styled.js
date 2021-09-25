import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 80%;

    background-color: white;

    border: none;
    border-radius: 0.7em;

    margin: 0.7em;

    .alinhandoInformacoes{
        display: flex;
        flex-direction: row;

        justify-content: space-around;

        width: 100%;
    }

    .informacoes{
        padding: 1em 0em;
    }

    .texto{
        margin: 0.5em 0em;
    }

    .alinhandoImg{
        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        width: 7em;

        padding: 1em 0em;
    }

    .imagem{
        height: 2em;
        width: 2em;
    }

    .imagem:hover{
        cursor: pointer;
    }
`

export { Container }