import styled from "styled-components";


const Container = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-image: url('/assets/images/fundo_adm.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    

    height: 100vh;

    .link{
        font-family: regular;
        font-size: 0.9em;
        color: black;

        text-decoration: none;
    }
    .link:hover{
        cursor: pointer;
    }

    .BoxLogin{
        display: flex;
        flex-direction: row;
        align-items: center;

        width: 80%;
        height: 80vh;

        box-shadow:0em 0em 1em 0.2em rgba(0, 0, 0, 0.25);

        background-color: white;
    }

    .ConteudoAmaze{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background-color: #011640;

        width: 33%;
        height: 100%;
    }

   .DescLogin{
       font-family: RelugarItalic;
       font-size: 1.1em;

       color: white;

       width: 16em;
       padding-left: 2em;
       padding-top: 1em;
   }

   .ConteudoLogin{
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: space-between;

       height: 53%;
       width: 67%;
   }

   .TituloLogin{
       font-family: semiBold;
       font-size: 1.1em;
   }

   .FormLogin{
       width: 55%;
   }

   .Inputs{
       margin-top: 1em;
       margin-bottom: .8em;
   }

   .senha::placeholder{
    letter-spacing: 0px;
    }

   .Titulo{
       font-family: medio;
       font-size: 1em;
       margin-left: 1.5em;
       margin-bottom: 0.6em;
   }


   .alinhandoLinks{
       display: flex;
       align-items: center;
       justify-content: space-between;
       width: 100%;
   }

   .ajustarBotao{
       margin-top: 1em;
   }
`

export { Container }