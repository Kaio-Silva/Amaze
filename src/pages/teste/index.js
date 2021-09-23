import React from 'react';
import { Container } from './styled.js'

import {Client} from "@googlemaps/google-maps-services-js";


export default function Teste(){
    const client = new Client({});

client
  .elevation({
    params: {
      locations: [{ lat: -23.7328302, lng: -46.6995227 }],
      key: "AIzaSyDaD4hq5gjkDX1FUWpkjZQXmEYrHzTmtRk",
    },
    timeout: 1000, 
  })
  .then((r) => {
    console.log(r.data.results[0].elevation);
  })
  .catch((e) => {
    console.log(e);
  });


    return(
        <Container> 
            <div id="map" value={client}></div>
        </Container>
    )
}