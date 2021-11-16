import Sequelize from 'sequelize'
import geohash from 'ngeohash'
import express from 'express'
import db from '../db.js';

const {fn, Op} = Sequelize;


const app = express.Router();


app.get('/porRegiao/:geohash', async(req,resp) =>{
  const {geohash} = req.params;
  const r = await db.infob_amz_tbdenuncia.findAll({
    where: {
      'ds_geohash': geohash
    }
  })
  resp.send(r);
});

app.get('/porRegiao', async(req,resp) =>{

  let r = await db.infob_amz_tbdenuncia.findAll({
    raw: true,
    where: {
      'ds_geohash': { [Op.ne]: null },
      'ds_geohash': { [Op.ne]: '000000000' },
    },
    attributes: [
      ['ds_geohash', 'geohash'],
      [fn('count', 1), 'qtd']
    ],
    group: ['ds_geohash']
  })

  resp.send(r.map(item => { 
    return {
      geohash: item.geohash,
      loc: geohash.decode(item.geohash),
      qtd: item.qtd
    }
  }));

});

app.post('/inserir', async(req,resp) =>{
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
       let hash = req.body.ds_geohash;

  
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
        ds_tipo_denuncia:tipo,
        ds_geohash:hash
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
         let consulta = await db.infob_amz_tbdenuncia.findAll({
           include: [
             {
               model: db.infob_amz_tbusuario,
               as: 'id_usuario_infob_amz_tbusuario',
               required: true
             }
           ]
         })
    
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


      //Sistema de Avaliação
  
      app.put('/avaliar/:id', async (req, resp) =>{
        try{
          let r = req.body

          let r3 = await db.infob_amz_tbdenuncia.findOne({
            where:{
              id_denuncia: req.params.id
            }
          })
          let avaliacao = (r3.qtd_avaliacao + r.qtd_avaliacao ) / 2

          let r1 = await db.infob_amz_tbdenuncia.update({
            qtd_avaliacao: avaliacao
          }, { where:{ id_denuncia: req.params.id }})
          resp.sendStatus(200)
        }catch(e){
          resp.send(e.toString())
        }
      })
  export default app