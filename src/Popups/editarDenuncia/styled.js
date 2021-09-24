import styled from 'styled-components'


const Container = styled.div`
display: flex;
justify-content: center;
margin-top: 7em;
background-color: transparent;

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


.ld{
    margin-right:1.2em;
}


.le{
    display:flex;
    flex-direction: row;
    align-items: center;
    margin-left:1.2em;
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
}


.abox{
    background-color: white;
    box-shadow:  0px  1px 10px  #888888;
    border-radius: 1em;
    width:30%;
    height:33em;
    display:flex;
    flex-direction: column;
}

.checks{
    margin-left:1em;
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

.botao button:hover{
background-color: white;
color: black;
} 

`


export { Container }