import styled from 'styled-components'


const Denuncias = styled.div`
    display: flex;
    flex-direction: row;
    font-family: regular;
    font-size: 1em;

    .alinhando {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-top: 4em;
        width: 80%;
    }

    .conteudo{
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;
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
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #B8BABF;
        background-image: url(/assets/Images/DocsAzul1.png);
        background-repeat: no-repeat;
        background-position: center;

        width: 100%;
        height: 90vh;
        overflow-x: hidden;
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

    @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;

        .conteudo{
            width: 100vw;
        }

        .baixo {
            display: flex;
            flex-direction: column;
            align-items: center;

            background-image: none;

            width: 100vw;
        }

        .baixo::-webkit-scrollbar
        {
            width: 0em;
        }

        .alinhando{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 0em;
        }

        .Pesquisar{
            display:  none;
        }
    }
`


export {Denuncias}