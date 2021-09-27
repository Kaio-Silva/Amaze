import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: column;

    #map{
        min-height: 85.2vh;
    }

    .ButtonMap{
        background-image: url('/assets/images/ButtonMap.svg');
        background-size: 0.7em;
        background-repeat: no-repeat;
        background-position: center;

        border: none;
        border-radius: 0em 1em 1em 0em;

        box-shadow: 0em 0em 0.7em 0.1em rgba(0, 0, 0, 0.25);

        width: 2em;
        height: 4.5em;

        position: absolute;
        bottom: 22em;
    }

    .ButtonMap:hover{
        cursor: pointer;
    }
`

export { Container }