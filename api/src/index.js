import ControllerDenuncia from './control/ControllerDenuncia.js'
import ControlleReporte from './control/ControllerReporte.js'
import ControllerUsuario from './control/ControllerUsuario.js'

import db from './db.js';
import express from 'express'
import cors from 'cors'
import axios from 'axios'
import enviarEmail from './email.js';


const app = express();
app.use(cors());
app.use(express.json());

app.use('/denuncia', ControllerDenuncia);
app.use('/reporte', ControlleReporte);
app.use('/usuario', ControllerUsuario);



app.get('/geo2', async (req,resp) =>{
  try{
    let local = req.query.loc;

    let r = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${local}&key=1b24fbfccdb648dca469fd5b6ac9e6a6`)
    resp.send(r.data.results)
  }catch(e){

  }
})

app.post('/enviar', async (req, resp) => {
  let email = req.body.email;

  console.log("email " + email)

  let consulta = await db.infob_amz_tbusuario.findOne(
    {
        where:{
          ds_email: email
        }
    });

  let senha = consulta.ds_senha
  let usuario = consulta.nm_usuario
  
  enviarEmail(consulta.ds_email, senha, usuario)

  resp.send({ consulta });
})



app.post('/contate-nos', async (req, resp) => {
  let email = req.body.email;

  
  let consulta = await db.infob_amz_tbusuario.findOne(
    {
        where:{
          ds_email: email
        }
    });

  enviarEmail(consulta.ds_email, consulta.ds_senha)

  resp.send({ status: 'ok' });
})





app.listen(process.env.PORT,

x => console.log(`Server up at port ${process.env.PORT}`))

