import React from 'react';
import { Container } from './styled.js'

import { Loader } from '@googlemaps/js-api-loader';


export default function mapa(){

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
    new google.maps.Marker({
    position: map.getCenter(),
    map: map,
  });
})
    return(
        <Container> 
            <div id="map"></div>
            <button className="ButtonMap"/>          
        </Container>
    ) 
    
}
