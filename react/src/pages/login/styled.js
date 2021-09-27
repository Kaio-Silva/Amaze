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
   .texto{
    font-family:extraBold;
   }
   .texto1{
    font-family:light;
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
        height: 65%;
        width: 80%;
        
       
        box-shadow: 0.1em 0.10em 0.4em 0.6em rgba(0, 0, 0, 0.25);
   }

   .pt2{
        display: flex;
        flex-direction: column;
        background-color: white;
        align-items: center;
        height: 100%;
        width: 70%;
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
       height: 40px;
       width: 300px;
       border:none;
       margin-top: 20px;
   }

.senha input{
    height: 40px;
    width: 300px;
}

.senha {
    height: 60px;
}

.email input{
    height: 40px;
    width: 300px;
}
.ptcadastro {
    display: flex;
    flex-direction: row;
    justify-content:space-between;
}

.esqueceu {
    padding-right: 115px;
}

.esqueceu > Link{
    color: black;
    text-decoration: none;
}

.nm_login{
    font-family: semiBold;
    margin-bottom: 20px;
}


`

export { Container }