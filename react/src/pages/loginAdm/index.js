import { Container } from './styled'
import { Link } from 'react-router-dom';
import Logo from '../../components/logo'

function loginAdm (props){
    return(
        <Container>

<div className='conteudo2'>

   <div className= 'login'>
       <div className = 'pt1'>
   <Logo cor="white" direction="column"/>
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
        <div>
            <Link className="link" to="/Relatorio"><div className="enter"><button>Log in</button></div></Link>
        </div>
    </div>
    </div>
    </div>
</div>

</Container>
    )
}

export { loginAdm }

