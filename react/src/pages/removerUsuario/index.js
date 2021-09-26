import { Pagina } from "./styled"
import MenuLateral from "../../components/Menu";
import Usuario from "../../components/usuario";
import { Pesquisa } from "../../components/inputs/styled";


export default function pagina() {
    return (
        <Pagina>
            <MenuLateral />
            <div className="direita">
                <Pesquisa />
                <div className="baixo">
                   <Usuario />
                   <Usuario />
                   <Usuario />
                   <Usuario />
                   <Usuario />
                </div>
            </div>
        </Pagina>
    )
}

