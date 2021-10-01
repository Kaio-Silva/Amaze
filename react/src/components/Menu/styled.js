import styled from 'styled-components'


const Menu = styled.div`
    display: flex;
    flex-direction: column;

    width: 20vw;
    
    background-color: #011640;

    position: sticky;
    top: 0;


    .MenuPesq{
        display: none;
    }

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


    @media (max-width: 1024px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 12vh;

        .MenuPesq{
            display: block;
            margin-top: 0.6em;
            height: 3em;
            width: 45%;
        }

        .relatorio {display: none;}

        .remover {display: none;}

        .logo {width: none;}

        
    }
`

const MenuResp = styled.img`
    display: none;

    @media (max-width: 1024px) {
        display: block;
        margin: 0em 0.5em;
    }
`


export { Menu, MenuResp }