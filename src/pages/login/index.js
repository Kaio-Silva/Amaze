import { Container } from './styled'


function Login (){
    return(
        <Container>

<div className='conteudo2'>

   <div className= 'login'>
       <div className = 'pt1'>
   <img className="Bussola" src="/assets/Images/BussolaPreta.png" alt=""/>
   <div classnome= 'texto'>Amaze</div>
   <div classnome= 'texto'>Faça sua segurança com a 
   amaze, se torne um de nos</div>

   </div>
        <div className= 'pt2'>
       <div className='nm_login'>Log in</div>
   <div className= 'email'>
       <div className= 'nm_email'> E-mail</div>
       <input className="Input-Reg" type="text"/>
    </div>
    <div className='senha'>
        <div className='nm_senha'>Senha</div>
        <input className="Input-Reg" type="text"/>
    </div>
    </div>
    </div>
</div>

</Container>
    )
}

export { Login }

