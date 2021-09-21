import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;


    height: 100vh;

   .pt1{
       background-color: #24BF99;
       display: flex;
       align-items: center;
       flex-direction: column;
       height: 100%;
       width: 33%;
       justify-content: center;
   }

   .conteudo1{
       background-color: #24BF99;
       display: flex;
       align-items: center;
       flex-direction: column;
       height: 100%;
       width: 100%;
   }

   .login{
        background-color: white;
        display: flex;
        align-items: center;
        flex-direction: row;
        height: 50%;
        width: 80%;
        
       
        box-shadow: 0.1em 0.10em 0.4em 0.6em rgba(0, 0, 0, 0.25);
   }

   .pt2{
        display: flex;
        flex-direction: column;
        background-color: white;
        align-items: center;
        height: 100%;
        width: 50%;
        justify-content: center;
       
   }

   .conteudo2{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background-image: url('/assets/images/login_fundo.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;

        height: 100%;
         width: 100%;
   }
 
   .text1{
   
   }
   button {
       color: white;
       background-color: #24BF99;
       height: 30px;
       width: 200px;
   }

`

export { Container }