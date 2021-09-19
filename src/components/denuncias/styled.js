import styled from 'styled-components'


const Container = styled.div`
    display:flex;
    flex-direction: row;
    background-color: #DFF1FB;
    width:99%;
    justify-content: left;
    height:3em;
    align-items:center;
    font-weight: bold;
    font-size:1em;
    margin-bottom:1.3em;
    border:1px solid black;
    border-radius:0.5em;
    margin-right:1em;

    @media(max-width:1200px){
        *{ margin: 0px;}
     width:50em;
     background-color: red;

     .immg{ 
         margin-left:0em;
    }
}


    @media(max-width:896px){
     width:30em;

    }

    
    @media(max-width:556px){
     width:19em;

    }



    .barra-conteudohdc{
    width:0.1em;
    height: 2.3em;
    background-color: #2ba083;
}
  .descricao-conteudohdc{
     padding-right:1.5em;
     padding-left:1.5em;
    }
    .descricao-conteudohdce{
     padding-right:8em;
     padding-left:1.5em;
    }

    .immg{
        display:flex;
        flex-direction:row;
        margin-left:30em;
    }

    .img1{
        margin-right:1em;
    }
 
`



export { Container }