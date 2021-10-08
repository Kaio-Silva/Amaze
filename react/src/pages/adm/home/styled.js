import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: regular;
    font-size: 1em;


    .Pesquisar{
        margin-top: .6em;
    }

    .baixo{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #B8BABF;
        background-image: url("/assets/Images/admDuvida.png");
        background-size: 5em;
        background-repeat: no-repeat;
        background-position: center;

        width: 100%;
        height: 93.2vh;
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

    @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;

        

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

        .Pesquisar{
            display:  none;
        }
    }
`


export {Container}