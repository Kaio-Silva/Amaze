import styled from 'styled-components'



const Container = styled.div`
    display: flex;
    flex-direction: column;

    background-color: white;
   
    font-family: semiBold;
    font-size: 1em;
    text-align: left;
    
    border-radius: 0.6em;

    margin-top:0.3em;
    margin-bottom:0.3em;

    width:80%;


span{
    font-family: regular;

    margin-left: .5em;
}


.nm{
    margin:0.5em 0em 0.4em 0.5em;
    display: flex;
    flex-direction: row;
}

.motivo{
    margin:0em 0em 0.4em 0.5em;
    display: flex;
    flex-direction: row;
}




`


export { Container }