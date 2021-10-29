import express from 'express'
import db from '../db.js';

const app = express.Router();

//Inserir
app.post('/inserir', async(req,resp) =>{
    try{ 
      let usuario = req.body.nm_usuario;
      let email = req.body.ds_email;
      let telefone = req.body.nr_telefone;
      let senha = req.body.ds_senha;
      let ativo = true;
      

      let arrouba = email.includes('@')

      let especial = senha.includes('#' || '@' || '$' || '&' || '%' || '*' || '.')
    
      if(arrouba === false)
      return resp.send({erro:'O email Precisa do caracter @'})

      if(especial === false)
      return resp.send({erro:'a senha precisar ter no mínimo 1 caractere especial'})

      if(email.length < 12)
       return resp.send({erro:'O email Precisa de no mínimo 12 caracteres'})

       if(senha.length < 5)
       return resp.send({erro:'A senha precisa ter no mínimo 5 caracteres'})

       if(telefone.length < 14 || telefone.length >14)
       return resp.send({erro:'O número de telefone está inválido'})
    
      if(telefone === null || senha === null || email === null || usuario === null)
      return resp.send({erro:'Você não pode inserir um campo vazio'})

       let inserir={
          nm_usuario:usuario,
          ds_email:email,
          nr_telefone:telefone,
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
app.post('/login',async (req,resp) =>{
  try{
    let senha = req.body.senha;
    let email = req.body.email;

      let consulta = await db.infob_amz_tbusuario.findOne(
      {
          where:{
            ds_senha: senha, 
            ds_email: email
          }
      });
      resp.send(consulta)
  }catch(e){
      resp.send(e.toString())
  }
})


// get TOTAL
app.get('/total',async (req,resp) =>{

      try{
           let consulta = await db.infob_amz_tbusuario.findAll({ order:[['id_usuario']] });
           resp.send(consulta)
      }catch(e){
          resp.send(e.toString())
      }
  })
  



app.delete('/del', async (req,resp) =>{
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
app.put('senha/:id', async(req,resp) =>{
  let id= req.params.id

  let senha = req.body.ds_senha;

  if(senha.length < 5)
     return resp.send({erro:'A senha precisa ter no mínimo 10 caracteres'})

  if(especial === false)
        return resp.send({erro:'a senha precisar ter no mínimo 1 caractere especial'})

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


export default app