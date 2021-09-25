import styled from 'styled-components'


const Container = styled.div`
display: flex;
justify-content: center;
margin-top: 12em;
background-color: transparent;

.abox{
    background-color: white;
    box-shadow:  0px  1px 10px  #888888;
    border-radius: 1em;
    width:29em;
    height:23em;
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
    margin-bottom: 0.5em;
}
.img img{
    width:3.5em;
    height:3.5em;
}


.titulo{
    text-align: center;
    color:#24BF99;
    font-weight: normal;
    font-size:1.5em ;
    margin-bottom: 1.2em;
}

.aval{
    text-align:center;
    margin-bottom: 1.7em;
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


`


export { Container }