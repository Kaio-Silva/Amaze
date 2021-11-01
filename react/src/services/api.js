import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})


export default class Api {

    async Geocoding(local){
        let i = await api.get(`/geo2?loc=${local}`)
        return i.data;
    }

    async Enviar(email){
        console.log(email)
        let i = await api.post('/enviar', {email: email});
        return i.data;
        
     }

    async InserirUSU(usuario,email,telefone,senha,ativo){
        let i = await api.post('/usuario/inserir',{nm_usuario:usuario,ds_email:email, nr_telefone:telefone,ds_senha:senha,bt_ativo: ativo});
        return i.data;
     }


     async USULogin(senha,email){
         let i = await api.get(`/usuario/login?ds_email=${email}&ds_senha=${senha}`);
         return i.data;
     }
    

     async USUtotal(){
         let i = await api.get('/usuario/total');
         return i.data;
     }

     async USUemail(email){
        let i = await api.get(`/usuario/email?email=${email}`);
        return i.data;
    }

    async DELETEusu(ativo){
        let i = await api.delete(`/usuario/del?ativo=${ativo}`);
        return i.data;
    }

    async alterarSenhaUSU(id,senha){
       let i = await api.put(`/usuario/${id}`,{ds_senha:senha});
       
       return i.data;
    }

    async deligarUSU(id,ativo){
       let i = await api.put(`/usuario/usuarioFalse/${id}`,{bt_ativo:ativo});
       return i.data;
    }

    /////////////////////////////////////////////////////////////////////////////


    async inserirDENU(idusu,longitude,latitude,data,ocorrencia,qtdreporte,rua,bairro,avaliacao,tipo,hashh){
        let i = await api.post('/denuncia/inserir',{id_usuario:idusu,ds_longitude:longitude, ds_latitude: latitude,dt_denuncia:data,ds_ocorrencia:ocorrencia, qtd_reporte_recebido:qtdreporte, ds_rua:rua, ds_bairro:bairro, qtd_avaliacao:avaliacao,ds_tipo_denuncia:tipo,ds_geohash:hashh});
        return i.data;
    }
    

    async listarDENUpoUsu(id){
        let i = await api.get(`/denuncia/${id}`);
        return i.data;
    }

    async ListarDENUTotal(){
        let i = await api.get('/');
        return i.data;
    }

    async alterarDENU(id,idusu,longitude,latitude,data,ocorrencia,rua,bairro,avaliacao,tipo){
        let i = await api.put(`/denuncia/alt/${id}`,{id_usuario:idusu,ds_longitude:longitude, ds_latitude: latitude,dt_denuncia:data,ds_ocorrencia:ocorrencia,ds_rua:rua,ds_bairro:bairro,qtd_avaliacao:avaliacao,ds_tipo_denuncia:tipo});
        return i.data;
    }

    async deleteDENU(id){
        let i = await api.delete(`/denuncia/del/${id}`);
        return i.data;
    }

    /////////////////////////////////////////////////////////////////


    async ListarReporteporDenu(id){
        let i = await api.get(`/reporte/consultaquery?id=${id}`)
         return i.data;
    }

    async ListarReporteTOTAL(){
        let i = await api.get('/reporte/total')
        return i.data;
    }

    async CRIARreporte(idusu,iddenu,data,motivo){
        let i = await api.post('/reporte/inserir',{id_usuario:idusu,id_denuncia:iddenu,dt_reporte:data,ds_motivo_reporte:motivo});
        return i.data;
    }

    async ReporteFalse(id,confirmado){
        let i = await api.put(`/reporte/false/${id}`,{ds_confirmado:confirmado})
    }

    async DELETEreporte(){
        let i = await api.delete(`/reporte/del?ds_confirmado=${false}`);
        return i.data;
    }
}