

import styled from "styled-components";



const Container = styled.div`

  display:flex;
  flex-direction: column;
  font-family:  regular;  
  height:100vh;

  @keyframes rotate {
        0%{ 
            transform: rotate(0deg); 
        }
        25%{
            transform: rotate(55deg);
        }
        50%{
            transform: rotate(0deg);
        }
        75%{
            transform: rotate(-55deg);
        }
        100%{ 
            transform: rotate(360deg);
        }
    } 
  
.cabecalho-hd{
    display:flex;
    flex-direction: row;
  
    background-color:#6BBAB5;
    justify-content: space-between;
    background-color: #6BBAB5;
    height:4.5em;
    align-items: center;
    
}

.menubutt{
    display: none;
}

.img-logohd img{
    animation: rotate 2.5s;
    height:2.8em;
    width:2.8em;
    margin-right:0.5em;
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
    padding-right: 2.9em;
}

.elements-desc-cabhd{
    font-weight:bold;
    font-size:1em;
    padding-right:0.9em
}

.barrahd{
    width:0.1em;
    height: 1.3em;
    background-color: #096C54;
    margin-right:0.7em;
}


.escrita-logohd{
font-size:1.3em;
font-weight:bold;
margin-bottom:0.1em;
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
width:20em;
}



.registros-denuncias-hd{
    display:flex;
    flex-direction: column;
    width:94.5%;
    height:37em;
    align-items:center;
    box-shadow: 3px 3px 15px #888888;
    
}


.barra-inicialhd{
display:flex;
flex-direction:row;
background-color: rgba(107, 186, 181, 0.4);
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
    #style-2::-webkit-scrollbar-track
{
	border-radius: 10px;
	background-color: transparent;
    
}

#style-2::-webkit-scrollbar
{
	width: 12px;
	background-color: transparent;
    
}

#style-2::-webkit-scrollbar-thumb
{
	border-radius: 18px;
	background-color: transparent;
    border: 3.5px solid transparent;
  
}

    .elements-desc-cabhd{
        display:none;
    }

    .menubutt{
        display: block;
    }

    .barrahd{
        display: none;
    }

}


@media(max-width:390px){

    .titulo-conteudohd{
        font-size: 1.3em;
    }

    .registros-denuncias-hd{
        width: 90%;
        height: 76vh;

        box-shadow: 3px 3px 11px #888888;
    }
    .denuc{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 0.9em;

        height: 99%;
    }



}

`


export { Container }