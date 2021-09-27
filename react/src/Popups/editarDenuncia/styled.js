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


.amz{
    margin-left:0.3em;
    margin-bottom: 0.3em;
    font-size:1.4em;
}

.cabecalho{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top:0.5em;
}

.img img{
    width:4.5em;
    height: 4.5em;
}
.ld{
    margin-right:1.2em;
    
}

.ld img{
    cursor: pointer;
}


.le{
    display:flex;
    flex-direction: row;
    align-items: center;
    margin-left:1.2em;
    width:18em;
}

.forms{
    margin-left:1.4em;  
}

.titulo-form{
    margin-top:1em;
    margin-bottom: 1em;
    font-size: 1.4em;
}

.form1 input{
border: 1px solid black;
border-radius: 0.5em;
width:95%;
height:2.5em;
margin-bottom:0.9em;
}

.form2 input{
border: 1px solid black;
border-radius: 0.5em;
width:95%;
height:2.5em;
margin-bottom:1.3em;
}

.teext textarea{
    width:95%;
    height:9em;
    border-radius: 0.5em;
    border: 1px solid black;
}

.teext {
    margin-bottom: 2em;
}

.l1{
    display: flex;
    flex-direction: row;
    margin-right: 0.6em;
}

.l1 label{
    display: flex;
    flex-direction: row;
}


.l2{
    display: flex;
    flex-direction: row;
    align-items: center;
}


.l2 label{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1.5em;
}


.abox{
    background-color: white;
    box-shadow:  0px  1px 10px  #888888;
    border-radius: 0.3em;
    width:30%;
    height:37em;
    display:flex;
    flex-direction: column;
    position:relative;
}

.checks{
    
   display: flex;
   flex-direction: column;
   text-align: center;
   align-items: center;
  
}

.ty{
    appearance: none;
    background-color: black;
    width: 1em;
    height: 1em;
    border-radius: 1.2em;
    display: flex;
    justify-content: center;
    align-items: center;
    
}

.teext textarea{
    resize: none;
}

.ty:before{
content: '';
position:absolute;
background-color: white;
height: 8px;
width: 8px;
border-radius: 1.2em;
margin-left: 0%.2em;
opacity:0;
}
.ty:checked:before{
opacity: 1;

}

.botao button{
    width:240px;
    height:38px;
    border-radius: 1.5em;
    border: 1px solid black;
    color: white;
    background-color: black;
    font-size: 1em;
}

.botao{
    margin-top: 1.5em;
}



textarea::placeholder{
    font-family:regular;
}

input::placeholder{
    font-family:regular;
}


@media(max-width:1272px)
{
    .abox{
        width:23.7em;
    }
}

`


export { Container }