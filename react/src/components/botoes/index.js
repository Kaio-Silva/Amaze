
import React from "react"

import { Button } from "./styled"


export default function Botao(props){

    return(
        <div>
            <Button> {props.botao} </Button>
        </div>    
    )
}   