
import styled from 'styled-components'


const Container = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: left;
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
    height: 3em;
    background-color: #2ba083;
}
  .descricao-conteudohdc{
      margin-left:1.5em;
      text-align:left;
    width:28em;
    font-size:1em;
    }

    .descricao-conteudohdc1{
     width:18em;
     text-align: center;
    }

    .descricao-conteudohdcc{
    width:12em;
    text-align: center;
     font-size:12.8px;
    }

    .descricao-conteudohdce{
    width:8em;
    text-align: center;
     font-size: 12.8px;
    }

     .alinhando-imagem{
        display:flex;
        flex-direction:row;
        width:5em;
 
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

.agrupar{
    width:78em;
}
.alinhando-imagem {
    width:30em;
    margin-left:5em;

}
.descricao-conteudohdc{}

    @media(max-width:1240px){
       
        width: 99%;
    

.agrupar{
    width:32em;
    text-align: center;
    
}

  .descricao-conteudohdc{
        font-size: 0.7em;
        height: 1em;
        width: 20em;
        margin-bottom: 0.4em;
    }

    .descricao-conteudohdc1{
        font-size: 0.7em;
        height: 1em;
        width: 18em;
        margin-bottom: 0.4em;
    }
   .descricao-conteudohdce{
    font-size: 0.7em;
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
        margin-left:1.5em;
        width:4em;
    }

     .descricao-conteudohdc{
        font-size: 0.8em;
        height: 1em;
        width: 15em;
       text-align:center;
    }

    .descricao-conteudohdc1{
        font-size: 0.8em;
        height: 1em;
        width: 6em;
       
    }

    .descricao-conteudohdcc{
        font-size: 0.8em;
        height: 1em;
       
        padding:0.3em;
        width:13em;
    }
    .descricao-conteudohdce{
        font-size: 0.8em;
        height: 1em;
        width: 10em;
        padding:0em;
        
    }
    .barra-conteudohdc{
        display: none;
    }

    }

    
    @media(max-width:558px){
        width: 90%;

     .alinhando-imagem{
        margin-left:2em;
        height: 1em;
        width:12em;
    }
    .agrupar  {
        width:28em;
       flex-direction:center;
        padding:1em;
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
        height: 3em;
        width: 17em;
        align-items:center;
        
    }

    .descricao-conteudohdc1{
        font-size: 0.7em;
        height: 3em;
        width: 6em;
        padding:0.3em;
    }

    .descricao-conteudohdcc{
        font-size: 0.7em;
        height: 3em;
       
        width:10em;
    }
    .descricao-conteudohdce{
        font-size: 0.7em;
        height: 3em;
        width: 3em;
        
        
    }
    

    }



`




export { Container }