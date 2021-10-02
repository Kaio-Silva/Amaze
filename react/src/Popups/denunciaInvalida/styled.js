import styled from 'styled-components'


const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0,0,0,0.2);
height: 100vh;
width: 100%;
position: fixed;
top:0;
left:0;
font-family: regular ;
textarea::placeholder{
    color: #24BF99;
    text-align:left;
    padding-top:1em;
    padding-left:1em;
    font-family: regular;
}

textarea{
border: 1px solid #24BF99;
outline: none;
}

.abox{
    background-color: white;
    box-shadow:  0px  1px 10px  #888888;
    border-radius: 1em;
    width:28%;
    height:26em;
    display:flex;
    flex-direction: column;
    position: relative;
}

.cabecalho{
    margin-top: 0.8em;
    display: flex;
    justify-content: right;
    margin-right: 0.8em;
}

.cabecalho button{
    cursor: pointer;
}

.img{
    text-align: center;
    margin-bottom: 1em;
}

.titulo{
    text-align: center;
    color:#24BF99;
    font-weight: normal;
    font-size:1.5em ;
    margin-bottom: 1.2em;
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

.botao button{
    background-color:#24BF99;
    border: none;
    width:200px;
    height:50px;
    border-radius: 1.5em;
    color:white;
    font-size: 1em;
}

.botao{
 text-align:right;
 margin-right: 0.8em;
}

.img img{
    width:3.5em;
    height:3.5em;
}
button{
    background-color: transparent;
    border: none;
}

@media(max-width:1316px)
{
    .abox{
     width:23.5em;
    }
}
`


export { Container }