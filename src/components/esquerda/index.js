import { Esquerda } from "./styled"


export default function esquerda() {
    return (
        <Esquerda>
            <div className="cabeçalho">
                <div className="imagem"> <img src="/assets/Images/BussolaPequena.png"  /> </div>
                <div className="empressa"> Amaze </div>
            </div>
            <div className="relatorio">
                <div className="imagem2"> <img src="/assets/Images/DocsBranco1.png" /> </div>
                <div className="ABA a">
                    <div className="aba1"> Relatorio </div>
                    <div className="aba2"> Denuncias </div>
                </div>
            </div>
            <div className="remover r">
                <div className="imagem2"> <img src="/assets/Images/Denuncias1.png" /> </div>
                <div className="aba a">
                    <div className="ABA1"> Remover </div>
                    <div className="ABA2"> Usuario </div>
                </div>
            </div>
        </Esquerda>
    )
}