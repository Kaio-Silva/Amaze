
import styled from 'styled-components'


const Container = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;

    font-family:semiBold;
    font-size:1em;

    border:1px solid black;
    border-radius:0.5em;

    background-color: rgba(107, 186, 181, 0.4);
   
    height:3em;
    width:98%;
    
    margin-bottom:1.3em;
    margin-right:1em;
    margin-left:.5em;

    .agrupar{
        display:flex;
        flex-direction: row;
        justify-content: left;
        align-items:center;
    }

    button{
        background-color:transparent;
        border:none;
        width:2em;
        display: block;
    } 


    .barra-conteudohdc{
        align-items: center;
    width:0.1em;
    height: 2.3em;
    background-color: #2ba083;
}
  .descricao-conteudohdc{
     padding-right:1em;
     padding-left:0.9em;
    font-size:1em;
    }

    .descricao-conteudohdc1{
     padding-right:1.5em;
     padding-left:1.5em;
    }

    .descricao-conteudohdcc{
     padding-right:1.5em;
     padding-left:1.5em;
     font-size:12.8px;
    }

    .descricao-conteudohdce{
     padding-right:8em;
     padding-left:1.5em;
     font-size: 12.8px;
    }

     .alinhando-imagem{
        display:flex;
        flex-direction:row;
        margin-left:20em;
 
    }

    .img1{
        margin-right:1em;
    }

    button{
        margin-right:0.6em;
        cursor: pointer;
    }

    @media(max-width:1350px){
       width: 70em;
       margin-right:1em;   
    }



    @media(max-width:1240px){
       
        width: 99%;

    .alinhando-imagem{
        margin-left:1em;
    }


  .descricao-conteudohdc{
        font-size: 0.8em;
        height: 1em;
        width: 18em;
        margin-bottom: 0.4em;
    }

    .descricao-conteudohdc1{
        font-size: 0.8em;
        height: 1em;
        width: 18em;
        margin-bottom: 0.4em;
    }
   
  
    .descricao-conteudohdcc{
     margin-bottom: 0.4em;
    }
    
    


}
@media(max-width:913px){
     width: 100%;

     margin: 0.5em 0em;
     padding: 0.5em;

     .alinhando-imagem{
        margin-left:1.9em;
    }

     .descricao-conteudohdc{
        font-size: 0.8em;
        height: 1em;
        width: 14em;
        padding:0.3em;
    }

    .descricao-conteudohdc1{
        font-size: 0.8em;
        height: 1em;
        width: 7em;
        padding:0.3em;
    }

    .descricao-conteudohdcc{
        font-size: 0.8em;
        height: 1em;
        width: 13em;
        padding:0.3em;
        width:4em
    }
    .descricao-conteudohdce{
        font-size: 0.8em;
        height: 1em;
        width: 0em;
        padding:0em;
        margin-left:1em;
        margin-right:2em;
    }
    .barra-conteudohdc{
        display: none;
    }

    }

    
    @media(max-width:556px){
        width: 90%;

     .alinhando-imagem{
        margin-left:0.5em;
    }

    button{
        margin:0;
    }

    .img1{
        width:1.3em;
        height:1.3em;
    }

    .img{
        width:1.3em;
        height:1.3em;
    }

     .descricao-conteudohdc{
        font-size: 0.7em;
        height: 1em;
        width: 11em;
        padding:0.3em;
    }

    .descricao-conteudohdc1{
        font-size: 0.7em;
        height: 1em;
        width: 7em;
        padding:0.3em;
    }

    .descricao-conteudohdcc{
        font-size: 0.7em;
        height: 1em;
        width: 13em;
        padding:0.3em;
        width:2em
    }
    .descricao-conteudohdce{
        font-size: 0.7em;
        height: 1em;
        width: 0em;
        padding:0em;
        margin-left:2.4em;
        margin-right:1.9em;
    }
    

    }



`




export { Container }