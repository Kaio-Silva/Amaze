import db from './db.js';
import express from 'express'
import cors from 'cors'
const app = express();
app.use(cors());
app.use(express.json());

app.post('/usuario', async(req,resp) =>{
    try{ 
      let usuario = req.body.nm_usuario;
      let email = req.body.ds_email;
      let telefone = req.body.nr_telefone;
      let regiao = req.body.ds_regiao;
      let senha = req.body.ds_senha;
      let ativo = true;
     
    

      let inserir={
          nm_usuario:usuario,
          ds_email:email,
          nr_telefone:telefone,
          ds_regiao:regiao,
          ds_senha:senha,
          bt_ativo: ativo
      }


      let inserting = await db.infob_amz_tbusuario.create(inserir);
      resp.send(inserting)
    }catch(e){
      resp.send(e.toString())
    }
})

app.get('/usuario',async (req,resp) =>{
    try{
         let consulta = await db.infob_amz_tbusuario.findAll();
         resp.send(consulta)
    }catch(e){
        resp.send(e.toString())
    }
})





app.listen(process.env.PORT,

x => console.log(`Server up at port ${process.env.PORT}`))

