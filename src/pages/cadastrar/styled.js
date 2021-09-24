import styled from "styled-components";

const Container = styled.div`
   
background-image: url('/assets/images/Frame 77 (1).png');
background-size:cover;



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
    height:48em;
    background-color:#fff;
    margin-left:27em;
    padding: 2em 3em;
    box-shadow: 0.5em 0.8em 0.5em 0.1em rgba(0, 0, 0, 0.25);
}
.titulo-dentro spam{
    font-family: medio;
    font-size: 1.4em;

}
.mae-botao{
    width:10em;
    height:6em;
}
.botao{
    width:28.8em;
    height:3.5em;
    border:none;
    background-color:#6BBAB5;
    font-family: semiBold;
    color:#fff;
    cursor:pointer;
}
.titulo-nome spam{
    font-family: medio;
    font-size:0.9em;
}
.titulo-nome {
    padding-top:2em;
    margin-left:0.8em;
}
.input input{
    height:4em;
    width: 100%;
    font-family: regular;
    font-size: 0.8em;
    color: #3D3D3D;

    border: solid 2px #E2DEDE;  
    border-radius: 0.3em;

    padding: 0.8em 1em;
   
    margin-bottom: 2em;
    width: 100%;
}
.input{
    padding-top:0.8em;
}
@media (max-width: 1024px) {
    height: 115vh;
    background-image: url('/assets/images/Img-Fundo-Cadastrar.png');
    background-size: 100% 100%;

    .cadastro-inputs{
        width: 19em;
        height: 38em;;
        margin-left: 2em;
        margin-top: 2em;
        box-shadow: 0em 0em 0.7em 0.3em rgba(0, 0, 0, 0.25);
        border-radius:3%;
    }
   .logo img{
       width:2.8em;]
   }
   .logo{
    margin-top:2em;
   }

    .logo{
        margin-left: 8em;
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