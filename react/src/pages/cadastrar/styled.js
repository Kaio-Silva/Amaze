import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    background-image: url('/assets/images/Frame 77 (1).png');
    background-size: 100% 100%;




    .link{
        font-family: regular;
        font-size: 0.9em;
        color: ${props => props.cor === "white" ? 'white' 
                                             : props.cor === "black" ? 'black' : '#24BF99'};

        text-decoration: none;
    }
    .link:hover{
        cursor: pointer;
    }

    .TituloCadastro{
       font-family: semiBold;
       font-size: 1.1em;
       color: rgba(0, 0, 0, 0,8);
       margin-right: 0.8em;
       margin-bottom: 2em;
    }

    .conteudo{
       display: flex;
       justify-content: center;
       height: 100%;
    }


    .cadastro-inputs{
        width: 37%;
        height: 85%;
        margin:0em;
        background-color:#fff;
        padding: 1em 2em;
        box-shadow: 0em 0em 1em 0.1em rgba(0, 0, 0, 0.25);
    }

   .Inputs{
       margin-top: 0.5em;
       margin-bottom: 0.8em;
   }

   .Titulo{
       font-family: medio;
       font-size: 1em;
       margin-left: 1.5em;
       margin-bottom: 0.6em;
   }

    .mae-botao{
        width: 100%;
        margin-top: 1em;
        margin-bottom: 1em;
    }

    .ajustarBotao{
        width: 100%;
    }


@media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: url('/assets/images/CadastroReps.png');
    background-size: 100% 100%;

    .conteudo{
        width: 80%;
    }
    .TituloCadastro{
            margin-bottom: 0.6em;
        }


    .cadastro-inputs{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 92%;
        margin-top: 1em;
        margin-left: 0em;
        padding: 2em 1.5em;
        box-shadow: 0em 0em 0.7em 0.3em rgba(0, 0, 0, 0.25);
        border-radius: 1em;
    }

    .Inputs{
        margin-bottom: 0.5em;
        width: 100%;
    }

    .Titulo{
        font-size: 0.8em;

    }

    .mae-botao{
        margin-top: 1.4em;
        width: 100%;
    }

    .ajustarBotao{
        width: 100%;
        font-size:0.8em;
    }
  
}

    @media(min-width: 1920px) {

        .TituloCadastro{
            font-size: 1.5em;
            margin-top: 1.7em;
            margin-left: 0.5em;
        }

        .cadastro-inputs{
            height: 86%;
        }

        .Inputs{
            margin-top: 1.5em;
            margin-bottom: 2em;
        }

        .Titulo{
            font-size: 1.2em;
        }

        .padrao{
            font-size: 1.1em;
            padding: 1.3em 1em;
        }

        .padrao::-webkit-input-placeholder {
            font-size: 1.1em;
        }

        .mae-botao{
            margin-top: 3em;
        }

        .ajustarBotao{
            font-size: 1.2em;
        }
    }


`

export { Container }