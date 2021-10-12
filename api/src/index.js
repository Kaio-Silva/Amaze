import db from './db.js';
import express from 'express'
import cors from 'cors'
const app = express();
app.use(cors());
app.use(express.json());

//tabela Usuário


//Inserir
app.post('/usuario', async(req,resp) =>{
    try{ 
      let usuario = req.body.nm_usuario;
      let email = req.body.ds_email;
      let telefone = req.body.nr_telefone;
      let regiao = req.body.ds_regiao;
      let senha = req.body.ds_senha;
      let ativo = false;
      

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


// Verificar se o usuário já tem uma conta para efetuar login
app.get('/usuario',async (req,resp) =>{
let senha = req.query.senha;
let email = req.query.email;

    try{
         let consulta = await db.infob_amz_tbusuario.findAll({
           where:{ds_senha:senha, ds_email:email}
         });
         resp.send(consulta)
    }catch(e){
        resp.send(e.toString())
    }
})


app.delete('/usuario', async (req,resp) =>{
try{
  let ativo = req.query.ativo;
 console.log(ativo)
     let del = await db.infob_amz_tbusuario.destroy({
       where:{bt_ativo: ativo}
      })
      resp.sendStatus(200)
    }catch(e){
        resp.send(e.toString())
      }
 
})

//Alterar Senha
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

// desligar usuário do sistema
app.put('/usuarioFalse/:id', async(req,resp) =>{
  try{
  let id= req.params.id
  
  let ativo = req.body.bt_ativo;
  
  let alterar = db.infob_amz_tbusuario.update({
    bt_ativo:ativo
  },
  {
    where: {id_usuario: id}
  })

  resp.sendStatus(200)
  }catch(e){
   resp.send(e.ToString())
  }


})


// Tabela de Denúncia


//Inserir Denúncia
app.post('/denuncia', async(req,resp) =>{
  try{
     let idusu = req.body.id_usuario;
     let longitude = req.body.ds_longitude;
     let latitude = req.body.ds_latitude;
     let data = req.body.dt_denuncia;
     let ocorrencia = req.body.ds_ocorrencia;
     let rua = req.body.ds_rua;
     let bairro = req.body.ds_bairro;
     let avaliacao = req.body.qtd_avaliacao;
     let tipo = req.body.ds_tipo_denuncia; 

    let inserir = {
      id_usuario:idusu,
      ds_longitude:longitude,
      ds_latitude: latitude,
      dt_denuncia: data,
      ds_ocorrencia: ocorrencia, 
      ds_rua: rua,
      ds_bairro: bairro,
      qtd_avaliacao: avaliacao,
      ds_tipo_denuncia:tipo
    }

     let inserting = await db.infob_amz_tbdenuncia.create(inserir);
     resp.send(inserting)
    }catch(e){
      resp.send(e.toString())
     }

})

// Histórico de denúncias de cada usuário
app.get('/denuncia/:id', async(req,resp) =>{
try{
     let id = req.params.id

     let consulta = await db.infob_amz_tbdenuncia.findAll({
       where:{id_usuario:id}
     })
      
     resp.send(consulta)

}catch(e){
  resp.send(e.toString())
}
})

app.get('/denunciatotal', async(req,resp) =>{
  try{
       let consulta = await db.infob_amz_tbdenuncia.findAll()
  
       resp.send(consulta)
  
  }catch(e){
    resp.send(e.toString())
  }
  })
  

  app.put('/denuncia/:id', async(req,resp) =>{
    try{
      let id = req.params.id

         let idusu = req.body.id_usuario;
         let longitude = req.body.ds_longitude;
         let latitude = req.body.ds_latitude;
         let data = req.body.dt_denuncia;
         let ocorrencia = req.body.ds_ocorrencia;
         let rua = req.body.ds_rua;
         let bairro = req.body.ds_bairro;
         let avaliacao = req.body.qtd_avaliacao;
         let tipo = req.body.ds_tipo_denuncia; 
 

        let alterar = await db.infob_amz_tbdenuncia.update({
         id_usuario:idusu,
         ds_longitude:longitude,
         ds_latitude: latitude,
         dt_denuncia: data,
         ds_ocorrencia: ocorrencia, 
         ds_rua: rua,
         ds_bairro: bairro,
         qtd_avaliacao: avaliacao,
         ds_tipo_denuncia:tipo
     },
      {
         where:{id_denuncia:id}
      })

      resp.sendStatus(200)

    }catch(e){
     resp.send(e.toString())
    }
  })

  app.delete('/denuncia/:id', async (req,resp) =>{
    try{
      let id = req.params.id;
    
         let del = await db.infob_amz_tbdenuncia.destroy({
           where:{id_denuncia: id}
          })
          resp.sendStatus(200)
        }catch(e){
            resp.send(e.toString())
          }
     
    })




app.listen(process.env.PORT,

x => console.log(`Server up at port ${process.env.PORT}`))

