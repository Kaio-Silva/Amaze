import { Denuncias } from './styled';
import MenuLateral from "../../components/commom/Menu";
import { Pesquisa } from '../../components/styled/inputs.js';
import Card  from "../../components/commom/Card";


export default function denuncias(props) {
    return (
        <Denuncias>
            <MenuLateral />
            <div className="conteudo">
                <Pesquisa className="Pesquisar" input="usar" tamanho="medio"/>
                <div className="baixo">
                    <div className="alinhando">
                        <Card />
                        <Card />
                    </div>

                    <div className="alinhando">
                        <Card />
                        <Card />
                    </div>

                    <div className="alinhando">
                        <Card />
                        <Card />
                    </div>

                    <div className="alinhando">
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        </Denuncias>
    )
}