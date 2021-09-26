import { Container } from './styled'
import Logo from '../../components/logo'

function Login (props){
    return(
        <Container>
        <div className='conteudo2'>
            <div className= 'login'>
                <div className = 'pt1'>
                    <Logo cor="black" direction="column"/>
                    <div classNome= 'text1'>
                      <div classnome= 'texto'>Faça sua segurança com a amaze, se torne um de nos</div>
                     </div>
                     

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
                    <div className='eaqueci'>Esqueci Senha</div>
                    <div className='eaqueci'>Cadastrar-se</div>
                    <div classNome= 'botao'><button>Log In</button></div>
                    
                </div>
            </div>
        </div>
</Container>
    )
}

export { Login }

