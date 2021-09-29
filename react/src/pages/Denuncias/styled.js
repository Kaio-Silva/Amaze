import styled from 'styled-components'


const Container = styled.div`

    .conteudo {
        box-shadow: 2em;
    }

    .usuario {
        background-color: #24BF99;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 70vh;
    }

    .rua {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 2em;
        border-top: solid;
        padding: 0.4em 0em;
        font-family: medio
    }

    .row {
        display: flex;
        flex-direction: row;
        color: white;
        font-size: 1.3em;
        font-family: regular;
        /*padding-top: 5%;*/
    }

    .informacoes {
        width: 34em;
    }

    .A {
        display: flex;
        flex-direction: row;
        padding-top: 1em;
        width: auto;
    }

    img {
        width: auto;
        height: 1em;
    }

    .Descricao{
        display: flex;
        flex-direction: column;
    }

    .descricao {
        font-size: 100%;
        font-family: medio;
        word-break: break-all;
        width: 31em;
        padding-top: 0.8em;
    }

    .Data{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        /*padding-left: 3em;*/
    }

    .b{
        font-size: 1.2em;
        padding-right: 0.7em;
        font-family: semiBold;
    }

    .c {
        font-size: 1.1em;
    }

    .botões {
        display: flex;
        flex-direction: row;
        padding: 2em 0em 3em 22em;
    }

    .botão1 {
        padding-right: 1em;
    }

    button {
        padding: 0.5em 1.5em;
        border: none;
        border-radius: 0.5em;
        font-size: 1.3em;
        background-color: white;
    }

    .avaliacao {
        padding-top: 1em;
        padding-bottom: 1em;
    }

    @media (max-width: 1024px) {

        .rua {
            font-size: 1.4em;
            padding: 0.8em 0em;
        }

        .informacoes {
            width: 10em;
        }

        .usuario {
            height: auto;
            width: auto;
        }

        .descricao {
            width: 23em;
        }

        .T {
            font-size: 18px;
            font-family: semiBold;
        }

        .c {
            font-size: 18px/*0.8em*/;
        }

        button {
            width: max-content;
            padding: 0.8em 1.3em;
            font-size: 0.9em;
        }

        .botões {
            display: flex;
            flex-direction: row;
            padding: 2em 0em 3em 2em;
            /*padding-left: initial;*/
        }

        .descricao {
            font-size: 15px;
        }
    }
`


export {Container}