import styled from 'styled-components'


const Container = styled.div`

    .conteudo {
        box-shadow: 2em;
    }

    .usuario {
        background-color: #24BF99;
        /*height: 88.4vh;*/
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
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
        padding-left: 7em;
        width: 20em;
    }

    .autor{
        padding-top: 3em;
    }

    .A {
        padding-top: 1em;
    }

    img {
        width: auto;
        height: 1em;
    }

    .descriçao{
        display: flex;
        flex-direction: column;
        width: 15em;
    }

    .descricaoA{
        display: flex;
        flex-direction: column;
        width: 15em;
    }

    descriçao {
        width: 15em;
        font-size: 2em;
    }

    .Data{
        display: flex;
        flex-direction: row;
        /*padding-right: 8em;*/
    }

    b{
        font-size: 1.1em;
        padding-right: 0.2em;
    }

    .botões {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
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