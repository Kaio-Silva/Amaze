import { Denuncias } from './styled';
import MenuLateral from "../../components/Menu";
import { Pesquisa } from '../../components/inputs/styled';
import Card  from "../../components/Card";


export default function denuncias(props) {
    return (
        <Denuncias>
            <MenuLateral />
            <div className="conteudo">
                <Pesquisa input="usar" tamanho="medio"/>
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