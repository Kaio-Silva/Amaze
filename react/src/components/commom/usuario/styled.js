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


    span{
        font-family: semiBold;
        margin-right: .5em;
    }

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

    @media(max-width: 1024px) {
        width: 70%;
        border-radius: 3em;

        .alinhandoInformacoes{
            display: flex;
            flex-direction: column;
            width: 90%;
            height: 18em;
        }

        .informacoes{
            padding: 0em .5em;
            max-width: 100%;
        }

        .informacoes:nth-child(1){
            padding-top: 1.5em;
        }

        .textos{
            margin: 0em;
        }

        .alinhandoImg{
            margin-left: .7em;
            width: 93%;
        }
    }
`

export { Container }