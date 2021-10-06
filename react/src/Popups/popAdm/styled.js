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

    cursor: initial;

.abox{
    background-color:#011640;
    box-shadow:  0px  1px 10px  #888888;
    border-radius: 1em;
    width:28%;
    height:28em;
    display:flex;
    flex-direction: column;
    align-items: center;
}
.conteudo{
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    margin-right: 1em;
}

button{
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.cabecalho{
    width: 95%;
    padding: 0.8em;
    text-align: right;
}

#style-2{
    height:24em;
    
}

#style-2::-webkit-scrollbar-track
{
	border-radius: 10px;
	background-color:white;
}

#style-2::-webkit-scrollbar
{
	width: 12px;
}

#style-2::-webkit-scrollbar-thumb
{
	border-radius: 18px;
	background-color:#011640;
    border: 2px solid white;
}

@media(max-width:1024px){
    .abox{
        width:22em;
}
}


`


export { Container }