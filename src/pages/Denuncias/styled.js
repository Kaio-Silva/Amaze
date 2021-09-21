import styled from 'styled-components'


const Container = styled.div`
    .usuario {
        background-color: #24BF99;
        /*height: 88.4vh;*/
    }

    .rua {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 2em;
    }

    .row {
        display: flex;
        flex-direction: row;
        padding-left: 5em;
        color: white;
        font-size: 1.3em;
    }

    .A {padding-top: 2em;}

    .descrição{
        display: flex;
        flex-direcion: column;
    }

    b {padding-bottom: 5em;}

    button {
        padding: 1em 2.5em;;
    }
`


export {Container}