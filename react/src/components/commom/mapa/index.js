import React, { useEffect, useState } from 'react';
import { Container } from './styled.js'

import { Loader } from '@googlemaps/js-api-loader';
import Comp from "../../../Popups/criarDenuncia/index"
import Denunc from "../../../Popups/localdenuncs"





export default function Mapa(){
  const[pop,setPop]= useState(false);
  const [denu, SetDenu] = useState(false);
  const [loc, setLoc] = useState({});
  

  useEffect(() => {

    const loader = new Loader({
      apiKey: "AIzaSyDaD4hq5gjkDX1FUWpkjZQXmEYrHzTmtRk",
      version: "weekly",
      libraries: ["places"]
    });
  
    const mapOptions = {
      center: {  
        lat: -23.7300074,
        lng: -46.6970212 },
        zoom: 15,
        disableDefaultUI: true
    };
    

    loader.load().then((google) => {
      const map = new google.maps.Map(document.getElementById("map"), mapOptions)

      map.addListener('click' , (mapsMouseEvent) => {
        let loc = mapsMouseEvent.latLng.toJSON();
        pin.setPosition(loc);
      });

      let pin = new google.maps.Marker({
             position: loc,
             map: map,
             optimized: false,
             icon: "/assets/images/pinMap.png",
           });

             pin.addListener("click", () => {
             map.panTo(pin.getPosition());
             setLoc(loc);
             setPop(true);
           });
    });

  }, [])

  
    return(
        <Container> 
            <div id="map"></div>
            <button onClick={ () => setPop(true)} className="ButtonMap"/>      
            <Comp value={pop} func={setPop} loc={loc} />    
            <Denunc bool={denu} func={SetDenu}  />
        </Container>
    ) 
    
}