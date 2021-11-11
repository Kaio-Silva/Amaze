import React, { useEffect, useState } from 'react';
import { Container } from './styled.js'

import ngeohash from 'ngeohash'

import { Loader } from '@googlemaps/js-api-loader';
import Comp from "../../../Popups/criarDenuncia/index"
import Denunc from "../../../Popups/localdenuncs"
import Api from '../../../services/api'

const api = new Api();





export default function Mapa(){
  const[dados,setDados] = useState([[]])
  const[pop,setPop]= useState(false);
  const [denu, setDenu] = useState(false);
  const [loc, setLoc] = useState({});
  const [denuncias,setDenuncias] = useState([])

  

  // async function Listar(){
  //   let consulta = api.ListarGroup();
  //   setDenuncias(consulta)
  //   console.log(denuncias)
  // }
  

  useEffect(() => {
    //Listar()

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
    

    
    loader.load().then(async (google) => {
      const map = new google.maps.Map(document.getElementById("map"), mapOptions)
      const regioesGroup = await api.ListarGroup();

      async function especificRegion(geo){
         let r = await api.ListarRua(geo);
         setDados(r)
      } 
      

      for (let item of regioesGroup) {
        if(isNaN(item.geohash) === false){
          continue
        }
        let locs =  ngeohash.decode_bbox(item.geohash);
        
        let color

        if(item.qtd < 5){
          color = '#14FF00'
        }
        else if(item.qtd >= 5 && item.qtd <=10){
         color = '#FAFF00'
        }
        else if(item.qtd >= 11 && item.qtd <=20){
         color = '#FFA800'
        }
         else if (item.qtd >= 21){
          color = 'red'
         }

        const rectangle = new google.maps.Rectangle({
          strokeColor: "transparent",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: color,
          fillOpacity: 0.35,
          map,
          bounds: {
            north: locs[2],
            south: locs[0],
            east: locs[3],
            west: locs[1],
          },
        });
         

         var regiaoPin = new google.maps.Marker({
           position: {
            lat: item.loc.latitude,
             lng: item.loc.longitude
           },
            map: map,
           optimized: false,
           icon:'/assets/images/pinMap.png',
         });

         regiaoPin.addListener("click", () => {
          especificRegion(item.geohash);   
          setDenu(true);
          console.log(dados)
        });
        
        
  
      }


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