import styled from 'styled-components'


const Container = styled.div`
display: flex;
justify-content: right;
align-items: top;
background-color: rgba(0,0,0,0.2);
height: 100vh;
width: 100%;
position: fixed; 
top:0;
left:0;
z-index:1;


button{
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0em;
}


.link{
        font-family: semiBold;
        font-size: 0.9em;
        color: ${props => props.cor === "white" ? 'white' 
                                             : "black" };

        text-decoration: none;
    }
    .link:hover{
        cursor: pointer;
    }


.cab{
   text-align: right;

}

.abox{
    width:210px;
    height:210px;   
    box-shadow:  0px  1px 10px  #888888;
    border-radius: 10px;
    margin-top: 1em;
    margin-right: 1em;
    padding: 0.8em;
    background-color: ${props => props.background === 'white' ? 'white'
                                                                      :'#011640'};
    margin-left: 6.6em;
                                                      
   
}

.conteudop{
    display: flex;
    flex-direction: column;
    text-align: left;
    width:8em;
}

.img{
    content: url(${props => props.background === 'white' ? '/assets/images/xpreto.png' :'/assets/images/xbranco.png'})
}

.home{
display: ${props => props.home ==='usar' ?'block'
                                           :'none'};
 padding-bottom:0.5em ;
 font-size: 0.8em;
 color: ${props => props.background === 'white' ? 'black'
                                                             :'white'};     
}

.oi img{
    width:1.5em;
    height:1.5em
}

.contatnos{
display:${props => props.contact ==='usar' ?'block'
                                           :'none'};
padding-bottom:0.5em ;
font-size: 0.8em;
color: ${props => props.background === 'white' ? 'black'
                                                             :'white'};     
}

.criar{
display:${props => props.criar ==='usar' ?'block'
                                           :'none'};
padding-bottom:0.5em ;
font-size: 0.8em;
color: ${props => props.background === 'white' ? 'black'
                                                             :'white'};     
}


.mapa{
display:${props => props.mapa ==='usar' ?'block'
                                              :'none'};
padding-bottom:0.5em ;
font-size: 0.8em;
color: ${props => props.background === 'white' ? 'black'
                                                             :'white'};     
}

.login{
display:${props => props.login ==='usar' ?'block'
                                              :'none'};
padding-bottom:0.5em ;
font-size: 0.8em;
color: ${props => props.background === 'white' ? 'black'
                                                             :'white'};     
}

.cadastro{
    display:${props => props.cadastro ==='usar' ?'block'
                                              :'none'};
padding-bottom:0.5em ;
font-size: 0.8em;
color: ${props => props.background === 'white' ? 'black'
                                                             :'white'};   
}


.hist{
    display:${props => props.historicop ==='usar' ?'block'
                                              :'none'};
padding-bottom:0.5em ;
font-size: 0.8em;
color: ${props => props.background === 'white' ? 'black'
                                                             :'white'}; 
}


.relatDenunc{
display:${props => props.relatDenunc ==='usar' ?'block'
                                           :'none'};
 width:14em;  
padding-bottom:0.5em ;
padding-top:0.8em ;
font-size: 1em;
color: ${props => props.background === 'white' ? 'black'
                                                             :'white'};     
}

.removeUser{
display:${props => props.removeUser ==='usar' ?'block'
                                              :'none'};
 width:14em;  
padding-bottom:0.5em ;
font-size: 1em;
color: ${props => props.background === 'white' ? 'black'
                                                             :'white'};     
}



`


export {Container }