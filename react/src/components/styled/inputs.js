import styled from "styled-components";

const Pesquisa = styled.input`
    display: ${props => props.input === "usar" ? "block" : "none"};
    font-family: regular;
    font-size: 1em;

    background-image: url('/assets/images/Buscar.png');
    background-size: 2em;
    background-repeat: no-repeat;
    background-position-x: 98%;
    background-position-y: center;
    border-width: 0.1em; 
    border-radius: 0.2em;
    width: ${props => props.tamanho === "grande" ? "90%" : "60%"};
    height: 2.2em;

    margin-right: 5em;
    margin-bottom: 1em;
    margin-top: 1em;
    padding: 0.8em;


    &:focus{
        background-image: none;
        outline: none;
    }

    @media (max-width: 1024px) {
        margin-right: 0.7em;
        margin-bottom: 0.5em;
        margin-top: 0em;
        padding: 1em;

        font-size: 0.7em;

        background-size: 1.5em;

        width: ${props => props.tamanho === "grande" ? "90%" : "13em"};
        height: 2.5em;
    }


    
`

    const Padrao = styled.input`
            font-family: regular;
            font-size: .8em;
            color: ${props => props.cor === "verde" ? "#24BF99" : ""};

            border-radius: 2px;
            border: 1px solid ${props => props.cor === "verde" ? "#24BF99" : "#C4C4C4"};

            padding: 1.2em 1em;

            width: 100%;

            outline: none;

            letter-spacing: ${props => props.Type === "senha" ? ".3em" : "0em"};


            width: ${props => props.tamanho === "large" ? "436px" 
                                    :props.tamanho === "medio" ? "283px" 
                                                               :props.tamanho === "100%" ? "100%" : "209px"};

            &::-webkit-input-placeholder {
                color: ${props => props.cor === "verde" ? "#24BF99" : ""};
            }   

            &:focus::-webkit-input-placeholder {
            color: transparent;
            }

            @media (max-width: 390px){
                font-size: 0.8em;
                padding: 1em 1em;
                width: 100%;

                &::-webkit-input-placeholder {
                font-size: 0.9em;
                }
            }


            @media (max-width: 1024px){
                font-size: 0.8em;
                width: 100%;

                &::-webkit-input-placeholder {
                font-size: 0.9em;
            }
        }

        @media (min-width: 1440px){
                font-size: 1em;
                padding: 1em 1em;
                width: 100%;

                &::-webkit-input-placeholder {
                font-size: 1em;
            }
        }

        @media (min-width: 1920px){
                font-size: 1em;
                padding: 1em 1em;
                width: 100%;

                &::-webkit-input-placeholder {
                font-size: 1em;
            }
        }    
    `

export { Pesquisa, Padrao }