import styled from 'styled-components'


const Menu = styled.div`
    display: flex;
    flex-direction: column;

    width: 20vw;
    
    background-color: #011640;

    position: sticky;
    top: 0;


    img{
        height: 2.2em;
        width: 2.2em;
    }

    .cabeçalho {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1em;
    }

    .empressa {
        font-size: 1.5em;
        padding-left: 0.2em;
    }

    .relatorio {
        display: flex;
        flex-direction: row;

        margin: 3.5em 2em 1em;
    }

    .relatorio:hover{
        cursor: pointer;
    }

    .a {
        display: flex;
        flex-direction: column;
        padding-left: 0.6em;
    }

    .remover {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 1.5em 2.2em;
        font-size: 1em;
    }

    .remover:hover{
        cursor: pointer;
    }

    
    .link{
        font-family: regular;
        font-size: 0.9em;
        color: white;

        text-decoration: none;

        width: 3em;
        margin-left: 0.7em;
    }
    .link:hover{
        cursor: pointer;
    }

    /*.inp {
        display: none;
    }*/

    @media (max-width: 1024px) {
        flex-direction: row;
        width: 100vw;
        height: 12vh;
        background-image: url(/assets/Images/MenuBranco.svg);
        background-repeat: no-repeat;
        background-position: 23em 2.1em;
        background-size: 2.2em;

        .relatorio {display: none;}

        .remover {display: none;}

        .logo {width: none;}

        .inp {
            padding: 1.5em 5em 0em 0em;
        }

        input {
            font-size: 1.4em;
        }
    }
`



export { Menu }