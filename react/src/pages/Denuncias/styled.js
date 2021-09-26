import styled from 'styled-components'


const Container = styled.div`

    .conteudo {
        box-shadow: 2em;
    }

    .usuario {
        background-color: #24BF99;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    }

    .botao1 button{
        background-color: transparent;
        border: none;
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
        padding-top: 2em;
    }

    .informações {
        padding-left: 10em;
        width: 22em;
        padding-right: 1em;
    }

    .autor{
        padding-top: 3em;
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
        font-family: medio;
        word-break: break-all;
        width: 31em;
        padding-top: 0.8em;
    }

    .Data{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding-left: 18em;
    }

    .b{
        padding-right: 0.7em;
        font-family: semiBold;
    }

    .botões {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding-right: 5em;
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
`


export {Container}