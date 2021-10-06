import Usuario from "../../../components/commom/usuario";
import { Pesquisa } from "../../../components/styled/inputs.js";
import { Container } from "./styled";


export default function pagina() {
    return (
            <Container>
                <Pesquisa className="Pesquisar" input="usar" tamanho="medio"/>
                <div className="baixo">
                   <Usuario />
                   <Usuario />
                   <Usuario />
                   <Usuario />
                   <Usuario />
                </div>
            </Container>
    )
}

