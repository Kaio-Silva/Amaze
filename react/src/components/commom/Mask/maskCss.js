import styled from 'styled-components'


const Mask = styled.div`
          
            .input{
            font-family: regular;
            font-size: .8em;
            color: ${props => props.cor === "verde" ? "#24BF99" : ""};

            border-radius: 2px;
            border: 1px solid ${props => props.cor === "verde" ? "#24BF99" : "#C4C4C4"};

            padding: 1.2em 1em;

            outline: none;

            letter-spacing: ${props => props.Type === "senha" ? ".3em" : "0em"};


            width: 100%;
         }

            .input::-webkit-input-placeholder {
                color: ${props => props.cor === "verde" ? "#24BF99" : ""};
            }   

            .input:focus::-webkit-input-placeholder {
            color: transparent;
            }

            @media (max-width: 390px){
                .input{
                font-size: 0.8em;
                padding: 1em 1em;
                }
                .input::-webkit-input-placeholder {
                font-size: 0.9em;
                }
            }


            @media (max-width: 1024px){
                .input{
                font-size: 0.8em;
                }
                .input::-webkit-input-placeholder {
                font-size: 0.9em;
            }
    }

        @media (min-width: 1440px){
            .input{
                font-size: .9em;
                padding: 1em 1em;
            }
                .input::-webkit-input-placeholder {
                font-size: .9em;
            }
        }

        @media (min-width: 1920px){
            .input{
                font-size: 1em;
                padding: 1em 1em;
            }
                .input::-webkit-input-placeholder {
                font-size: 1em;
            }
        }    
    `


export { Mask }