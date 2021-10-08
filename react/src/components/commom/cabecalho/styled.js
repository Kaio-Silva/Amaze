import styled from "styled-components";



const Container = styled.div`

  display:flex;
  flex-direction: column;
  font-family:  regular;  
  height:auto;
  color: ${props => props.cor === "white" ? 'white' 
                                          : props.cor === "black" ? 'black' : '#24BF99'};
                                          

  font-size:22px ;

  height: 4.5em;

  button{
      background-color: transparent;
      border: none;
  }

  @keyframes rotate {
        0%{
            transform: rotate(0deg);
        }

        25%{
            transform: rotate(40deg)
        }

        50%{
            transform: rotate(-25deg);
        }

        75%{
            transform: rotate(360deg);
        }

        100%{
            transform: rotate(0deg);
        }
    } 
  
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


.cabecalho-hd{
    display:flex;
    flex-direction: row;
    background-color:white;
    justify-content: space-between;
    height:4em;
    align-items: center;
    
}

.menubutt{
    display: none;
}

.img-logohd img{
    animation: rotate 2.5s normal;
    height:2.8em;
    width:2.8em;
    margin-right:0.5em;
}

button{
    background-color: transparent;
    border: none;
}


.logo-cabecalhohd{
    display:flex;
    flex-direction: row;
    align-items:center;
    padding-left:2.2em;
}

.descricao-cabecalhohd{
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: end;
    padding-right: 2.9em;
    padding-top: 1em;

    width: 70%;
}

.elements-desc-cabhd1{
    display: ${props => props.home === "usar" ? "block" : "none"};
    font-family: semiBold;
    font-size: 0.9em;
    margin-right:0.9em
}

.elements-desc-cabhd1:hover{
    cursor: pointer;
}


.elements-desc-cabhd2{
    display: ${props => props.contatenos === "usar" ? "block" : "none"};
    font-family: semiBold;
    font-size: 0.9em;
    margin-right:0.9em
}

.elements-desc-cabhd2:hover{
    cursor: pointer;
}


.elements-desc-cabhd3{
    display: ${props => props.buscar === "usar" ? "block" : "none"};
    font-family: semiBold;
    font-size: 0.9em;
    margin-right:0.9em
}

.elements-desc-cabhd3:hover{
    cursor: pointer;
}


.elements-desc-cabhd4{
    display: ${props => props.criar === "usar" ? "block" : "none"};
    font-family: semiBold;
    font-size: 1.3em;
    margin-right:0.3em;

    width: 10.5em;
}

.elements-desc-cabhd4:hover{
    cursor: pointer;
}

.elements-desc-cabhd5{
    display: ${props => props.historico === "usar" ? "block" : "none"};
    font-family: semiBold;
    font-size: 0.9em;
    margin-right:0.9em;

    width: 5em;
}

.elements-desc-cabhd5:hover{
    cursor: pointer;
}

.elements-desc-cabhd6{
    display: ${props => props.login === "usar" ? "block" : "none"};
    font-family: semiBold;
    font-size: 0.9em;
    margin-right:0.9em;

    width: 5em;
}

.elements-desc-cabhd6:hover{
    cursor: pointer;
}

.elements-desc-cabhd7{
    display: ${props => props.cadastrar === "usar" ? "block" : "none"};
    font-family: semiBold;
    font-size: 0.9em;
    margin-right:0.9em
}

.elements-desc-cabhd7:hover{
    cursor: pointer;
}

.barraCabecalho{
    width: .05em;
    height: 1.3em;
    background-color: ${props => props.cor === "white" ? "white" 
                                             : props.cor === "black" ? "black" : "#24BF99"};
    margin-right:0.7em;
}


.escrita-logohd{
font-size: 1.3em;
font-family: semiBold;
margin-bottom: 0.1em;
}


.conteudo-hd{
    display: flex;
    flex-direction:column;
    align-items: center;
    padding-top: 3em;
    height:100vh;
}


.titulo-conteudohd{
font-size: 1.5em;
background-color: #DFF1FB ;
width:20em;
}



.registros-denuncias-hd{
    display:flex;
    flex-direction: column;
    width:93.5%;
    height:37em;
    align-items:center;
    box-shadow: 3px 3px 15px #888888;
    
}


.barra-inicialhd{
display:flex;
flex-direction:row;
background-color: #DFF1FB;
width:90em;
height:3.7em;
align-items:center;
box-shadow:0px 2px 4px #888888; 
font-weight: bold;
font-size:1em;
margin-bottom:1.3em;
text-align:center;
justify-content: center;
width:99.9%;
}


.descricao-conteudohd{
padding-left: 3.8em;
padding-right: 4em;;
}


.barra-conteudohd{
    width:0.1em;
    height: 3em;
    background-color: #2ba083;
}

.boxhd-scrool{
    display:flex;
    flex-direction: row;
    height:25.5em;
}

#style-2::-webkit-scrollbar-track
{
	border-radius: 10px;
	background-color: #C4C4C4;;
    
}

#style-2::-webkit-scrollbar
{
	width: 12px;
	background-color: #F5F5F5;
    
}

#style-2::-webkit-scrollbar-thumb
{
	border-radius: 18px;
	background-color: white;
    border: 3.5px solid #C4C4C4;
  
}


.denuc{
    overflow-y: auto;
    height:30em;
}


@media(max-width:1200px){
    display: block;
    flex-direction: row;
    justify-content: center;

    .cabecalho-hd{
        width: 100%;
    }

    .elements-desc-cabhd{
        display:none;
    }


    .elements-desc-cabhd1{
        display: none;
    }
    .elements-desc-cabhd2{
        display: none;
    }
    .elements-desc-cabhd3{
        display: none;
    }
    .elements-desc-cabhd4{
        display: none;
    }
    .elements-desc-cabhd5{
        display: none;
    }
    .elements-desc-cabhd6{
        display: none;
    }
    .elements-desc-cabhd7{
        display: none;
    }

    .menubutt{
        display: block;
        margin-top: .3em;
        margin-left: 0em;
    }
    
    .descricao-cabecalhohd{
        padding-right: 1.5em;
    }
        .barraCabecalho{
        display: none;
    }

}


`


export { Container }