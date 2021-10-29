import express from 'express'
import db from '../db.js';

const app = express.Router();

app.post('/denuncia', async(req,resp) =>{
    try{
       let idusu = req.body.id_usuario;
       let longitude = req.body.ds_longitude;
       let latitude = req.body.ds_latitude;
       let data = req.body.dt_denuncia;
       let ocorrencia = req.body.ds_ocorrencia;
       let reporte = req.body.qtd_reporte_recebido;
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
        qtd_reporte_recebido:reporte,
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
  app.get('/:id', async(req,resp) =>{
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
  app.get('/', async(req,resp) =>{
    try{
         let consulta = await db.infob_amz_tbdenuncia.findAll()
    
         resp.send(consulta)
    
    }catch(e){
      resp.send(e.toString())
    }
    })
    
  // Vai alterar uma deúncia que já foi feita
    app.put('/alt/:id', async(req,resp) =>{
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
    app.delete('/del/:id', async (req,resp) =>{
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
  
  export default app