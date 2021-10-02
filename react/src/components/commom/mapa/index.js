import React, { useState } from 'react';
import { Container } from './styled.js'

import { Loader } from '@googlemaps/js-api-loader';
import Comp from "../../../Popups/criarDenuncia/index"
import Denunc from "../../../Popups/localdenuncs"


export default function Mapa(){
const[pop,SetPop]=useState(false);
const[denu,SetDenu] = useState(false);
console.log(denu)
  let map;
  
  const loader = new Loader({
    apiKey: "AIzaSyDaD4hq5gjkDX1FUWpkjZQXmEYrHzTmtRk",
    version: "weekly",
    libraries: ["places"]
  });

  const mapOptions = {
    center: {  
      lat: -23.7300074,
      lng: -46.6970212 },
    zoom: 15
  };

  loader.load().then((google) => {
    map = new google.maps.Map(document.getElementById("map"), mapOptions)
    const marker = new google.maps.Marker({
    position: map.getCenter(),
    map: map,
    optimized: false,
  });

  marker.addListener("click", () => {
   SetDenu(true)
  });

})
    return(
        <Container> 
            <div id="map"></div>
            <button onClick={ () => SetPop(true)} className="ButtonMap"/>      
            <Comp value={pop} func={SetPop} />    
            <Denunc bool={denu} func={SetDenu}/>
        </Container>
    ) 
    
}
