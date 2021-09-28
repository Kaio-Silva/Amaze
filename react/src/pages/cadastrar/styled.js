import styled from "styled-components";

const Container = styled.div`
   
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


  .fundo{
   height:50em;
   background-color:#6BBAB5;

  }
  .Bussola{
      width:4em;
      
  }
  #suba{
      margin-top:-2em;;
  }
  .logo{
      padding-top: 1.5em;
      padding-left: 2em;
  }
  .logo img{
      padding-top:-3em;
  }
.titulo spam{
    font-family: semiBold;
    font-size:1.5em;
}
.titulo{
    float:right;
    margin-right:71em;
    margin-top:1em;
    width:40px;
}
.cadastro-inputs{
    width:30em;
    height:44em;
    background-color:#fff;
    margin-left:27em;
    margin-bottom: 1em;
    padding: 2em 3em;
    box-shadow: 0em 0em 1em 0.1em rgba(0, 0, 0, 0.25);
}
.titulo-dentro spam{
    font-family: medio;
    font-size: 1.4em;

}

   .Inputs{
       margin-top: 1em;
       margin-bottom: 1.5em;
   }

   .Titulo{
       font-family: medio;
       font-size: 1em;
       margin-left: 1.5em;
       margin-bottom: 0.6em;
   }

.mae-botao{
    width:10em;
    height:6em;
}
.botao{
    width:22.5em;
    height:3.5em;
    border:none;
    background-color:#6BBAB5;
    font-family: semiBold;
    font-size: 1.2em;
    color:#fff;
}

.botao:hover{
    cursor:pointer;
    background-color: rgba(87, 166, 161, 1);
    transition: 1.5s;
}



@media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 115vh;
    background-image: url('/assets/images/Img-Fundo-Cadastrar.png');
    background-size: 100% 100%;

    .cadastro-inputs{
        width: 19em;
        height: 38em;
        margin-top: 2em;
        margin-left: 0em;
        box-shadow: 0em 0em 0.7em 0.3em rgba(0, 0, 0, 0.25);
        border-radius:3%;
    }
    
    .botao{
        width:20.2em;
        height:3em;
        margin-left:-1em;
        font-size:12px;
    }

    .titulo-dentro{
        margin-left:6em;
        width:6.8em;
        font-size:11px;
    }
    .titulo-nome{
        font-size:13px;
    }
    .input input{
        width:19em;
        height:3.8em;
        margin-left:-1em;
    }
    #suba{
        margin-top:-2.9em;;
    }
    .fundo{
        margin-top:10em;
    }
}

`

export { Container }