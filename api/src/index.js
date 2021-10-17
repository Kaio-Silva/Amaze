import db from './db.js';
import express from 'express'
import cors from 'cors'
import axios from 'axios'
const app = express();
app.use(cors());
app.use(express.json());

app.get('/geo3', async (req,resp) =>{
  try{
    let local = req.query.loc;

    let r = axios.get(`http://api.positionstack.com/v1/forward?access_key=3c0358c3ade4a59b726080b049749a66&query=${local}`)
    resp.send(r.data)
  }catch(e){
    resp.send(e.ToString())
  }
})


app.get('/geo2', async (req,resp) =>{
  try{
    let local = req.query.loc;

    let r = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${local}&key=1b24fbfccdb648dca469fd5b6ac9e6a6`)
    resp.send(r.data)
  }catch(e){

  }
})




app.get('/geo', async(req,resp) =>{
  try{
    let local = req.query.loc
  let r = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=pk.eyJ1IjoiYW1hemV0Y2MiLCJhIjoiY2t1c3Bydm9qMDV3cTJubXAxbTBwc3prOCJ9.RyiEOThe0WLUnbybjWoVgw`
  )
  resp.send(r.data);
  }catch(e){
    resp.send(e)
  }
 
})



//tabela Usuário


//Inserir
app.post('/usuario', async(req,resp) =>{
    try{ 
      let usuario = req.body.nm_usuario;
      let email = req.body.ds_email;
      let telefone = req.body.nr_telefone;
      let senha = req.body.ds_senha;
      let ativo = false;
      

      let arrouba = email.includes('@')

      let especial = senha.includes('#' || '@' || '$' || '&' || '%' || '*' || '.')
    
      if(arrouba === false)
      return resp.send({erro:'O email Precisa do caracter @'})

      if(especial === false)
      return resp.send({erro:'a senha precisar ter no mínimo 1 caractere especial'})

      if(email.length < 12)
       return resp.send({erro:'O email Precisa de no mínimo 12 caracteres'})

       if(senha.length < 5)
       return resp.send({erro:'A senha precisa ter no mínimo 10 caracteres'})

       if(telefone.length < 14 || telefone.length >14)
       return resp.send({erro:'O número de telefone está inválido'})
    
      
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


// get TOTAL
app.get('/usuariototal',async (req,resp) =>{

      try{
           let consulta = await db.infob_amz_tbusuario.findAll({ order:[['id_usuario']] });
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

    let oi = 12;
    console.log(isNaN(oi))

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

// Todas as denúncias do sistema
app.get('/denunciatotal', async(req,resp) =>{
  try{
       let consulta = await db.infob_amz_tbdenuncia.findAll()
  
       resp.send(consulta)
  
  }catch(e){
    resp.send(e.toString())
  }
  })
  
// Vai alterar uma deúncia que já foi feita
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

  // vai deletar uma denúncia que já foi eita
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


    //Tabela reporte Denúncia


  //irá listar todos os reportes que uma denúncia recebeu
  app.get('/ReporteDenunc', async(req,resp) =>{
    let iddenu = req.query.id;

    let consulta = await db.infob_amz_tbreporte_denuncia.findAll({
      where:{id_denuncia:iddenu}
    }) 

    resp.send(consulta)
  })

//Get total
  app.get('/ReporteDenuncia', async(req,resp) =>{
try{
    let consulta = await db.infob_amz_tbreporte_denuncia.findAll() 
    resp.send(consulta)
}catch(e){
  resp.send(e.ToString())
}
  })



  //irá reportar uma denúncia falsa
  app.post('/ReporteDenunc',async(req,resp) =>{
    try{
       let idusu = req.body.id_usuario
       let iddenu = req.body.id_denuncia
       let data = req.body.dt_reporte
       let motivo = req.body.ds_motivo_reporte
       let confirmado = false
      

      let inserir = {
        id_usuario:idusu,
        id_denuncia:iddenu,
        dt_reporte:data,
        ds_motivo_reporte:motivo,
        ds_confirmado:confirmado
      }


      let inserting = await db.infob_amz_tbreporte_denuncia.create(inserir)
      resp.send(inserting)
    }catch(e){
       resp.send('lascou')
    }

  })


  app.put('/Reportefalse/:id', async(req,resp) =>{
    try{
      let id= req.params.id
      
      let confirmado= req.body.ds_confirmado;
      console.log(confirmado)
      let alterar = await db.infob_amz_tbreporte_denuncia.update({
        ds_confirmado:confirmado
      },
      {
        where: {id_reporte_denuncia: id}
      })
    
      resp.sendStatus(200)
      }catch(e){
       resp.send(e.ToString())
      }
    
    
    })


    app.delete('/ReporteDenu',async(req,resp) =>{
      try{
     let confirm = req.query.ds_confirmado;
     
     let del = await db.infob_amz_tbreporte_denuncia.destroy({
       where: {ds_confirmado:confirm}
     })

     resp.sendStatus(200)
    }catch(e){
      resp.send(e.toString())
    }
    })



app.listen(process.env.PORT,

x => console.log(`Server up at port ${process.env.PORT}`))

