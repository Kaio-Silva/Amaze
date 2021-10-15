import { Pesquisa } from '../../../components/styled/inputs.js';
import { Container } from './styled';


export default function HomeAdm(props) {
    return (
            <Container>
                <div className="align">
                 <Pesquisa className="Pesquisar" input="usar" tamanho="medio"/>
                 </div>
                 <div className="baixo"></div>
        </Container>
    )
}