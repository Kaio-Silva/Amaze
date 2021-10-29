import styled from 'styled-components'


const Card = styled.div`
        border-radius: 2em;
        padding: 1.2em;
        width: 15.5em;
        min-height: 15em;
        background-color: #fff;

        &:hover{
            cursor: pointer;
        }
 

    .i {
        padding-bottom: 1em;
    }

    .b {
        font-family: semiBold;
        font-size: 0.9em;
        padding-right: 0.5em;
    }


    .imagens {
        display: flex;
        flex-direction: row;
        justify-content: space-between;


        margin-top: 1.8em;
    }

    .botoes{
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;
        width: 2em;
        height: 2em;
    }

    .botoes img:hover{
        cursor: pointer;
    }

    .botoes:hover{
        transform: scale(1.1);
        transition: all 0.5s;
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

    @media (max-width: 1024px) {
        margin: 1.5em 0em;
        width: 17em;

        border-radius: 3em;

    }
`

export {Card}