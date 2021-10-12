import styled from 'styled-components'


const NotFound = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-size: 100%;

    width: 100vw; 
    height: 100vh;
    background-color: #f7f9fb;

    @media(max-width: 1024px){
        
        & > img{
            width: 100vw; 
            height: 100vh;

            background-size: 100%;
        }
    }
`


export { NotFound }