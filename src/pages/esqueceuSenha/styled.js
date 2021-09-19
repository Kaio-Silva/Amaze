import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: rgba(47, 167, 159, 0.65);

    height: 100vh;

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

    .descricao{
        font-family: medio;
        font-size: 1em;
        color: #3D3D3D;
        line-height: 1.3em;

        padding: 1.5em 2.1em ;

        
        height: 8em;
    }

    input{
        font-family: medio;
        font-size: 1em;
        color: #3D3D3D;

        border: solid 1px #E2DEDE;  
        border-radius: 0.3em;

        padding: 0.8em 1em;
        margin-left: 2.3em;
        margin-bottom: 2em;
        width: 80%;
    }

    input::placeholder{
        font-size: 1em;
        color: rgba(0, 0, 0, 0.4);
    }

    input:focus{
        outline: none;
    }

    input:focus::-webkit-input-placeholder {
    color: transparent;
 }

    .button{
        display: flex;
        justify-content: flex-end;

        width: 100%;
    }

    button{
        font-family: semiBold;
        font-size: 0.9em;
        color: white;

        background-color: #2FA79F;

        border: none;
        border-radius: 0.3em;

        padding: 0.4em 2.5em;
        margin: 0.5em 2em 1em 0em;
    }

    button:hover{
        cursor: pointer;
        background-color: rgba(47, 167, 159, 0.86);
        transition: .5s;
    }


    @media (max-width: 1024px) {
    *{ margin: none;
       padding: none;
    }

    .conteudo{
        
        width: 20em;
        height: 14em;
    }

    .titulo{
        padding: 0.8em 1em .4em;
    
        font-size: 1.1em;
    }

    .descricao{
        font-size: 0.8em;
        line-height: 1.3em;

        padding: 0.5em 1.7em ;
    }

    input{
        font-size: 0.8em;

        margin-left: 1.7em;
        margin-bottom: 1em;
    }

    button{
        font-size: .7em;

        padding: 0.4em 2.5em;
        margin: 0.5em 2em 1em 0em;
    }

    }
`

export { Container }