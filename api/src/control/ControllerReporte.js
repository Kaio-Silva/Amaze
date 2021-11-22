import express from 'express'
import db from '../db.js';

const app = express.Router();

    //Tabela reporte Denúncia


  //irá listar todos os reportes que uma denúncia recebeu
  app.get('/consultaquery', async(req,resp) =>{
    let iddenu = req.query.id;

    let consulta = await db.infob_amz_tbreporte_denuncia.findAll({
      where:{id_denuncia:iddenu}
    }) 

    resp.send(consulta)
  })

//Get total
  app.get('/total', async(req,resp) =>{
try{
    let consulta = await db.infob_amz_tbreporte_denuncia.findAll() 
    resp.send(consulta)
}catch(e){
  resp.send(e.ToString())
}
  })



  //irá reportar uma denúncia falsa
  app.post('/inserir',async(req,resp) =>{
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

      let denuc = await db.infob_amz_tbdenuncia.findOne({
        where:{
          id_denuncia: iddenu
        }
      })

      await db.infob_amz_tbusuario.update({
        bt_ativo: false
      },
      {
        where:{ id_usuario: denuc.id_usuario }
      })

      let inserting = await db.infob_amz_tbreporte_denuncia.create(inserir)
      resp.send(inserting)
    }catch(e){
       resp.send('lascou')
    }

  })


  app.put('/false/:id', async(req,resp) =>{
    try{
      let id= req.params.id
      
      let confirmado= req.body.ds_confirmado;
      
      await db.infob_amz_tbreporte_denuncia.update({
        ds_confirmado: confirmado
      },
      {
        where: {id_reporte_denuncia: id}
      })
    
      resp.sendStatus(200)
      }catch(e){
       resp.send(e.ToString())
      }
    
    
    })


    app.delete('/del',async(req,resp) =>{
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



export default app