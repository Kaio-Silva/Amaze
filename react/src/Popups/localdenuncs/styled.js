import styled from 'styled-components'

const Container = styled.div`
display: flex;
background-color: transparent;
height:100vh;

.abox{
    box-shadow:  0px  1px 10px  #888888;
    width:35%;
    height:100%;
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
}

.bloco{
    margin-top: 1.5em;
    justify-content: left;
    height: 10em;
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


`



export { Container }