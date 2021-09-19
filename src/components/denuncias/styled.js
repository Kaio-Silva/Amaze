import styled from 'styled-components'


const Container = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: left;
    align-items:center;

    font-family:medio;
      font-size: 1em;

    border:1px solid black;
    border-radius:0.5em;

    background-color: #DFF1FB;
   
    height:3em;
    width:99%;
    
    margin-bottom:1.3em;
    margin-right:1em;

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


    @media(max-width:1200px){
        width: 50em;

     *{ 
         margin: 0px;
    }

    @media(max-width:896px){
     width:30em;

    }

    
     @media(max-width:556px){
     width:19em;

    }


  .descricao-conteudohdc{
        font-size: 0.8em;
        height: 1em;
        width: 1em;
    }
    .descricao-conteudohdce{
        font-size: 0.8em;
        height: 1em;
        width: 1em;
    }

    
    .immg{
        height: 1em;
        width: 1em;
        margin: 0em;
    }

    .img1{
        height: 1em;
        width: 1em;
    }


}
`
 




export { Container }