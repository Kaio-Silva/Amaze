import styled from 'styled-components'


const Pagina = styled.div`
    display: flex;
    flex-direction: row;

    font-family: regular;
    font-size: 1em;

    height: 100vh;
    max-width: 100vw;

    span{
        font-family: semiBold;
        font-size: 1em;
    }

    .topo {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 80vw;
        height: 4em;
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

    .direita{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .baixo {
        display: flex;
        flex-direction: column;
        align-items: center;
      
        background-color: #B8BABF;
        background-image: url(/assets/Images/DenunciasAzul.svg);
        background-repeat: no-repeat;
        background-position: center;

        padding: 4em 0em;

        min-height: 90vh;
        min-width: 80vw;

        overflow-y: scroll;
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

   
    @media(max-width: 1024px) {
        display: flex;
        flex-direction: column;

        .Pesquisar{
            display: none;
        }

        .baixo{
            background-image: none;
            width: 100%;
        }

        .baixo::-webkit-scrollbar
        {
            width: 0em;
        }
    }
`



export {Pagina}