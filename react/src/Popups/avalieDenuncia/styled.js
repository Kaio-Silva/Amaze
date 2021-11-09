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

.cabecalho button{
    cursor: pointer;
}

.abox{
    background-color: white;
    box-shadow:  0px  1px 10px  #888888;
    border-radius: 1em;
    width:29em;
    height:23em;
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

.img{
    text-align: center;
    margin-bottom: 0.5em;
}
.img img{
    width:3.5em;
    height:3.5em;
}

button{
    background-color: transparent;
    border: none;
}

.titulo{
    text-align: center;
    color:#24BF99;
    font-weight: normal;
    font-size:1.5em ;
    margin-bottom: 1.2em;
}

.star{
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 2em;
}

.botao button{
    background-color:#24BF99;
    border: none;
    width:358px;
    height:65px;
    border-radius: 1.5em;
    color:white;
    font-size: 1.2em;
}

.botao{
 text-align:center
}

button:hover{
    cursor: pointer;
}

@media(max-width:1316px)
{
    .abox{
        width: 25em;
    }
}


`


export { Container }