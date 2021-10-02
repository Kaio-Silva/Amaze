import styled from "styled-components";


const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #6BBAB5;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    

    height: 100vh;

    .cabecalho {
        justify-content:left;
        width:100%;
    }

    .link{
        font-family: regular;
        font-size: 0.9em;
        color: #0FA882;

        text-decoration: none;
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
   
height:16px;
top:150px;
left: 234px;
font-size: 2em;
color: #0FA882;
   }

   .FormLogin{
       width: 55%;
      
   }

   .Inputs{
       margin-top: 1em;
       margin-bottom: .8em;
   }


   .ajustarBotao{
       margin-top: 2em;
       border-radius: 120px;
       width:114px; 
       height:55px;
     
     

   }
   .imagens
   {
    flex-direction: row;
   }
   .botao {
      
       text-align: right;
   }

   @media (max-width: 1024px){
        

        .LogoResponsiva{
            display: block;
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

   }
`

export { Container }