import styled from 'styled-components'


const Container = styled.div`
display: flex;
justify-content: left;
align-items: center;
background-color: rgba(0,0,0,0.2);
height: 100vh;
width: 100%;
position: fixed;
top:0;
left:0;
font-family: regular;
color:#24BF99;


button{
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.texto{
    display: block;
}

.ajustarTaxas{
    display: flex;
    flex-direction: row;
}

.amz{
    margin-left:0.3em;
    margin-bottom: 0.3em;
    font-size:1.4em;
    color:#24BF99;
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
input::placeholder{
    color:#24BF99;
    font-family: regular;
}


.forms{
    margin-left:1.4em;  
}

.titulo-form{
    margin-top:1em;
    margin-bottom: 1em;
    font-size: 1.4em;
    font-family: regular;
    color: black;
}

.form1 input{
border: 1px solid #24BF99;
border-radius: 0.5em;
width:95%;
height:2.5em;
margin-bottom:0.9em;
}

.form2 input{
    border: 1px solid #24BF99;
border-radius: 0.5em;
width:95%;
height:2.5em;
margin-bottom:1.3em;
}

.teext textarea{
    width:95%;
    height:9em;
    border-radius: 0.5em;
    border: 1px solid #24BF99;
    resize: none;
    font-family: regular;
}

textarea::placeholder{
    color:#24BF99;
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
    height:100vh;
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
    background-color: #24BF99;;
    width: 1em;
    height: 1em;
    border-radius: 1.2em;
    display: flex;
    justify-content: center;
    align-items: center;
    
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
    border:none;
    color: white;
    background-color:#24BF99;;
    font-size: 1em;
}

.botao{
    margin-top: 1.5em;
}

.taxas{
    display: flex;
    flex-direction: column;
    margin-left:3em ;
}

.tituloco{
    color: black;
    font-size: 1.3em;
    margin-top: 1.6em;
    margin-bottom: 0.7em;
}


.cores{
    display: flex;
    flex-direction: column;
}


.bloco{
    display: flex;
    flex-direction: row;
    margin-left: 1.9em;
    align-items:center;
}


.cor{
    width:26px;
    height: 11px;
    background-color: red;
    border-radius: 16px;
    margin-right: 0.7em;
}


.cor2{
    width:26px;
    height: 11px;
    background-color: #FFA800;
    border-radius: 16px;
    margin-right: 0.7em;
}


.cor3{
    width:26px;
    height: 11px;
    background-color:#FAFF00;
    border-radius: 16px;
    margin-right: 0.7em;
}


.cor4{
    width:26px;
    height: 11px;
    background-color:#14FF00;
    border-radius: 16px;
    margin-right: 0.7em;
}

.indice{
    color: black;
    font-size: 1em;
}

.qtddenunc{
    margin-left: 2em;
    color: black;
}

@media(max-width:1024px){
    .abox{
        width:25em;
}

.taxas{
        margin-left:1.5em;
    }

    .checks{
     margin-left: 0em;
    }


}



`


export { Container }