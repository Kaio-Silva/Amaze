import styled from 'styled-components'


const Pagina = styled.div`
    display: flex;
    flex-direction: row;

    font-family: regular;
    font-size: 1em;

    height: 100vh;
    min-width: 100vw;

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

        padding: 4em 0em;

        height: 90.35vh;
        min-width: 80vw;

        overflow-y: scroll;
    }

    .baixo::-webkit-scrollbar-track
    {
        background-color: #D9E2F3;
    }

    .baixo::-webkit-scrollbar
    {
        width: 15px;
        background-color: #F5F5F5;
    }

    .baixo::-webkit-scrollbar-thumb
    {
        background-color: white;
    }

   

`



export {Pagina}