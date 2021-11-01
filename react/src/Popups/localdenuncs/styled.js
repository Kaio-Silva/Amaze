import styled from 'styled-components'

const Container = styled.div`
display: flex;
justify-content: right;
align-items: center;
background-color: rgba(0,0,0,0.2);
height: 100vh;
width: 100%;
position: fixed;
top:0;
left:0;
font-family: regular;
.abox{
    box-shadow:  0px  1px 10px  #888888;
    width:35%;
    height:100%;
    background-color: white;
}


button{
    background-color: transparent;
    border:none;
    cursor: pointer;
}
.denuncs{
    
    overflow-y: auto;
    height: 40em;
    
}

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

.Cabecalho{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom:2.5em;
}

.txt{
    margin-left:1.2em;
    margin-top: 1.2em;
    font-size:1.7em;
}

.x{
    margin-right:1.2em;
    margin-top: 1.9em;
}

.b1{
    display:flex;
    flex-direction: row;
    justify-content: center;
    height: 14em;
}


.b2{
    display:flex;
    flex-direction: row;
    justify-content: center;
   
}


.titulob{
    font-size:1.2em;
    margin-bottom:0.3em;
}

.linha{
    height:225px;
    width:0.8px;
    background-color:rgba(0, 0, 0, 0.3);
    margin-right: 1.9em;
    margin-left: 1.9em;
}

.linha2{
    height:220px;
    width:0.8px;
    background-color:rgba(0, 0, 0, 0.3);
    margin-right: 1.9em;
    margin-left: 1.9em;
}

.linhah{
    height:1px;
    width:100%;
    background-color:rgba(0, 0, 0, 0.3);
    margin-left: 0.9em;
}

.bloco{
    margin-top: 1.5em;
    justify-content: left;
    height: 10em;
    width:10.8em;
}

.aval img{
    width:4em;
    height:auto; 
}

.aval{
    margin-right:6em;
    margin-bottom:0.3em;
}

.descr{
    margin-bottom:0.3em; 
}

.date{
    margin-bottom:1.4em; 
    font-size: 13px;
    font-weight: bold;
}

.botao button{
    background-color: #24BF99;
    border:none;
    color: white;
    width: 180px;
    height: 32px;
    border-radius: 0.5em;
}

.botao{
    margin-bottom: 2.5em;
}

@media(max-width: 501px){

    .abox{
        width:100%;
    }
    
   .bloco{
       width:20em;
       background-color: ;
    
   }
   #lado{
       margin-left:4em
   }
   #lado2{
       margin-right:2em;
   }
   #lado3{
    margin-left:2em;
   }

   #lado4{
       margin-left:2em;
   }
    .titulob{
        font-size:16px;
    }
    .botao button{
    
    width: 70%;
    
}
.linha{
    display:none;
}
.linha2{
    display:none;
}

.b1{
    padding-top:2em;
}
#lado5{
    margin-left:2em;
}
}

    @media screen and (max-width: 940px) and (min-width: 501px){
    .abox {width: 70%}
}

@media(max-width: 1200px){


   .bloco{
       width:20em;
       background-color: ;
    
   }
   #lado{
       margin-left:4em
   }
   #lado2{
       margin-right:2em;
   }
   #lado3{
    margin-left:2em;
   }

   #lado4{
       margin-left:2em;
   }
    .titulob{
        font-size:16px;
    }
    .botao button{
    
    width: 70%;
    
}
.linha{
    display:none;
}
.linha2{
    display:none;
}

.b1{
    padding-top:2em;
}
#lado5{
    margin-left:2em;
}

}
`


export { Container }