import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: rgba(47, 167, 159, 0.65);

    height: 100vh;

   .pt1{
       background-color: #24BF99;
       display: flex;
       align-items: center;
       flex-direction: column;
       height: 100%;
       width: 50%;
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
        width: 75%;

        box-shadow: 0.5em 0.8em 0.5em 0.1em rgba(0, 0, 0, 0.25);
   }

   .pt2{
        background-color: white;
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 100%;
        width: 50%;
   }

   .conteudo2{
        background-color: white;
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 100%;
         width: 100%;
   }

`

export { Container }