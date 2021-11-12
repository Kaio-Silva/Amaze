import styled from 'styled-components'


const Container = styled.div`
    
        display: flex;
        flex-direction: column;
        align-items: center;

        font-family: regular;

        background-color: white;

    .baixo {
        display: flex;
        flex-direction: column;
        align-items: center;
      
        background-color: #B8BABF;
        background-image: url(/assets/Images/DenunciasAzul.svg);
        background-repeat: no-repeat;
        background-position: center;

        padding: 4em 0em;

        height: 89.5vh;
        min-width: 100%;

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

    @media (min-width: 1440px){
        .algo{
            height: 91vh;
        }
    }

   
    @media(max-width: 1024px) {
        display: flex;
        flex-direction: column;

        .Pesquisar{
            display: none;
        }

        .algo{
            background-image: none;
            width: 100%;
            padding: 2em 0em;
        }

        .baixo::-webkit-scrollbar
        {
            width: 0em;
        }
    }
`



export {Container}