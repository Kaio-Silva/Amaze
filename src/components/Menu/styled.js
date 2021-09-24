import styled from 'styled-components'


const Menu = styled.div`
    background-color: #011640;
    height: 100vh;
    width: 20vw;
    color: white;

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
        align-items: center;
        padding: 2.5em 2em 0em;
        font-size: 1em;
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
        padding: 1em 2em;
        font-size: 1em;
    }
`



export { Menu }