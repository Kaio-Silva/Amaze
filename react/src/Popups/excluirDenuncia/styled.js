import styled from 'styled-components'


const Container = styled.div`
display: flex;
justify-content: center;
margin-top: 10em;
background-color: transparent;

textarea::placeholder{
    color: #24BF99;
    text-align:left;
    padding-top:1em;
    padding-left:1em;
    
}

textarea{
border: 1px solid #24BF99;
outline: none;
}

.abox{
    background-color: white;
    box-shadow:  0px  1px 10px  #888888;
    border-radius: 1em;
    width:30%;
    height:16em;
    display:flex;
    flex-direction: column;
   
}

.cabecalho{
    margin-top: 0.8em;
    display: flex;
    justify-content: right;
    margin-right: 0.8em;
}

.img{
    text-align: center;
    margin-bottom: 1em;
}

.titulo{
    text-align: center;
    font-weight: normal;
    font-size:1.5em ;
    margin-bottom: 1.3em;
}

.textaa textarea{
    text-align: center;
    width:270px;
    height:116px;
    border-radius: 1em;
    text-decoration: none;
    resize: none;
}

.textaa {
    text-align: center;
    margin-bottom:1.5em;
}

.botoes button{
    background-color:black;
    border: none;
    width:140px;
    height:50px;
    border-radius: 0.5em;
    color:white;
    font-size: 1em;
}

.botoes{
 text-align:center;
 margin-right:1.3em;
 margin-left:1.3em;
 display:flex;
 justify-content:space-between;
}

.img img{
    width:4em;
    height:4em;
}


`


export { Container }