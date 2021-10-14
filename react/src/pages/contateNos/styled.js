import styled from "styled-components";


const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #6BBAB5;
    background-size: 100% 100%;
    background-repeat: no-repeat;

    color: white;
    

    height: 100vh;

    .Logo {
        display: flex;
        align-items: flex-start;
        width: 98%;

        margin-bottom: 1em;
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
        background-color: #2FA79F;
       
        font-family: regular;

        width: 40%;
        height: 100%;
    }

    .AlinharConteudo{
        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: space-between;

        height: 70%;
    }

   .DescLoginA{
       font-family: semiBold;
       font-size: 1.2em;
       color: white;

       text-align: center;

       width: 16em;
       margin-bottom: 2em;
   }

   span{
       font-family: medio;
       margin-right: .5em;
   }

   .Alinhar{
       display: flex;
       flex-direction: row;
       align-items: center;
       justify-content: space-between;

       width: 90%;

       margin: 0em 1em;
   }

   .Descricao{
       display: flex;
       align-items: center;
       width: 88%;
   }
   
   .ConteudoLogin{
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: space-between;

     
       width: 67%;
   }

   .TituloLogin{
    margin-bottom: 1.5em;
    font-family: medio;
    font-size: 1.5em;
    color: #0FA882;
   }

   .FormLogin{
       width: 85%;
   }

   .AlinhandoInputs{
       display: flex;
       flex-direction: row;
       justify-content: space-between;
   }

    .input{
        width: 22em;
        margin-right:1em;
    }

    .tamanho{
        width:23em;
    }
    
   .Inputs{
       display: flex;
       flex-direction: column;
       justify-content: space-around;

       height: 18em;
   }

   .TextArea{
       height: 12em;
   }


   .ajustarBotao{
    margin-top: .5em;
    padding: .7em 0em;
    width: 8em;
    font-size: .9em;
   }
   .imagens{
    flex-direction: row;
    width: 15em;
    margin-left: 10em;
    margin-top: 1em;
   }

   .botao {   
       text-align: right;
   }

   @media (max-width: 1024px){
        justify-content: space-around;

        .Logo{
            justify-content: center;
        }
        
        .BoxLogin{
            display: flex;
            flex-direction: column;
            align-items: center;

            border-radius: .5em;
            height: 70%;
        }
    
        .ConteudoAmaze{
            display: none;
        }

        .ConteudoLogin{
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 15%;
            width: 85%;
        }

        .TituloLogin{
           font-size: .9em;
           margin-bottom: 0em;
           margin-top: 2em;
        }

        .FormLogin{
            height: 5%;
            width: 100%;
        }

        .Inputs{
            height: 19em;
        }

        .AlinhandoInputs{
            flex-direction: column;
            height: 5.61em;
        }

        .input{
            width: 100%;
        }
        .tamanho{
            width:100%;
        }

        .Titulo{
            font-size: 0.9em;
        }

        .ajustarBotao{
            margin-top: 2em;
            width: 100%;
        }

   }
`

export { Container }