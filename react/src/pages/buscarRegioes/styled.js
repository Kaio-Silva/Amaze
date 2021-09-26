import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-image: url('/assets/images/ImgFundo-BuscarRegioes.png');
    background-size: 100% 100%;
    align-items: center;


    @keyframes rotate {
        0%{ 
            transform: rotate(0deg); 
        }
        25%{
            transform: rotate(55deg);
        }
        50%{
            transform: rotate(0deg);
        }
        75%{
            transform: rotate(-55deg);
        }
        100%{ 
            transform: rotate(360deg);
        }
    } 

.Cabecalho-Reg{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;

    margin-top: 1.5em;
}

.Logo-Reg{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.Bussola-Req{
    animation: rotate 2.5s;
    height: 3.5em;
    width: auto;
}

.Bussola-Req:hover{
    cursor: pointer;
}

.Nome-Req{
    font-family: medio;
    font-size: 2em;
}

.Nome-Req:hover{
    cursor: pointer;
}

.Alinhando-Centro{
    display: flex;
    align-items: center;
    height: 45em;
}

.Conteudo-Reg{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 85%;
}

.Textos-Req{
    width: 21em;
}

.Titulo-Req{
    font-family: semiBold;
    font-size: 1.8em;
    margin-bottom: 0.7em;
}

.Descricao-Req{
    font-family: regular;
    font-size: 1.1em;
    line-height: 1.4em;
    width: 18em;
}

.Img-Req1{
    display: none;
}

.Img-Req2{
    height: 32em;
    width: 50em;
}

@media (max-width: 1024px) {
    *{ margin: none;
       padding: none;
    }

    .Container-Reg{
        background-image: url('/assets/images/ImgFundo2-BuscarRegiões.png');
    }
    
    .Cabecalho-Reg{
        display: flex;
        flex-direction: column;
        margin: 1em 1em;
        align-items: flex-start;
        width: none
    }

    .Logo-Reg{
        margin-bottom: 1.9em;
    }
    
    .Bussola-Req{
        height: 3em;
        width: auto;
    }
    
    .Nome-Req{
        font-size: 1.5em;
    }
    
    .Input-Reg{
        background-size: 2em;
        background-position-x: 22.5em;
        width: 100%;
        padding: 0.7em 0em;
    }
    
    
    .Conteudo-Reg{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    
    .Textos-Req{
        width: 20em;
        margin-top: 2.5em;
    }
    
    .Titulo-Req{
        text-align: center;
        font-size: 1.2em;
        margin-bottom: 0.7em;
    }
    
    .Descricao-Req{
        text-align: center;
        font-size: 0.9em;
        width: 22em;
    }
    
    .Img-Req1{
        display: flex;
        height: 17em;
        width: 23em;
    }
    
    .Img-Req2{
        display: none;
    }
    
}

`

export { Container }