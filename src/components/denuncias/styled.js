import styled from 'styled-components'


const Container = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: left;
    align-items:center;

    font-weight: bold;
    font-size:1em;

    border:1px solid black;
    border-radius:0.5em;

    background-color: #DFF1FB;
   
    height:3em;
    width:99%;
    
    margin-bottom:1.3em;
    margin-right:1em;


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


    @media(max-width:1200px){
        width: 19em;

     *{ 
         margin: 0px;
    }

    
    .barra-conteudohdc{
        height: 1em;
        width: 1em;
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