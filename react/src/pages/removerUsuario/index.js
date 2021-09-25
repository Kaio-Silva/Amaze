import { Pagina } from "./styled"
import MenuLateral from "../../components/Menu";
import Usuario from "../../components/usuario";


export default function pagina() {
    return (
        <Pagina>
            <MenuLateral />
            <div className="direita">
                <div className="topo"> <input className="escreva"/> </div>
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

