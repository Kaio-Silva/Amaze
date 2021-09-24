import styled from 'styled-components'


const Container = styled.div`

    .conteudo {
        box-shadow: 2em;
    }

    .usuario {
        background-color: #24BF99;
        /*height: 88.4vh;*/
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
    }

    .informações {
        padding-left: 7em;
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

    .descrição{
        display: flex;
        flex-direction: column;
    }

    descriçao {
        font-size: 2em;
    }

    .Data{
        display: flex;
        flex-direction: row;
        padding-right: 8em;
    }

    b{
        font-size: 1.1em;
        padding-right: 0.2em;
    }

    .botões {
        display: flex;
        flex-direction: row;
        padding: 3em 0em 5em 42em;
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