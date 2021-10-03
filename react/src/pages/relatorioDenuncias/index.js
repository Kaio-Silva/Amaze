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
                        <Card autor="Kaio Silva" qtd="16" desc="Fui assaltado saindo de casa, tomem cuidado area esta bem perigosa"/>
                        <Card autor="Yudji freguês" qtd="20" desc="Fui assaltado saindo de casa, tomem cuidado area esta bem perigosa"/>
                    </div>

                    <div className="alinhando">
                        <Card autor="Thiago Viana" qtd="17" desc="Fui assaltado saindo de casa, tomem cuidado area esta bem perigosa"/>
                        <Card autor="Kaique Oliveira" qtd="19" desc="Fui assaltado saindo de casa, tomem cuidado area esta bem perigosa"/>
                    </div>

                    <div className="alinhando">
                        <Card autor="Marcos Vinicius" qtd="18" desc="Fui assaltado saindo de casa, tomem cuidado area esta bem perigosa"/>
                        <Card autor="Beatriz Santos" qtd="20" desc="Fui assaltado saindo de casa, tomem cuidado area esta bem perigosa"/>
                    </div>
                    <div className="alinhando">
                        <Card autor="Kaio Silva" qtd="16" desc="Fui assaltado saindo de casa, tomem cuidado area esta bem perigosa"/>
                        <Card autor="Yudji freguês" qtd="20" desc="Fui assaltado saindo de casa, tomem cuidado area esta bem perigosa"/>
                    </div>

                    <div className="alinhando">
                        <Card autor="Thiago Viana" qtd="17" desc="Fui assaltado saindo de casa, tomem cuidado area esta bem perigosa"/>
                        <Card autor="Kaique Oliveira" qtd="19" desc="Fui assaltado saindo de casa, tomem cuidado area esta bem perigosa"/>
                    </div>

                    <div className="alinhando">
                        <Card autor="Marcos Vinicius" qtd="18" desc="Fui assaltado saindo de casa, tomem cuidado area esta bem perigosa"/>
                        <Card autor="Beatriz Santos" qtd="20" desc="Fui assaltado saindo de casa, tomem cuidado area esta bem perigosa"/>
                    </div>
                </div>
            </div>
        </Denuncias>
    )
}