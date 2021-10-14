import { Pesquisa } from '../../../components/styled/inputs.js';
import { Container } from './styled';


export default function HomeAdm(props) {
    return (
            <Container>
                 <Pesquisa className="Pesquisar" input="usar" tamanho="medio"/>
                <div className="baixo"></div>
        </Container>
    )
}