import { Container } from './styled'
import Card from '../../components/commom/CardPop'
export default function P8(props){
    return(props.trigger === true)?(
      <Container>
        <div className="abox">
          <div className="cabecalho"><button onClick={() => props.SetTrigger(false)}><img src="/assets/images/xbranco.png"/></button></div>
          <div className="conteudo" id="style-2">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
          </div>
      </Container>
    ):""
}