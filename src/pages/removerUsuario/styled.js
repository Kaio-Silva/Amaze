import styled from 'styled-components'


const Pagina = styled.div`
    display: flex;
    flex-direction: row;

    .topo {
        padding: 0.4em 20em .5em 15em;
        background-color: #fff;
    }

    .escreva {
        padding: 0.7em;
        border-radius: 0.4em;
        padding-bottom: 0.5em;
        width: 30em;
        outline: none;
        font-size: 1.1em;
    }

    .baixo {
        height: 90vh;
        overflow: auto;
        background-color: #B8BABF;
    }

    .baixo::-webkit-scrollbar-track
    {
        /*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);*/
        background-color: #F5F5F5;
    }

    .baixo::-webkit-scrollbar
    {
        width: 1em;
        background-color: #F5F5F5;
    }

    .baixo::-webkit-scrollbar-thumb
    {
        background-color: #D9E2F3;
    }

    .container-informaçoes {
        background-color: #fff;
        display: flex;
        flex-direction: row;
        padding-left: 2em;
        height: 9em;
        width: 57.2em;
        margin-top: 5em;
        margin-left: 5em;
        border-radius: 0.5em;
    }

    .informaçoes {
        display: flex;
        flex-direction: row;
    }

    .informaçoes1 {
        padding-right: 10em;
    }


    .A {
        padding-bottom: 0.8em;
    }

    .p {
        padding-top: 1em;
    }

    .imagens {
        display: flex;
        flex-direction: row;
        align-items: flex-end;

        padding-left: 12.5em;
    }

    .imagen1 {
        padding-right: 1.6em;
    }
`



export {Pagina}