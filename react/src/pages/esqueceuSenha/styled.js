import styled from "styled-components";

const Container = styled.div`

    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: rgba(47, 167, 159, 0.65);

    height: 85.1vh;

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

    .Botao{
        font-size: .8em;
        text-align: end;
        width: 95%;
    }

    .Botao > button{
        width: 25%;
        padding: .7em;

        margin-top: .8em;
    }


    @media(max-width: 1280px){
        height: 89.3vh;
    }

    @media(min-width: 1440px){
        height: 87.6vh;
    }

    @media(min-width: 1920px){
        height: 89.9vh;
    }

    @media (max-width: 660px) {
    *{ margin: none;
       padding: none;
    }

    .conteudo{   
        width: 90%;
        height: 46%;
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

    .Botao{
        font-size: .8em;
        text-align: end;
        width: 95%;
    }

    .Botao > button{
        width: 95%;
        padding: .7em;

        margin-top: 0em;
    }

    }
`

export { Container }