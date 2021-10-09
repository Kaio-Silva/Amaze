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

    .E-mail{
        margin-right: 3%;
    }

    .Facebook{
        margin-right: 4%;
    }

    .ConteudoAmaze{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background-color: #2FA79F;
       

        width: 40%;
        height: 100%;
    }

   .DescLoginA{
       font-family: extraBold;
       font-size: 1.2em;
       color: white;
       width: 16em;
       padding-left: 4em;
       margin-top: 0em;
       margin-bottom: 5em;
       margin-left:2.4em;
   }
   .DescLoginB{
       font-family: RelugarItalic;
       font-size: 1.1em;

       color: white;
       width: 19.4em;
       padding-left: 0em;
       padding-top: 0em;
   }
   .DescLoginC{
       font-family: RelugarItalic;
       font-size: 1.1em;

       color: white;
       width: 19.4em;
       padding-left: 0em;
       padding-top: 2em;
   }
   .DescLoginD{
       font-family: RelugarItalic;
       font-size: 1.1em;

       color: white;
       width:19.4em;
       padding-left: 0em;
       padding-top: 2em;
   }

   .ConteudoLogin{
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: space-between;

     
       width: 67%;
   }

   .TituloLogin{
   

top:3em;
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
    width: 15em;
    margin-left: 10em;
    margin-top: 1em;
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