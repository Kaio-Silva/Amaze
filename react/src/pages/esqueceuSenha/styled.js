import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: rgba(47, 167, 159, 0.65);

    height: 90.4vh;

    @keyframes exibir {
        0%{ 
            width: 0%; 
        }
        100%{ 
            width: 100%; 
        }
    }    

    .conteudo{
        display: flex;
        flex-direction: column;
        border-radius: 0.31em;
        background-color: white;

        box-shadow: 0em 0em 1em 0.1em rgba(0, 0, 0, 0.25);

        width: 37em;
        height: 20em;
    }

    .titulo{
        padding: 0.6em 1.3em 0.3em;
        
        font-family: medio;
        font-size: 1.5em;
        color: #3D3D3D;
    }

    hr{
        animation: exibir 1.5s;
        border: solid 0.1px #E2DEDE;
        width: 100%;
    }

    .alinharDesc{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .descricao{
        font-family: medio;
        font-size: 1em;
        color: #3D3D3D;
        line-height: 1.3em;

        padding: 1.5em 2.1em ;
    }


    .ajustarInput{
        width: 90%;


        margin-bottom: 1.5em;
    }

    .button{
        display: flex;
        justify-content: flex-end;

        width: 100%;
    }

    button{
        font-family: semiBold;
        font-size: 1em;
        color: white;

        background-color: #2FA79F;

        border: none;
        border-radius: 0.3em;

        padding: 0.4em 2.5em;
        margin: 1em 1em 0em 0em;
    }

    button:hover{
        cursor: pointer;
        background-color: rgba(47, 167, 159, 0.75);
        transition: .5s;
    }


    @media (max-width: 660px) {
    *{ margin: none;
       padding: none;
    }

    .conteudo{   
        width: 90%;
        height: 37%;
    }

    .titulo{
        padding: 1em 0.7em 0.4em;
    
        font-size: 1.1em;
    }

    .alinharDesc{
        align-items: flex-start;
        margin-left: 1em;
    }

    .descricao{
        font-size: 0.84em;
        line-height: 1.3em;

        padding: 1.2em 0.5em;
    }

    input{
        font-size: 0.8em;

        margin-bottom: 1em;
    }

    .button{
        justify-content: center;
    }

    button{
        font-size: .85em;

        width: 90%;

        padding: 0.5em 2.5em;
        margin: 0.3em 0.9em;
    }

    }
`

export { Container }