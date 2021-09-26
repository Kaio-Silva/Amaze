import styled from 'styled-components'


const Denuncias = styled.div`
    display: flex;
    flex-direction: row;

    font-family: regular;
    font-size: 1em;

    .topo {
        padding: 0.4em 20em .5em 15em;
        background-color: #fff;
    }

    .conteudo{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .escreva {
        background-image: url('/assets/images/Buscar.png');
        background-repeat: no-repeat;
        background-position: 28em 0.3em;
    }

    .escreva {
        padding: 0.7em;
        border-radius: 0.4em;
        padding-bottom: 0.5em;
        width: 30em;
        outline: none;
        font-size: 1.1em;
    }

    .baixo{
        background-color: #B8BABF;
        background-image: url(/assets/Images/DocsAzul1.png);
        background-repeat: no-repeat;
        background-position: 41.3em 16em;
        background-attachment: fixed;

        width: 80vw;
        height: 90vh;
        overflow: auto;
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

    .informações {
        display: flex;
        flex-direction: row;
        padding-left: 5em;
    }

    .info1 {
        border-radius: 2em;
        padding: 1em 0em 15em 1.2em;
        margin: 2em 2em;
        width: 14.5em;
        min-height: 5em;
        max-height: 14vh;
        background-color: #fff;
    }

    .info2 {
        border-radius: 2em;
        padding: 1em 0em 1.7em 1.2em;
        margin: 2em 12em;
        width: 14.5em;
        min-height: 14vh;
        background-color: #fff;
    }

    .descriçao {
        width: 12em;
    }

    .imagens {
        display: flex;
        flex-direction: row;
    }

    .i {
        padding-bottom: 1em;
    }

    .imagem1 {
        padding-left: 0.8em;
        padding-right: 7em;
    }

    .b {
        font-family: semiBold;
        font-size: 0.9em;
    }

    .desc {
        word-break: break-all;
        width: auto;
    }

    .cont {
        display: flex;
        flex-direction: row;
    }

    //lembrar de botart a imagem de pesquisa
`


export {Denuncias}