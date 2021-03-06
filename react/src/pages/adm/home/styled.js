import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: regular;
    font-size: 1em;
    height: 100vh;


    .align{
        display: flex;
        width: 100%;
        justify-content: center;
        background-color: white;
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
        height: 90.9vh;
    }


    @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;

        

        .baixo {
            display: flex;
            flex-direction: column;
            align-items: center;

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