import styled from 'styled-components'


const Card = styled.div`


    .info1 {
        border-radius: 2em;
        padding: 1em 0em 15em 1.2em;
        /*margin: 2em 2em;*/
        margin-right: 15em;
        width: 15.5em;
        min-height: 5em;
        max-height: 14vh;
        background-color: #fff;
    }

    .i {
        padding-bottom: 1em;
    }

    .b {
        font-family: semiBold;
        font-size: 0.9em;
    }


    .imagens {
        display: flex;
        flex-direction: row;
    }

    .imagem1 {
        padding-left: 0.8em;
        padding-right: 8em;
    }




    /*.informações {
        display: flex;
        flex-direction: row;
        padding-left: 5em;
    }

    .descriçao {
        width: 12em;
    }

    .desc {
        word-break: break-all;
        width: auto;
    }*/

    .cont {
        display: flex;
        flex-direction: row;
    }
`

export {Card}