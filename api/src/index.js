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
      

      let arrouba = email.includes('@')
    
      if(arrouba === false)
      return resp.send({erro:'O email Precisa do caracter @'})

      if(email.length < 12)
       return resp.send({erro:'O email Precisa de no mínimo 12 caracteres'})

       if(senha.length < 10)
       return resp.send({erro:'A senha precisa ter no mínimo 10 caracteres'})

       if(telefone.length < 14 || telefone.length >14)
       return resp.send({erro:'O número de telefone está inválido'})
    
      
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


app.delete('/usuario/:id', async (req,resp) =>{

  let id = req.params.id
 
     let del = await db.infob_amz_tbusuario.destroy({
       where:{id_usuario: id}
      })
      resp.sendStatus(200)
 
})

app.put('/usuario/:id', async(req,resp) =>{
  let id= req.params.id

  let senha = req.body.ds_senha;

  let alterar = db.infob_amz_tbusuario.update({
    ds_senha:senha
  },
  {
    where: {id_usuario: id}
  })

  resp.sendStatus(200)


})




app.listen(process.env.PORT,

x => console.log(`Server up at port ${process.env.PORT}`))

