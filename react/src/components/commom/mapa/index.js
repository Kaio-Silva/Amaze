import React, { useEffect, useState } from 'react';
import { Container } from './styled.js'

import { Loader } from '@googlemaps/js-api-loader';
import Comp from "../../../Popups/criarDenuncia/index"
import Denunc from "../../../Popups/localdenuncs"





export default function Mapa(){
  const[pop,setPop]= useState(false);
  const [denu, setDenu] = useState(false);
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
        
        styles: [
            {
              "featureType": "administrative",
              "elementType": "geometry",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "transit",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "saturation": 100
                }
              ]
            }
          ]
    };
    

    
    loader.load().then((google) => {
      const map = new google.maps.Map(document.getElementById("map"), mapOptions)

      var pin = new google.maps.Marker({
        position: mapOptions,
        map: map,
        optimized: false,
        icon: "/assets/images/pinMap.png",
      });


      map.addListener('click', function(e) {
        var loc = e.latLng.toJSON();

            pin.addListener("click", () => {
              map.panTo(pin.getPosition());
              setLoc(loc);
              setDenu(true);
           });

       pin.setPosition(loc);

    });
  });

  }, [])

  
    return(
        <Container> 
            <div id="map"></div>
            <button onClick={ () => setPop(true)} className="ButtonMap"/>      
            <Comp value={pop} func={setPop} loc={loc} />    
            <Denunc bool={denu} func={setDenu}  />
        </Container>
    ) 
    
}