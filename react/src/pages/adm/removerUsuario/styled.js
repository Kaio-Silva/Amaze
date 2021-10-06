import styled from 'styled-components'


const Container = styled.div`
    
        display: flex;
        flex-direction: column;
        align-items: center;

        font-family: regular;

    .baixo {
        display: flex;
        flex-direction: column;
        align-items: center;
      
        background-color: #B8BABF;
        background-image: url(/assets/Images/DenunciasAzul.svg);
        background-repeat: no-repeat;
        background-position: center;

        padding: 4em 0em;

        height: 90vh;
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



export {Container}