import styled from "styled-components";


const Container = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-image: url('/assets/images/login_fundo.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    

    height: 100vh;

    .LogoResponsiva{
        display: none;
    }

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

        background-color: #24BF99;

        width: 33%;
        height: 100%;
    }

   .DescLogin{
       font-family: RelugarItalic;
       font-size: 1.1em;

       width: 16em;
       padding-left: 2em;
       padding-top: 1em;
   }

   .ConteudoLogin{
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: space-between;

       width: 67%;
   }

   .TituloLogin{
       font-family: semiBold;
       font-size: 1.7em;
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

   @media (max-width: 1024px){
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url('/assets/images/FundoLoginReps.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;

        .LogoResponsiva{
            display: block;
        }

        .BoxLogin{
            display: flex;
            flex-direction: column;
            align-items: center;

            height: 70%;

            border-radius: 1em;
            margin-top: 3em;
        }

        .ConteudoAmaze{
            display: none;
        }

        .ConteudoLogin{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 80%;
        }

        .TituloLogin{
            margin-bottom: 1.5em;
        }

        .FormLogin{
            height: 65%;
            width: 100%;
        }

        .Titulo{
            font-size: 0.9em;
        }

        .link{
            font-size: 0.8em;
        }

        .ajustarBotao{
            margin-top: 3em;
            font-size: 0.9em;
        }
   }


   @media(min-width: 1920px){

        .DescLogin{
            font-size: 1.3em;
        }

        .TituloLogin{
            font-size: 1.5em;
            margin-bottom: 3em;
        }

        .Titulo{
            font-size: 1.3em;
        }

        .Padrao{
            font-size: 1.3em;
            padding: 1.2em 1.5em;
        }

        .senha{
            font-size: 1.3em;
            padding: 1.2em 1.5em;
        }

        .link{
            font-size: 1.1em;
        }

        .ajustarBotao{
            margin-top: 3em;
            font-size: 1.3em;
        }
   }

`

export { Container }