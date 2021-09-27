import { Container } from './styled'
import { Link } from 'react-router-dom';

function Login (){
    return(
        <Container>
        <div className='conteudo2'>
            <div className= 'login'>
                <div className = 'pt1'>
                    <img className="Bussola" src="/assets/Images/BussolaPreta.png" alt=""/>
                    <div className= 'title'>
                      <div className= 'texto'>Amaze</div>
                    </div>
                    <div className= 'text1'>
                      <div className= 'texto1'>Faça sua segurança com a amaze, se torne um de nos</div>
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
                    <div className='ptcadastro'>
                        
                        <div className='esqueceu'><Link to="/EsqueceuSenha">Esqueceu Senha</Link></div>
                        <div className='cadastre'><Link to="/EsqueceuSenha">Cadastre-se</Link></div>
                    </div>
                    
                    <div classNome= 'botao'><button>Log In</button></div>
                    
                </div>
            </div>
        </div>
</Container>
    )
}

export { Login }

