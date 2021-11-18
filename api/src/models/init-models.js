import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _infoa_dtb_tb_cliente from  "./infoa_dtb_tb_cliente.js";
import _infoa_dtb_tb_genero from  "./infoa_dtb_tb_genero.js";
import _infoa_dtb_tb_livro from  "./infoa_dtb_tb_livro.js";
import _infoa_dtn_tb_avaliacao from  "./infoa_dtn_tb_avaliacao.js";
import _infoa_dtn_tb_cliente from  "./infoa_dtn_tb_cliente.js";
import _infoa_dtn_tb_endereco from  "./infoa_dtn_tb_endereco.js";
import _infoa_dtn_tb_favoritos from  "./infoa_dtn_tb_favoritos.js";
import _infoa_dtn_tb_produto from  "./infoa_dtn_tb_produto.js";
import _infoa_dtn_tb_tamanhos from  "./infoa_dtn_tb_tamanhos.js";
import _infoa_dtn_tb_usuarios_adm from  "./infoa_dtn_tb_usuarios_adm.js";
import _infoa_dtn_tb_venda from  "./infoa_dtn_tb_venda.js";
import _infoa_dtn_tb_venda_item from  "./infoa_dtn_tb_venda_item.js";
import _infoa_enl_cartao_credito from  "./infoa_enl_cartao_credito.js";
import _infoa_enl_categoria from  "./infoa_enl_categoria.js";
import _infoa_enl_chat from  "./infoa_enl_chat.js";
import _infoa_enl_chat_usuario from  "./infoa_enl_chat_usuario.js";
import _infoa_enl_pedido from  "./infoa_enl_pedido.js";
import _infoa_enl_pedido_compra_e_venda from  "./infoa_enl_pedido_compra_e_venda.js";
import _infoa_enl_plano from  "./infoa_enl_plano.js";
import _infoa_enl_produto from  "./infoa_enl_produto.js";
import _infoa_enl_rank from  "./infoa_enl_rank.js";
import _infoa_enl_reg_plano from  "./infoa_enl_reg_plano.js";
import _infoa_enl_usuario from  "./infoa_enl_usuario.js";
import _infoa_enl_visto_recentemente from  "./infoa_enl_visto_recentemente.js";
import _infoa_gab_cartao from  "./infoa_gab_cartao.js";
import _infoa_gab_endereco from  "./infoa_gab_endereco.js";
import _infoa_gab_entrega from  "./infoa_gab_entrega.js";
import _infoa_gab_produto from  "./infoa_gab_produto.js";
import _infoa_gab_usuario from  "./infoa_gab_usuario.js";
import _infoa_gab_venda from  "./infoa_gab_venda.js";
import _infoa_gab_venda_item from  "./infoa_gab_venda_item.js";
import _infoa_sti_categoria from  "./infoa_sti_categoria.js";
import _infoa_sti_cliente from  "./infoa_sti_cliente.js";
import _infoa_sti_cupom from  "./infoa_sti_cupom.js";
import _infoa_sti_endereco from  "./infoa_sti_endereco.js";
import _infoa_sti_produto from  "./infoa_sti_produto.js";
import _infoa_sti_venda from  "./infoa_sti_venda.js";
import _infoa_sti_venda_item from  "./infoa_sti_venda_item.js";
import _infob_amz_tbdenuncia from  "./infob_amz_tbdenuncia.js";
import _infob_amz_tbreporte_denuncia from  "./infob_amz_tbreporte_denuncia.js";
import _infob_amz_tbusuario from  "./infob_amz_tbusuario.js";
import _infob_apn_tb_adm from  "./infob_apn_tb_adm.js";
import _infob_apn_tb_adocao from  "./infob_apn_tb_adocao.js";
import _infob_apn_tb_pet from  "./infob_apn_tb_pet.js";
import _infob_apn_tb_user from  "./infob_apn_tb_user.js";
import _infob_hdm_admin from  "./infob_hdm_admin.js";
import _infob_hdm_cadastro from  "./infob_hdm_cadastro.js";
import _infob_hdm_cadastro_adm from  "./infob_hdm_cadastro_adm.js";
import _infob_hdm_chat from  "./infob_hdm_chat.js";
import _infob_hdm_chat_denuncias from  "./infob_hdm_chat_denuncias.js";
import _infob_hdm_denuncia from  "./infob_hdm_denuncia.js";
import _infob_hdm_esqueci_senha from  "./infob_hdm_esqueci_senha.js";
import _infob_hdm_esqueci_senha_adm from  "./infob_hdm_esqueci_senha_adm.js";
import _infob_hdm_login from  "./infob_hdm_login.js";
import _infob_hdm_login_adm from  "./infob_hdm_login_adm.js";
import _infob_hdm_mapa from  "./infob_hdm_mapa.js";
import _infob_hdm_sala from  "./infob_hdm_sala.js";
import _infob_hdm_usuario from  "./infob_hdm_usuario.js";
import _infob_mw_filmes from  "./infob_mw_filmes.js";
import _infob_mw_tbatores from  "./infob_mw_tbatores.js";
import _infob_mw_tbcomentarios from  "./infob_mw_tbcomentarios.js";
import _infob_mw_tbfilmeusu from  "./infob_mw_tbfilmeusu.js";
import _infob_mw_tblista from  "./infob_mw_tblista.js";
import _infob_mw_tblistaitem from  "./infob_mw_tblistaitem.js";
import _infob_mw_usuario from  "./infob_mw_usuario.js";
import _infoc_atn_tb_chat from  "./infoc_atn_tb_chat.js";
import _infoc_atn_tb_configuracoes_empresa from  "./infoc_atn_tb_configuracoes_empresa.js";
import _infoc_atn_tb_configuracoes_pessoais from  "./infoc_atn_tb_configuracoes_pessoais.js";
import _infoc_atn_tb_curriculo from  "./infoc_atn_tb_curriculo.js";
import _infoc_atn_tb_empresa from  "./infoc_atn_tb_empresa.js";
import _infoc_atn_tb_pessoal from  "./infoc_atn_tb_pessoal.js";
import _infoc_atn_tb_sala from  "./infoc_atn_tb_sala.js";
import _infoc_atn_tb_vagas from  "./infoc_atn_tb_vagas.js";
import _infoc_jdf_adm from  "./infoc_jdf_adm.js";
import _infoc_jdf_cartao from  "./infoc_jdf_cartao.js";
import _infoc_jdf_chat from  "./infoc_jdf_chat.js";
import _infoc_jdf_cliente from  "./infoc_jdf_cliente.js";
import _infoc_jdf_item_pedido from  "./infoc_jdf_item_pedido.js";
import _infoc_jdf_pedido from  "./infoc_jdf_pedido.js";
import _infoc_jdf_produto from  "./infoc_jdf_produto.js";
import _infoc_ntc_administrador from  "./infoc_ntc_administrador.js";
import _infoc_ntc_apoio_frase from  "./infoc_ntc_apoio_frase.js";
import _infoc_ntc_caracteristica_fisica from  "./infoc_ntc_caracteristica_fisica.js";
import _infoc_ntc_denuncia from  "./infoc_ntc_denuncia.js";
import _infoc_ntc_local from  "./infoc_ntc_local.js";
import _infoc_ntc_usuario from  "./infoc_ntc_usuario.js";
import _infoc_ntc_vestimento from  "./infoc_ntc_vestimento.js";
import _infoc_nws_tb_calendario from  "./infoc_nws_tb_calendario.js";
import _infoc_nws_tb_calendario_item from  "./infoc_nws_tb_calendario_item.js";
import _infoc_nws_tb_cartao from  "./infoc_nws_tb_cartao.js";
import _infoc_nws_tb_categoria from  "./infoc_nws_tb_categoria.js";
import _infoc_nws_tb_evento from  "./infoc_nws_tb_evento.js";
import _infoc_nws_tb_pix from  "./infoc_nws_tb_pix.js";
import _infoc_nws_tb_usuario from  "./infoc_nws_tb_usuario.js";
import _infoc_nws_tb_venda from  "./infoc_nws_tb_venda.js";
import _infoc_nws_tb_venda_item from  "./infoc_nws_tb_venda_item.js";
import _infoc_tcc_cliente from  "./infoc_tcc_cliente.js";
import _infoc_tcc_endereco from  "./infoc_tcc_endereco.js";
import _infoc_tcc_produto from  "./infoc_tcc_produto.js";
import _infoc_tcc_venda from  "./infoc_tcc_venda.js";
import _infoc_tcc_venda_item from  "./infoc_tcc_venda_item.js";
import _infoc_tct_cartao from  "./infoc_tct_cartao.js";
import _infoc_tct_categorias from  "./infoc_tct_categorias.js";
import _infoc_tct_chat from  "./infoc_tct_chat.js";
import _infoc_tct_cliente from  "./infoc_tct_cliente.js";
import _infoc_tct_compra from  "./infoc_tct_compra.js";
import _infoc_tct_compra_item from  "./infoc_tct_compra_item.js";
import _infoc_tct_endereco from  "./infoc_tct_endereco.js";
import _infoc_tct_produto from  "./infoc_tct_produto.js";
import _infoc_tdv_adm from  "./infoc_tdv_adm.js";
import _infoc_tdv_cliente from  "./infoc_tdv_cliente.js";
import _infoc_tdv_cupom from  "./infoc_tdv_cupom.js";
import _infoc_tdv_endereco from  "./infoc_tdv_endereco.js";
import _infoc_tdv_favorito from  "./infoc_tdv_favorito.js";
import _infoc_tdv_forma_pagamento from  "./infoc_tdv_forma_pagamento.js";
import _infoc_tdv_genero from  "./infoc_tdv_genero.js";
import _infoc_tdv_livro from  "./infoc_tdv_livro.js";
import _infoc_tdv_pedido from  "./infoc_tdv_pedido.js";
import _infoc_tdv_pedido_item from  "./infoc_tdv_pedido_item.js";
import _infoc_tht_cartao from  "./infoc_tht_cartao.js";
import _infoc_tht_chat from  "./infoc_tht_chat.js";
import _infoc_tht_compra from  "./infoc_tht_compra.js";
import _infoc_tht_lugar from  "./infoc_tht_lugar.js";
import _infoc_tht_pacote from  "./infoc_tht_pacote.js";
import _infoc_tht_usuario from  "./infoc_tht_usuario.js";
import _infod_ecm_tb_calc from  "./infod_ecm_tb_calc.js";
import _infod_ecm_tb_categorias from  "./infod_ecm_tb_categorias.js";
import _infod_ecm_tb_roupas from  "./infod_ecm_tb_roupas.js";
import _infod_ecm_usuario from  "./infod_ecm_usuario.js";
import _infod_leo_agendamento from  "./infod_leo_agendamento.js";
import _infod_leo_cliente from  "./infod_leo_cliente.js";
import _infod_leo_funcionario from  "./infod_leo_funcionario.js";
import _infod_leo_servico from  "./infod_leo_servico.js";
import _infod_leo_servico_imagem from  "./infod_leo_servico_imagem.js";
import _infod_omn_area_vaga from  "./infod_omn_area_vaga.js";
import _infod_omn_candidato from  "./infod_omn_candidato.js";
import _infod_omn_candidato_vaga from  "./infod_omn_candidato_vaga.js";
import _infod_omn_curriculo from  "./infod_omn_curriculo.js";
import _infod_omn_empresa from  "./infod_omn_empresa.js";
import _infod_omn_vaga from  "./infod_omn_vaga.js";
import _infod_ssc_adm from  "./infod_ssc_adm.js";
import _infod_ssc_cliente from  "./infod_ssc_cliente.js";
import _infod_ssc_endereco from  "./infod_ssc_endereco.js";
import _infod_ssc_favoritos from  "./infod_ssc_favoritos.js";
import _infod_ssc_item from  "./infod_ssc_item.js";
import _infod_ssc_pedido from  "./infod_ssc_pedido.js";
import _infod_ssc_produto from  "./infod_ssc_produto.js";
import _infod_ssc_venda from  "./infod_ssc_venda.js";
import _infod_tif_animes from  "./infod_tif_animes.js";
import _infod_tif_chat from  "./infod_tif_chat.js";
import _infod_tif_comentario from  "./infod_tif_comentario.js";
import _infod_tif_comunidade from  "./infod_tif_comunidade.js";
import _infod_tif_favoritos from  "./infod_tif_favoritos.js";
import _infod_tif_usuario from  "./infod_tif_usuario.js";
import _infod_tif_usuario_comunidade from  "./infod_tif_usuario_comunidade.js";
import _insf_tb_produto from  "./insf_tb_produto.js";
import _insf_tb_usuario from  "./insf_tb_usuario.js";
import _insf_tb_usuario_endereco from  "./insf_tb_usuario_endereco.js";
import _insf_tb_usuario_endereco_uf from  "./insf_tb_usuario_endereco_uf.js";
import _tb_endereco from  "./tb_endereco.js";
import _tb_produto from  "./tb_produto.js";

export default function initModels(sequelize) {
  var infoa_dtb_tb_cliente = _infoa_dtb_tb_cliente.init(sequelize, DataTypes);
  var infoa_dtb_tb_genero = _infoa_dtb_tb_genero.init(sequelize, DataTypes);
  var infoa_dtb_tb_livro = _infoa_dtb_tb_livro.init(sequelize, DataTypes);
  var infoa_dtn_tb_avaliacao = _infoa_dtn_tb_avaliacao.init(sequelize, DataTypes);
  var infoa_dtn_tb_cliente = _infoa_dtn_tb_cliente.init(sequelize, DataTypes);
  var infoa_dtn_tb_endereco = _infoa_dtn_tb_endereco.init(sequelize, DataTypes);
  var infoa_dtn_tb_favoritos = _infoa_dtn_tb_favoritos.init(sequelize, DataTypes);
  var infoa_dtn_tb_produto = _infoa_dtn_tb_produto.init(sequelize, DataTypes);
  var infoa_dtn_tb_tamanhos = _infoa_dtn_tb_tamanhos.init(sequelize, DataTypes);
  var infoa_dtn_tb_usuarios_adm = _infoa_dtn_tb_usuarios_adm.init(sequelize, DataTypes);
  var infoa_dtn_tb_venda = _infoa_dtn_tb_venda.init(sequelize, DataTypes);
  var infoa_dtn_tb_venda_item = _infoa_dtn_tb_venda_item.init(sequelize, DataTypes);
  var infoa_enl_cartao_credito = _infoa_enl_cartao_credito.init(sequelize, DataTypes);
  var infoa_enl_categoria = _infoa_enl_categoria.init(sequelize, DataTypes);
  var infoa_enl_chat = _infoa_enl_chat.init(sequelize, DataTypes);
  var infoa_enl_chat_usuario = _infoa_enl_chat_usuario.init(sequelize, DataTypes);
  var infoa_enl_pedido = _infoa_enl_pedido.init(sequelize, DataTypes);
  var infoa_enl_pedido_compra_e_venda = _infoa_enl_pedido_compra_e_venda.init(sequelize, DataTypes);
  var infoa_enl_plano = _infoa_enl_plano.init(sequelize, DataTypes);
  var infoa_enl_produto = _infoa_enl_produto.init(sequelize, DataTypes);
  var infoa_enl_rank = _infoa_enl_rank.init(sequelize, DataTypes);
  var infoa_enl_reg_plano = _infoa_enl_reg_plano.init(sequelize, DataTypes);
  var infoa_enl_usuario = _infoa_enl_usuario.init(sequelize, DataTypes);
  var infoa_enl_visto_recentemente = _infoa_enl_visto_recentemente.init(sequelize, DataTypes);
  var infoa_gab_cartao = _infoa_gab_cartao.init(sequelize, DataTypes);
  var infoa_gab_endereco = _infoa_gab_endereco.init(sequelize, DataTypes);
  var infoa_gab_entrega = _infoa_gab_entrega.init(sequelize, DataTypes);
  var infoa_gab_produto = _infoa_gab_produto.init(sequelize, DataTypes);
  var infoa_gab_usuario = _infoa_gab_usuario.init(sequelize, DataTypes);
  var infoa_gab_venda = _infoa_gab_venda.init(sequelize, DataTypes);
  var infoa_gab_venda_item = _infoa_gab_venda_item.init(sequelize, DataTypes);
  var infoa_sti_categoria = _infoa_sti_categoria.init(sequelize, DataTypes);
  var infoa_sti_cliente = _infoa_sti_cliente.init(sequelize, DataTypes);
  var infoa_sti_cupom = _infoa_sti_cupom.init(sequelize, DataTypes);
  var infoa_sti_endereco = _infoa_sti_endereco.init(sequelize, DataTypes);
  var infoa_sti_produto = _infoa_sti_produto.init(sequelize, DataTypes);
  var infoa_sti_venda = _infoa_sti_venda.init(sequelize, DataTypes);
  var infoa_sti_venda_item = _infoa_sti_venda_item.init(sequelize, DataTypes);
  var infob_amz_tbdenuncia = _infob_amz_tbdenuncia.init(sequelize, DataTypes);
  var infob_amz_tbreporte_denuncia = _infob_amz_tbreporte_denuncia.init(sequelize, DataTypes);
  var infob_amz_tbusuario = _infob_amz_tbusuario.init(sequelize, DataTypes);
  var infob_apn_tb_adm = _infob_apn_tb_adm.init(sequelize, DataTypes);
  var infob_apn_tb_adocao = _infob_apn_tb_adocao.init(sequelize, DataTypes);
  var infob_apn_tb_pet = _infob_apn_tb_pet.init(sequelize, DataTypes);
  var infob_apn_tb_user = _infob_apn_tb_user.init(sequelize, DataTypes);
  var infob_hdm_admin = _infob_hdm_admin.init(sequelize, DataTypes);
  var infob_hdm_cadastro = _infob_hdm_cadastro.init(sequelize, DataTypes);
  var infob_hdm_cadastro_adm = _infob_hdm_cadastro_adm.init(sequelize, DataTypes);
  var infob_hdm_chat = _infob_hdm_chat.init(sequelize, DataTypes);
  var infob_hdm_chat_denuncias = _infob_hdm_chat_denuncias.init(sequelize, DataTypes);
  var infob_hdm_denuncia = _infob_hdm_denuncia.init(sequelize, DataTypes);
  var infob_hdm_esqueci_senha = _infob_hdm_esqueci_senha.init(sequelize, DataTypes);
  var infob_hdm_esqueci_senha_adm = _infob_hdm_esqueci_senha_adm.init(sequelize, DataTypes);
  var infob_hdm_login = _infob_hdm_login.init(sequelize, DataTypes);
  var infob_hdm_login_adm = _infob_hdm_login_adm.init(sequelize, DataTypes);
  var infob_hdm_mapa = _infob_hdm_mapa.init(sequelize, DataTypes);
  var infob_hdm_sala = _infob_hdm_sala.init(sequelize, DataTypes);
  var infob_hdm_usuario = _infob_hdm_usuario.init(sequelize, DataTypes);
  var infob_mw_filmes = _infob_mw_filmes.init(sequelize, DataTypes);
  var infob_mw_tbatores = _infob_mw_tbatores.init(sequelize, DataTypes);
  var infob_mw_tbcomentarios = _infob_mw_tbcomentarios.init(sequelize, DataTypes);
  var infob_mw_tbfilmeusu = _infob_mw_tbfilmeusu.init(sequelize, DataTypes);
  var infob_mw_tblista = _infob_mw_tblista.init(sequelize, DataTypes);
  var infob_mw_tblistaitem = _infob_mw_tblistaitem.init(sequelize, DataTypes);
  var infob_mw_usuario = _infob_mw_usuario.init(sequelize, DataTypes);
  var infoc_atn_tb_chat = _infoc_atn_tb_chat.init(sequelize, DataTypes);
  var infoc_atn_tb_configuracoes_empresa = _infoc_atn_tb_configuracoes_empresa.init(sequelize, DataTypes);
  var infoc_atn_tb_configuracoes_pessoais = _infoc_atn_tb_configuracoes_pessoais.init(sequelize, DataTypes);
  var infoc_atn_tb_curriculo = _infoc_atn_tb_curriculo.init(sequelize, DataTypes);
  var infoc_atn_tb_empresa = _infoc_atn_tb_empresa.init(sequelize, DataTypes);
  var infoc_atn_tb_pessoal = _infoc_atn_tb_pessoal.init(sequelize, DataTypes);
  var infoc_atn_tb_sala = _infoc_atn_tb_sala.init(sequelize, DataTypes);
  var infoc_atn_tb_vagas = _infoc_atn_tb_vagas.init(sequelize, DataTypes);
  var infoc_jdf_adm = _infoc_jdf_adm.init(sequelize, DataTypes);
  var infoc_jdf_cartao = _infoc_jdf_cartao.init(sequelize, DataTypes);
  var infoc_jdf_chat = _infoc_jdf_chat.init(sequelize, DataTypes);
  var infoc_jdf_cliente = _infoc_jdf_cliente.init(sequelize, DataTypes);
  var infoc_jdf_item_pedido = _infoc_jdf_item_pedido.init(sequelize, DataTypes);
  var infoc_jdf_pedido = _infoc_jdf_pedido.init(sequelize, DataTypes);
  var infoc_jdf_produto = _infoc_jdf_produto.init(sequelize, DataTypes);
  var infoc_ntc_administrador = _infoc_ntc_administrador.init(sequelize, DataTypes);
  var infoc_ntc_apoio_frase = _infoc_ntc_apoio_frase.init(sequelize, DataTypes);
  var infoc_ntc_caracteristica_fisica = _infoc_ntc_caracteristica_fisica.init(sequelize, DataTypes);
  var infoc_ntc_denuncia = _infoc_ntc_denuncia.init(sequelize, DataTypes);
  var infoc_ntc_local = _infoc_ntc_local.init(sequelize, DataTypes);
  var infoc_ntc_usuario = _infoc_ntc_usuario.init(sequelize, DataTypes);
  var infoc_ntc_vestimento = _infoc_ntc_vestimento.init(sequelize, DataTypes);
  var infoc_nws_tb_calendario = _infoc_nws_tb_calendario.init(sequelize, DataTypes);
  var infoc_nws_tb_calendario_item = _infoc_nws_tb_calendario_item.init(sequelize, DataTypes);
  var infoc_nws_tb_cartao = _infoc_nws_tb_cartao.init(sequelize, DataTypes);
  var infoc_nws_tb_categoria = _infoc_nws_tb_categoria.init(sequelize, DataTypes);
  var infoc_nws_tb_evento = _infoc_nws_tb_evento.init(sequelize, DataTypes);
  var infoc_nws_tb_pix = _infoc_nws_tb_pix.init(sequelize, DataTypes);
  var infoc_nws_tb_usuario = _infoc_nws_tb_usuario.init(sequelize, DataTypes);
  var infoc_nws_tb_venda = _infoc_nws_tb_venda.init(sequelize, DataTypes);
  var infoc_nws_tb_venda_item = _infoc_nws_tb_venda_item.init(sequelize, DataTypes);
  var infoc_tcc_cliente = _infoc_tcc_cliente.init(sequelize, DataTypes);
  var infoc_tcc_endereco = _infoc_tcc_endereco.init(sequelize, DataTypes);
  var infoc_tcc_produto = _infoc_tcc_produto.init(sequelize, DataTypes);
  var infoc_tcc_venda = _infoc_tcc_venda.init(sequelize, DataTypes);
  var infoc_tcc_venda_item = _infoc_tcc_venda_item.init(sequelize, DataTypes);
  var infoc_tct_cartao = _infoc_tct_cartao.init(sequelize, DataTypes);
  var infoc_tct_categorias = _infoc_tct_categorias.init(sequelize, DataTypes);
  var infoc_tct_chat = _infoc_tct_chat.init(sequelize, DataTypes);
  var infoc_tct_cliente = _infoc_tct_cliente.init(sequelize, DataTypes);
  var infoc_tct_compra = _infoc_tct_compra.init(sequelize, DataTypes);
  var infoc_tct_compra_item = _infoc_tct_compra_item.init(sequelize, DataTypes);
  var infoc_tct_endereco = _infoc_tct_endereco.init(sequelize, DataTypes);
  var infoc_tct_produto = _infoc_tct_produto.init(sequelize, DataTypes);
  var infoc_tdv_adm = _infoc_tdv_adm.init(sequelize, DataTypes);
  var infoc_tdv_cliente = _infoc_tdv_cliente.init(sequelize, DataTypes);
  var infoc_tdv_cupom = _infoc_tdv_cupom.init(sequelize, DataTypes);
  var infoc_tdv_endereco = _infoc_tdv_endereco.init(sequelize, DataTypes);
  var infoc_tdv_favorito = _infoc_tdv_favorito.init(sequelize, DataTypes);
  var infoc_tdv_forma_pagamento = _infoc_tdv_forma_pagamento.init(sequelize, DataTypes);
  var infoc_tdv_genero = _infoc_tdv_genero.init(sequelize, DataTypes);
  var infoc_tdv_livro = _infoc_tdv_livro.init(sequelize, DataTypes);
  var infoc_tdv_pedido = _infoc_tdv_pedido.init(sequelize, DataTypes);
  var infoc_tdv_pedido_item = _infoc_tdv_pedido_item.init(sequelize, DataTypes);
  var infoc_tht_cartao = _infoc_tht_cartao.init(sequelize, DataTypes);
  var infoc_tht_chat = _infoc_tht_chat.init(sequelize, DataTypes);
  var infoc_tht_compra = _infoc_tht_compra.init(sequelize, DataTypes);
  var infoc_tht_lugar = _infoc_tht_lugar.init(sequelize, DataTypes);
  var infoc_tht_pacote = _infoc_tht_pacote.init(sequelize, DataTypes);
  var infoc_tht_usuario = _infoc_tht_usuario.init(sequelize, DataTypes);
  var infod_ecm_tb_calc = _infod_ecm_tb_calc.init(sequelize, DataTypes);
  var infod_ecm_tb_categorias = _infod_ecm_tb_categorias.init(sequelize, DataTypes);
  var infod_ecm_tb_roupas = _infod_ecm_tb_roupas.init(sequelize, DataTypes);
  var infod_ecm_usuario = _infod_ecm_usuario.init(sequelize, DataTypes);
  var infod_leo_agendamento = _infod_leo_agendamento.init(sequelize, DataTypes);
  var infod_leo_cliente = _infod_leo_cliente.init(sequelize, DataTypes);
  var infod_leo_funcionario = _infod_leo_funcionario.init(sequelize, DataTypes);
  var infod_leo_servico = _infod_leo_servico.init(sequelize, DataTypes);
  var infod_leo_servico_imagem = _infod_leo_servico_imagem.init(sequelize, DataTypes);
  var infod_omn_area_vaga = _infod_omn_area_vaga.init(sequelize, DataTypes);
  var infod_omn_candidato = _infod_omn_candidato.init(sequelize, DataTypes);
  var infod_omn_candidato_vaga = _infod_omn_candidato_vaga.init(sequelize, DataTypes);
  var infod_omn_curriculo = _infod_omn_curriculo.init(sequelize, DataTypes);
  var infod_omn_empresa = _infod_omn_empresa.init(sequelize, DataTypes);
  var infod_omn_vaga = _infod_omn_vaga.init(sequelize, DataTypes);
  var infod_ssc_adm = _infod_ssc_adm.init(sequelize, DataTypes);
  var infod_ssc_cliente = _infod_ssc_cliente.init(sequelize, DataTypes);
  var infod_ssc_endereco = _infod_ssc_endereco.init(sequelize, DataTypes);
  var infod_ssc_favoritos = _infod_ssc_favoritos.init(sequelize, DataTypes);
  var infod_ssc_item = _infod_ssc_item.init(sequelize, DataTypes);
  var infod_ssc_pedido = _infod_ssc_pedido.init(sequelize, DataTypes);
  var infod_ssc_produto = _infod_ssc_produto.init(sequelize, DataTypes);
  var infod_ssc_venda = _infod_ssc_venda.init(sequelize, DataTypes);
  var infod_tif_animes = _infod_tif_animes.init(sequelize, DataTypes);
  var infod_tif_chat = _infod_tif_chat.init(sequelize, DataTypes);
  var infod_tif_comentario = _infod_tif_comentario.init(sequelize, DataTypes);
  var infod_tif_comunidade = _infod_tif_comunidade.init(sequelize, DataTypes);
  var infod_tif_favoritos = _infod_tif_favoritos.init(sequelize, DataTypes);
  var infod_tif_usuario = _infod_tif_usuario.init(sequelize, DataTypes);
  var infod_tif_usuario_comunidade = _infod_tif_usuario_comunidade.init(sequelize, DataTypes);
  var insf_tb_produto = _insf_tb_produto.init(sequelize, DataTypes);
  var insf_tb_usuario = _insf_tb_usuario.init(sequelize, DataTypes);
  var insf_tb_usuario_endereco = _insf_tb_usuario_endereco.init(sequelize, DataTypes);
  var insf_tb_usuario_endereco_uf = _insf_tb_usuario_endereco_uf.init(sequelize, DataTypes);
  var tb_endereco = _tb_endereco.init(sequelize, DataTypes);
  var tb_produto = _tb_produto.init(sequelize, DataTypes);

  infoa_dtb_tb_livro.belongsTo(infoa_dtb_tb_genero, { as: "ID_GENERO_infoa_dtb_tb_genero", foreignKey: "ID_GENERO"});
  infoa_dtb_tb_genero.hasMany(infoa_dtb_tb_livro, { as: "infoa_dtb_tb_livros", foreignKey: "ID_GENERO"});
  infoa_dtn_tb_avaliacao.belongsTo(infoa_dtn_tb_cliente, { as: "id_cliente_infoa_dtn_tb_cliente", foreignKey: "id_cliente"});
  infoa_dtn_tb_cliente.hasMany(infoa_dtn_tb_avaliacao, { as: "infoa_dtn_tb_avaliacaos", foreignKey: "id_cliente"});
  infoa_dtn_tb_endereco.belongsTo(infoa_dtn_tb_cliente, { as: "id_cliente_infoa_dtn_tb_cliente", foreignKey: "id_cliente"});
  infoa_dtn_tb_cliente.hasMany(infoa_dtn_tb_endereco, { as: "infoa_dtn_tb_enderecos", foreignKey: "id_cliente"});
  infoa_dtn_tb_favoritos.belongsTo(infoa_dtn_tb_cliente, { as: "id_cliente_infoa_dtn_tb_cliente", foreignKey: "id_cliente"});
  infoa_dtn_tb_cliente.hasMany(infoa_dtn_tb_favoritos, { as: "infoa_dtn_tb_favoritos", foreignKey: "id_cliente"});
  infoa_dtn_tb_avaliacao.belongsTo(infoa_dtn_tb_produto, { as: "id_produto_infoa_dtn_tb_produto", foreignKey: "id_produto"});
  infoa_dtn_tb_produto.hasMany(infoa_dtn_tb_avaliacao, { as: "infoa_dtn_tb_avaliacaos", foreignKey: "id_produto"});
  infoa_dtn_tb_favoritos.belongsTo(infoa_dtn_tb_produto, { as: "id_produto_infoa_dtn_tb_produto", foreignKey: "id_produto"});
  infoa_dtn_tb_produto.hasMany(infoa_dtn_tb_favoritos, { as: "infoa_dtn_tb_favoritos", foreignKey: "id_produto"});
  infoa_dtn_tb_venda_item.belongsTo(infoa_dtn_tb_produto, { as: "id_produto_infoa_dtn_tb_produto", foreignKey: "id_produto"});
  infoa_dtn_tb_produto.hasMany(infoa_dtn_tb_venda_item, { as: "infoa_dtn_tb_venda_items", foreignKey: "id_produto"});
  infoa_dtn_tb_produto.belongsTo(infoa_dtn_tb_tamanhos, { as: "id_tamanho_infoa_dtn_tb_tamanho", foreignKey: "id_tamanho"});
  infoa_dtn_tb_tamanhos.hasMany(infoa_dtn_tb_produto, { as: "infoa_dtn_tb_produtos", foreignKey: "id_tamanho"});
  infoa_dtn_tb_venda_item.belongsTo(infoa_dtn_tb_venda, { as: "id_venda_infoa_dtn_tb_venda", foreignKey: "id_venda"});
  infoa_dtn_tb_venda.hasMany(infoa_dtn_tb_venda_item, { as: "infoa_dtn_tb_venda_items", foreignKey: "id_venda"});
  infoa_enl_produto.belongsTo(infoa_enl_categoria, { as: "id_categoria_infoa_enl_categorium", foreignKey: "id_categoria"});
  infoa_enl_categoria.hasMany(infoa_enl_produto, { as: "infoa_enl_produtos", foreignKey: "id_categoria"});
  infoa_enl_chat.belongsTo(infoa_enl_chat_usuario, { as: "id_chat_usuario_infoa_enl_chat_usuario", foreignKey: "id_chat_usuario"});
  infoa_enl_chat_usuario.hasMany(infoa_enl_chat, { as: "infoa_enl_chats", foreignKey: "id_chat_usuario"});
  infoa_enl_pedido_compra_e_venda.belongsTo(infoa_enl_pedido, { as: "id_pedido_infoa_enl_pedido", foreignKey: "id_pedido"});
  infoa_enl_pedido.hasMany(infoa_enl_pedido_compra_e_venda, { as: "infoa_enl_pedido_compra_e_vendas", foreignKey: "id_pedido"});
  infoa_enl_reg_plano.belongsTo(infoa_enl_plano, { as: "id_plano_infoa_enl_plano", foreignKey: "id_plano"});
  infoa_enl_plano.hasMany(infoa_enl_reg_plano, { as: "infoa_enl_reg_planos", foreignKey: "id_plano"});
  infoa_enl_pedido_compra_e_venda.belongsTo(infoa_enl_produto, { as: "id_produto_infoa_enl_produto", foreignKey: "id_produto"});
  infoa_enl_produto.hasMany(infoa_enl_pedido_compra_e_venda, { as: "infoa_enl_pedido_compra_e_vendas", foreignKey: "id_produto"});
  infoa_enl_rank.belongsTo(infoa_enl_produto, { as: "id_produto_infoa_enl_produto", foreignKey: "id_produto"});
  infoa_enl_produto.hasMany(infoa_enl_rank, { as: "infoa_enl_ranks", foreignKey: "id_produto"});
  infoa_enl_visto_recentemente.belongsTo(infoa_enl_produto, { as: "id_produto_infoa_enl_produto", foreignKey: "id_produto"});
  infoa_enl_produto.hasMany(infoa_enl_visto_recentemente, { as: "infoa_enl_visto_recentementes", foreignKey: "id_produto"});
  infoa_enl_cartao_credito.belongsTo(infoa_enl_usuario, { as: "id_usuario_infoa_enl_usuario", foreignKey: "id_usuario"});
  infoa_enl_usuario.hasMany(infoa_enl_cartao_credito, { as: "infoa_enl_cartao_creditos", foreignKey: "id_usuario"});
  infoa_enl_chat.belongsTo(infoa_enl_usuario, { as: "id_usuario_infoa_enl_usuario", foreignKey: "id_usuario"});
  infoa_enl_usuario.hasMany(infoa_enl_chat, { as: "infoa_enl_chats", foreignKey: "id_usuario"});
  infoa_enl_chat_usuario.belongsTo(infoa_enl_usuario, { as: "id_usuario_comprador_infoa_enl_usuario", foreignKey: "id_usuario_comprador"});
  infoa_enl_usuario.hasMany(infoa_enl_chat_usuario, { as: "infoa_enl_chat_usuarios", foreignKey: "id_usuario_comprador"});
  infoa_enl_chat_usuario.belongsTo(infoa_enl_usuario, { as: "id_usuario_vendedor_infoa_enl_usuario", foreignKey: "id_usuario_vendedor"});
  infoa_enl_usuario.hasMany(infoa_enl_chat_usuario, { as: "id_usuario_vendedor_infoa_enl_chat_usuarios", foreignKey: "id_usuario_vendedor"});
  infoa_enl_pedido.belongsTo(infoa_enl_usuario, { as: "id_usuario_comprador_infoa_enl_usuario", foreignKey: "id_usuario_comprador"});
  infoa_enl_usuario.hasMany(infoa_enl_pedido, { as: "infoa_enl_pedidos", foreignKey: "id_usuario_comprador"});
  infoa_enl_pedido.belongsTo(infoa_enl_usuario, { as: "id_usuario_vendedor_infoa_enl_usuario", foreignKey: "id_usuario_vendedor"});
  infoa_enl_usuario.hasMany(infoa_enl_pedido, { as: "id_usuario_vendedor_infoa_enl_pedidos", foreignKey: "id_usuario_vendedor"});
  infoa_enl_produto.belongsTo(infoa_enl_usuario, { as: "id_usuario_infoa_enl_usuario", foreignKey: "id_usuario"});
  infoa_enl_usuario.hasMany(infoa_enl_produto, { as: "infoa_enl_produtos", foreignKey: "id_usuario"});
  infoa_enl_reg_plano.belongsTo(infoa_enl_usuario, { as: "id_usuario_infoa_enl_usuario", foreignKey: "id_usuario"});
  infoa_enl_usuario.hasMany(infoa_enl_reg_plano, { as: "infoa_enl_reg_planos", foreignKey: "id_usuario"});
  infoa_enl_visto_recentemente.belongsTo(infoa_enl_usuario, { as: "id_usuario_infoa_enl_usuario", foreignKey: "id_usuario"});
  infoa_enl_usuario.hasMany(infoa_enl_visto_recentemente, { as: "infoa_enl_visto_recentementes", foreignKey: "id_usuario"});
  infoa_gab_entrega.belongsTo(infoa_gab_endereco, { as: "id_endereco_infoa_gab_endereco", foreignKey: "id_endereco"});
  infoa_gab_endereco.hasMany(infoa_gab_entrega, { as: "infoa_gab_entregas", foreignKey: "id_endereco"});
  infoa_gab_venda_item.belongsTo(infoa_gab_produto, { as: "id_produto_infoa_gab_produto", foreignKey: "id_produto"});
  infoa_gab_produto.hasMany(infoa_gab_venda_item, { as: "infoa_gab_venda_items", foreignKey: "id_produto"});
  infoa_gab_cartao.belongsTo(infoa_gab_usuario, { as: "id_usuario_infoa_gab_usuario", foreignKey: "id_usuario"});
  infoa_gab_usuario.hasMany(infoa_gab_cartao, { as: "infoa_gab_cartaos", foreignKey: "id_usuario"});
  infoa_gab_endereco.belongsTo(infoa_gab_usuario, { as: "id_usuario_infoa_gab_usuario", foreignKey: "id_usuario"});
  infoa_gab_usuario.hasMany(infoa_gab_endereco, { as: "infoa_gab_enderecos", foreignKey: "id_usuario"});
  infoa_gab_venda.belongsTo(infoa_gab_usuario, { as: "id_usuario_infoa_gab_usuario", foreignKey: "id_usuario"});
  infoa_gab_usuario.hasMany(infoa_gab_venda, { as: "infoa_gab_vendas", foreignKey: "id_usuario"});
  infoa_gab_entrega.belongsTo(infoa_gab_venda, { as: "id_venda_infoa_gab_venda", foreignKey: "id_venda"});
  infoa_gab_venda.hasMany(infoa_gab_entrega, { as: "infoa_gab_entregas", foreignKey: "id_venda"});
  infoa_gab_venda_item.belongsTo(infoa_gab_venda, { as: "id_venda_infoa_gab_venda", foreignKey: "id_venda"});
  infoa_gab_venda.hasMany(infoa_gab_venda_item, { as: "infoa_gab_venda_items", foreignKey: "id_venda"});
  infoa_sti_produto.belongsTo(infoa_sti_categoria, { as: "id_categoria_infoa_sti_categorium", foreignKey: "id_categoria"});
  infoa_sti_categoria.hasMany(infoa_sti_produto, { as: "infoa_sti_produtos", foreignKey: "id_categoria"});
  infoa_sti_endereco.belongsTo(infoa_sti_cliente, { as: "id_cliente_infoa_sti_cliente", foreignKey: "id_cliente"});
  infoa_sti_cliente.hasMany(infoa_sti_endereco, { as: "infoa_sti_enderecos", foreignKey: "id_cliente"});
  infoa_sti_venda.belongsTo(infoa_sti_endereco, { as: "id_endereco_infoa_sti_endereco", foreignKey: "id_endereco"});
  infoa_sti_endereco.hasMany(infoa_sti_venda, { as: "infoa_sti_vendas", foreignKey: "id_endereco"});
  infoa_sti_venda.belongsTo(infoa_sti_produto, { as: "id_produto_infoa_sti_produto", foreignKey: "id_produto"});
  infoa_sti_produto.hasMany(infoa_sti_venda, { as: "infoa_sti_vendas", foreignKey: "id_produto"});
  infoa_sti_venda_item.belongsTo(infoa_sti_produto, { as: "id_produto_infoa_sti_produto", foreignKey: "id_produto"});
  infoa_sti_produto.hasMany(infoa_sti_venda_item, { as: "infoa_sti_venda_items", foreignKey: "id_produto"});
  infoa_sti_venda_item.belongsTo(infoa_sti_venda, { as: "id_venda_infoa_sti_venda", foreignKey: "id_venda"});
  infoa_sti_venda.hasMany(infoa_sti_venda_item, { as: "infoa_sti_venda_items", foreignKey: "id_venda"});
  infob_amz_tbreporte_denuncia.belongsTo(infob_amz_tbdenuncia, { as: "id_denuncia_infob_amz_tbdenuncium", foreignKey: "id_denuncia"});
  infob_amz_tbdenuncia.hasMany(infob_amz_tbreporte_denuncia, { as: "infob_amz_tbreporte_denuncia", foreignKey: "id_denuncia"});
  infob_amz_tbdenuncia.belongsTo(infob_amz_tbusuario, { as: "id_usuario_infob_amz_tbusuario", foreignKey: "id_usuario"});
  infob_amz_tbusuario.hasMany(infob_amz_tbdenuncia, { as: "infob_amz_tbdenuncia", foreignKey: "id_usuario"});
  infob_amz_tbreporte_denuncia.belongsTo(infob_amz_tbusuario, { as: "id_usuario_infob_amz_tbusuario", foreignKey: "id_usuario"});
  infob_amz_tbusuario.hasMany(infob_amz_tbreporte_denuncia, { as: "infob_amz_tbreporte_denuncia", foreignKey: "id_usuario"});
  infob_hdm_chat.belongsTo(infob_hdm_sala, { as: "id_HDM_sala_infob_hdm_sala", foreignKey: "id_HDM_sala"});
  infob_hdm_sala.hasMany(infob_hdm_chat, { as: "infob_hdm_chats", foreignKey: "id_HDM_sala"});
  infob_hdm_chat.belongsTo(infob_hdm_usuario, { as: "id_HDM_usuario_infob_hdm_usuario", foreignKey: "id_HDM_usuario"});
  infob_hdm_usuario.hasMany(infob_hdm_chat, { as: "infob_hdm_chats", foreignKey: "id_HDM_usuario"});
  infob_mw_tblistaitem.belongsTo(infob_mw_filmes, { as: "id_filme_infob_mw_filme", foreignKey: "id_filme"});
  infob_mw_filmes.hasMany(infob_mw_tblistaitem, { as: "infob_mw_tblistaitems", foreignKey: "id_filme"});
  infob_mw_tblistaitem.belongsTo(infob_mw_tblista, { as: "id_lista_infob_mw_tblistum", foreignKey: "id_lista"});
  infob_mw_tblista.hasMany(infob_mw_tblistaitem, { as: "infob_mw_tblistaitems", foreignKey: "id_lista"});
  infob_mw_tblista.belongsTo(infob_mw_usuario, { as: "id_usuario_infob_mw_usuario", foreignKey: "id_usuario"});
  infob_mw_usuario.hasMany(infob_mw_tblista, { as: "infob_mw_tblista", foreignKey: "id_usuario"});
  infoc_jdf_cliente.belongsTo(infoc_jdf_cartao, { as: "id_cartao_infoc_jdf_cartao", foreignKey: "id_cartao"});
  infoc_jdf_cartao.hasMany(infoc_jdf_cliente, { as: "infoc_jdf_clientes", foreignKey: "id_cartao"});
  infoc_jdf_pedido.belongsTo(infoc_jdf_cliente, { as: "id_cliente_infoc_jdf_cliente", foreignKey: "id_cliente"});
  infoc_jdf_cliente.hasMany(infoc_jdf_pedido, { as: "infoc_jdf_pedidos", foreignKey: "id_cliente"});
  infoc_jdf_chat.belongsTo(infoc_jdf_pedido, { as: "id_pedido_infoc_jdf_pedido", foreignKey: "id_pedido"});
  infoc_jdf_pedido.hasMany(infoc_jdf_chat, { as: "infoc_jdf_chats", foreignKey: "id_pedido"});
  infoc_jdf_item_pedido.belongsTo(infoc_jdf_pedido, { as: "id_pedido_infoc_jdf_pedido", foreignKey: "id_pedido"});
  infoc_jdf_pedido.hasMany(infoc_jdf_item_pedido, { as: "infoc_jdf_item_pedidos", foreignKey: "id_pedido"});
  infoc_jdf_item_pedido.belongsTo(infoc_jdf_produto, { as: "id_produto_infoc_jdf_produto", foreignKey: "id_produto"});
  infoc_jdf_produto.hasMany(infoc_jdf_item_pedido, { as: "infoc_jdf_item_pedidos", foreignKey: "id_produto"});
  infoc_ntc_denuncia.belongsTo(infoc_ntc_caracteristica_fisica, { as: "id_fisico_infoc_ntc_caracteristica_fisica", foreignKey: "id_fisico"});
  infoc_ntc_caracteristica_fisica.hasMany(infoc_ntc_denuncia, { as: "infoc_ntc_denuncia", foreignKey: "id_fisico"});
  infoc_ntc_denuncia.belongsTo(infoc_ntc_local, { as: "id_local_infoc_ntc_local", foreignKey: "id_local"});
  infoc_ntc_local.hasMany(infoc_ntc_denuncia, { as: "infoc_ntc_denuncia", foreignKey: "id_local"});
  infoc_ntc_denuncia.belongsTo(infoc_ntc_usuario, { as: "id_usuario_infoc_ntc_usuario", foreignKey: "id_usuario"});
  infoc_ntc_usuario.hasMany(infoc_ntc_denuncia, { as: "infoc_ntc_denuncia", foreignKey: "id_usuario"});
  infoc_ntc_denuncia.belongsTo(infoc_ntc_vestimento, { as: "id_vestimento_infoc_ntc_vestimento", foreignKey: "id_vestimento"});
  infoc_ntc_vestimento.hasMany(infoc_ntc_denuncia, { as: "infoc_ntc_denuncia", foreignKey: "id_vestimento"});
  infoc_nws_tb_calendario_item.belongsTo(infoc_nws_tb_calendario, { as: "id_calendario_infoc_nws_tb_calendario", foreignKey: "id_calendario"});
  infoc_nws_tb_calendario.hasMany(infoc_nws_tb_calendario_item, { as: "infoc_nws_tb_calendario_items", foreignKey: "id_calendario"});
  infoc_nws_tb_venda_item.belongsTo(infoc_nws_tb_calendario_item, { as: "id_calendario_item_infoc_nws_tb_calendario_item", foreignKey: "id_calendario_item"});
  infoc_nws_tb_calendario_item.hasMany(infoc_nws_tb_venda_item, { as: "infoc_nws_tb_venda_items", foreignKey: "id_calendario_item"});
  infoc_nws_tb_venda.belongsTo(infoc_nws_tb_cartao, { as: "id_cartao_infoc_nws_tb_cartao", foreignKey: "id_cartao"});
  infoc_nws_tb_cartao.hasMany(infoc_nws_tb_venda, { as: "infoc_nws_tb_vendas", foreignKey: "id_cartao"});
  infoc_nws_tb_evento.belongsTo(infoc_nws_tb_categoria, { as: "id_categoria_infoc_nws_tb_categorium", foreignKey: "id_categoria"});
  infoc_nws_tb_categoria.hasMany(infoc_nws_tb_evento, { as: "infoc_nws_tb_eventos", foreignKey: "id_categoria"});
  infoc_nws_tb_calendario.belongsTo(infoc_nws_tb_evento, { as: "id_evento_infoc_nws_tb_evento", foreignKey: "id_evento"});
  infoc_nws_tb_evento.hasMany(infoc_nws_tb_calendario, { as: "infoc_nws_tb_calendarios", foreignKey: "id_evento"});
  infoc_nws_tb_venda.belongsTo(infoc_nws_tb_evento, { as: "id_evento_infoc_nws_tb_evento", foreignKey: "id_evento"});
  infoc_nws_tb_evento.hasMany(infoc_nws_tb_venda, { as: "infoc_nws_tb_vendas", foreignKey: "id_evento"});
  infoc_nws_tb_venda.belongsTo(infoc_nws_tb_usuario, { as: "id_usuario_infoc_nws_tb_usuario", foreignKey: "id_usuario"});
  infoc_nws_tb_usuario.hasMany(infoc_nws_tb_venda, { as: "infoc_nws_tb_vendas", foreignKey: "id_usuario"});
  infoc_nws_tb_pix.belongsTo(infoc_nws_tb_venda, { as: "id_venda_infoc_nws_tb_venda", foreignKey: "id_venda"});
  infoc_nws_tb_venda.hasMany(infoc_nws_tb_pix, { as: "infoc_nws_tb_pixes", foreignKey: "id_venda"});
  infoc_nws_tb_venda_item.belongsTo(infoc_nws_tb_venda, { as: "id_venda_infoc_nws_tb_venda", foreignKey: "id_venda"});
  infoc_nws_tb_venda.hasMany(infoc_nws_tb_venda_item, { as: "infoc_nws_tb_venda_items", foreignKey: "id_venda"});
  infoc_tcc_venda.belongsTo(infoc_tcc_cliente, { as: "id_cliente_infoc_tcc_cliente", foreignKey: "id_cliente"});
  infoc_tcc_cliente.hasMany(infoc_tcc_venda, { as: "infoc_tcc_vendas", foreignKey: "id_cliente"});
  infoc_tcc_cliente.belongsTo(infoc_tcc_endereco, { as: "id_endereco_infoc_tcc_endereco", foreignKey: "id_endereco"});
  infoc_tcc_endereco.hasMany(infoc_tcc_cliente, { as: "infoc_tcc_clientes", foreignKey: "id_endereco"});
  infoc_tcc_venda.belongsTo(infoc_tcc_produto, { as: "id_produto_infoc_tcc_produto", foreignKey: "id_produto"});
  infoc_tcc_produto.hasMany(infoc_tcc_venda, { as: "infoc_tcc_vendas", foreignKey: "id_produto"});
  infoc_tcc_venda_item.belongsTo(infoc_tcc_produto, { as: "id_produto_infoc_tcc_produto", foreignKey: "id_produto"});
  infoc_tcc_produto.hasMany(infoc_tcc_venda_item, { as: "infoc_tcc_venda_items", foreignKey: "id_produto"});
  infoc_tcc_venda_item.belongsTo(infoc_tcc_venda, { as: "id_venda_infoc_tcc_venda", foreignKey: "id_venda"});
  infoc_tcc_venda.hasMany(infoc_tcc_venda_item, { as: "infoc_tcc_venda_items", foreignKey: "id_venda"});
  infoc_tct_cliente.belongsTo(infoc_tct_cartao, { as: "id_cartao_infoc_tct_cartao", foreignKey: "id_cartao"});
  infoc_tct_cartao.hasMany(infoc_tct_cliente, { as: "infoc_tct_clientes", foreignKey: "id_cartao"});
  infoc_tct_produto.belongsTo(infoc_tct_categorias, { as: "id_categoria_infoc_tct_categoria", foreignKey: "id_categoria"});
  infoc_tct_categorias.hasMany(infoc_tct_produto, { as: "infoc_tct_produtos", foreignKey: "id_categoria"});
  infoc_tct_chat.belongsTo(infoc_tct_cliente, { as: "id_cliente_infoc_tct_cliente", foreignKey: "id_cliente"});
  infoc_tct_cliente.hasMany(infoc_tct_chat, { as: "infoc_tct_chats", foreignKey: "id_cliente"});
  infoc_tct_compra.belongsTo(infoc_tct_cliente, { as: "id_cliente_infoc_tct_cliente", foreignKey: "id_cliente"});
  infoc_tct_cliente.hasMany(infoc_tct_compra, { as: "infoc_tct_compras", foreignKey: "id_cliente"});
  infoc_tct_compra_item.belongsTo(infoc_tct_compra, { as: "id_compra_infoc_tct_compra", foreignKey: "id_compra"});
  infoc_tct_compra.hasMany(infoc_tct_compra_item, { as: "infoc_tct_compra_items", foreignKey: "id_compra"});
  infoc_tct_cliente.belongsTo(infoc_tct_endereco, { as: "id_endereco_infoc_tct_endereco", foreignKey: "id_endereco"});
  infoc_tct_endereco.hasMany(infoc_tct_cliente, { as: "infoc_tct_clientes", foreignKey: "id_endereco"});
  infoc_tct_compra.belongsTo(infoc_tct_endereco, { as: "id_endereco_infoc_tct_endereco", foreignKey: "id_endereco"});
  infoc_tct_endereco.hasMany(infoc_tct_compra, { as: "infoc_tct_compras", foreignKey: "id_endereco"});
  infoc_tct_compra_item.belongsTo(infoc_tct_produto, { as: "id_produto_infoc_tct_produto", foreignKey: "id_produto"});
  infoc_tct_produto.hasMany(infoc_tct_compra_item, { as: "infoc_tct_compra_items", foreignKey: "id_produto"});
  infoc_tdv_endereco.belongsTo(infoc_tdv_cliente, { as: "id_cliente_infoc_tdv_cliente", foreignKey: "id_cliente"});
  infoc_tdv_cliente.hasMany(infoc_tdv_endereco, { as: "infoc_tdv_enderecos", foreignKey: "id_cliente"});
  infoc_tdv_favorito.belongsTo(infoc_tdv_cliente, { as: "id_cliente_infoc_tdv_cliente", foreignKey: "id_cliente"});
  infoc_tdv_cliente.hasMany(infoc_tdv_favorito, { as: "infoc_tdv_favoritos", foreignKey: "id_cliente"});
  infoc_tdv_forma_pagamento.belongsTo(infoc_tdv_cliente, { as: "id_cliente_infoc_tdv_cliente", foreignKey: "id_cliente"});
  infoc_tdv_cliente.hasMany(infoc_tdv_forma_pagamento, { as: "infoc_tdv_forma_pagamentos", foreignKey: "id_cliente"});
  infoc_tdv_pedido.belongsTo(infoc_tdv_cliente, { as: "id_cliente_infoc_tdv_cliente", foreignKey: "id_cliente"});
  infoc_tdv_cliente.hasMany(infoc_tdv_pedido, { as: "infoc_tdv_pedidos", foreignKey: "id_cliente"});
  infoc_tdv_pedido.belongsTo(infoc_tdv_cupom, { as: "id_cupom_infoc_tdv_cupom", foreignKey: "id_cupom"});
  infoc_tdv_cupom.hasMany(infoc_tdv_pedido, { as: "infoc_tdv_pedidos", foreignKey: "id_cupom"});
  infoc_tdv_favorito.belongsTo(infoc_tdv_livro, { as: "id_livro_infoc_tdv_livro", foreignKey: "id_livro"});
  infoc_tdv_livro.hasMany(infoc_tdv_favorito, { as: "infoc_tdv_favoritos", foreignKey: "id_livro"});
  infoc_tdv_pedido_item.belongsTo(infoc_tdv_livro, { as: "id_livro_infoc_tdv_livro", foreignKey: "id_livro"});
  infoc_tdv_livro.hasMany(infoc_tdv_pedido_item, { as: "infoc_tdv_pedido_items", foreignKey: "id_livro"});
  infoc_tdv_pedido_item.belongsTo(infoc_tdv_pedido, { as: "id_pedido_infoc_tdv_pedido", foreignKey: "id_pedido"});
  infoc_tdv_pedido.hasMany(infoc_tdv_pedido_item, { as: "infoc_tdv_pedido_items", foreignKey: "id_pedido"});
  infoc_tht_compra.belongsTo(infoc_tht_pacote, { as: "id_pacote_infoc_tht_pacote", foreignKey: "id_pacote"});
  infoc_tht_pacote.hasMany(infoc_tht_compra, { as: "infoc_tht_compras", foreignKey: "id_pacote"});
  infoc_tht_compra.belongsTo(infoc_tht_usuario, { as: "id_usuario_infoc_tht_usuario", foreignKey: "id_usuario"});
  infoc_tht_usuario.hasMany(infoc_tht_compra, { as: "infoc_tht_compras", foreignKey: "id_usuario"});
  infod_leo_agendamento.belongsTo(infod_leo_cliente, { as: "id_cliente_infod_leo_cliente", foreignKey: "id_cliente"});
  infod_leo_cliente.hasMany(infod_leo_agendamento, { as: "infod_leo_agendamentos", foreignKey: "id_cliente"});
  infod_leo_agendamento.belongsTo(infod_leo_funcionario, { as: "id_funcionario_infod_leo_funcionario", foreignKey: "id_funcionario"});
  infod_leo_funcionario.hasMany(infod_leo_agendamento, { as: "infod_leo_agendamentos", foreignKey: "id_funcionario"});
  infod_leo_agendamento.belongsTo(infod_leo_servico, { as: "id_servico_infod_leo_servico", foreignKey: "id_servico"});
  infod_leo_servico.hasMany(infod_leo_agendamento, { as: "infod_leo_agendamentos", foreignKey: "id_servico"});
  infod_leo_servico_imagem.belongsTo(infod_leo_servico, { as: "id_servico_infod_leo_servico", foreignKey: "id_servico"});
  infod_leo_servico.hasMany(infod_leo_servico_imagem, { as: "infod_leo_servico_imagems", foreignKey: "id_servico"});
  infod_ssc_favoritos.belongsTo(infod_ssc_cliente, { as: "id_cliente_infod_ssc_cliente", foreignKey: "id_cliente"});
  infod_ssc_cliente.hasMany(infod_ssc_favoritos, { as: "infod_ssc_favoritos", foreignKey: "id_cliente"});
  infod_ssc_venda.belongsTo(infod_ssc_cliente, { as: "id_cliente_infod_ssc_cliente", foreignKey: "id_cliente"});
  infod_ssc_cliente.hasMany(infod_ssc_venda, { as: "infod_ssc_vendas", foreignKey: "id_cliente"});
  infod_ssc_cliente.belongsTo(infod_ssc_endereco, { as: "id_endereco_infod_ssc_endereco", foreignKey: "id_endereco"});
  infod_ssc_endereco.hasMany(infod_ssc_cliente, { as: "infod_ssc_clientes", foreignKey: "id_endereco"});
  infod_ssc_venda.belongsTo(infod_ssc_endereco, { as: "id_endereco_entrega_infod_ssc_endereco", foreignKey: "id_endereco_entrega"});
  infod_ssc_endereco.hasMany(infod_ssc_venda, { as: "infod_ssc_vendas", foreignKey: "id_endereco_entrega"});
  infod_ssc_pedido.belongsTo(infod_ssc_item, { as: "id_item_infod_ssc_item", foreignKey: "id_item"});
  infod_ssc_item.hasMany(infod_ssc_pedido, { as: "infod_ssc_pedidos", foreignKey: "id_item"});
  infod_ssc_favoritos.belongsTo(infod_ssc_produto, { as: "id_produto_infod_ssc_produto", foreignKey: "id_produto"});
  infod_ssc_produto.hasMany(infod_ssc_favoritos, { as: "infod_ssc_favoritos", foreignKey: "id_produto"});
  infod_ssc_item.belongsTo(infod_ssc_produto, { as: "id_produto_infod_ssc_produto", foreignKey: "id_produto"});
  infod_ssc_produto.hasMany(infod_ssc_item, { as: "infod_ssc_items", foreignKey: "id_produto"});
  infod_ssc_pedido.belongsTo(infod_ssc_venda, { as: "id_venda_infod_ssc_venda", foreignKey: "id_venda"});
  infod_ssc_venda.hasMany(infod_ssc_pedido, { as: "infod_ssc_pedidos", foreignKey: "id_venda"});
  infod_tif_comentario.belongsTo(infod_tif_animes, { as: "id_anime_infod_tif_anime", foreignKey: "id_anime"});
  infod_tif_animes.hasMany(infod_tif_comentario, { as: "infod_tif_comentarios", foreignKey: "id_anime"});
  infod_tif_favoritos.belongsTo(infod_tif_animes, { as: "id_anime_infod_tif_anime", foreignKey: "id_anime"});
  infod_tif_animes.hasMany(infod_tif_favoritos, { as: "infod_tif_favoritos", foreignKey: "id_anime"});
  infod_tif_chat.belongsTo(infod_tif_comunidade, { as: "id_comunidade_infod_tif_comunidade", foreignKey: "id_comunidade"});
  infod_tif_comunidade.hasMany(infod_tif_chat, { as: "infod_tif_chats", foreignKey: "id_comunidade"});
  infod_tif_usuario_comunidade.belongsTo(infod_tif_comunidade, { as: "id_comunidade_infod_tif_comunidade", foreignKey: "id_comunidade"});
  infod_tif_comunidade.hasMany(infod_tif_usuario_comunidade, { as: "infod_tif_usuario_comunidades", foreignKey: "id_comunidade"});
  infod_tif_chat.belongsTo(infod_tif_usuario, { as: "id_usuario_infod_tif_usuario", foreignKey: "id_usuario"});
  infod_tif_usuario.hasMany(infod_tif_chat, { as: "infod_tif_chats", foreignKey: "id_usuario"});
  infod_tif_comentario.belongsTo(infod_tif_usuario, { as: "id_usuario_infod_tif_usuario", foreignKey: "id_usuario"});
  infod_tif_usuario.hasMany(infod_tif_comentario, { as: "infod_tif_comentarios", foreignKey: "id_usuario"});
  infod_tif_comunidade.belongsTo(infod_tif_usuario, { as: "id_usuario_infod_tif_usuario", foreignKey: "id_usuario"});
  infod_tif_usuario.hasMany(infod_tif_comunidade, { as: "infod_tif_comunidades", foreignKey: "id_usuario"});
  infod_tif_favoritos.belongsTo(infod_tif_usuario, { as: "id_usuario_infod_tif_usuario", foreignKey: "id_usuario"});
  infod_tif_usuario.hasMany(infod_tif_favoritos, { as: "infod_tif_favoritos", foreignKey: "id_usuario"});
  infod_tif_usuario_comunidade.belongsTo(infod_tif_usuario, { as: "id_usuario_infod_tif_usuario", foreignKey: "id_usuario"});
  infod_tif_usuario.hasMany(infod_tif_usuario_comunidade, { as: "infod_tif_usuario_comunidades", foreignKey: "id_usuario"});
  insf_tb_usuario_endereco.belongsTo(insf_tb_usuario, { as: "id_usuario_insf_tb_usuario", foreignKey: "id_usuario"});
  insf_tb_usuario.hasMany(insf_tb_usuario_endereco, { as: "insf_tb_usuario_enderecos", foreignKey: "id_usuario"});
  insf_tb_usuario_endereco_uf.belongsTo(insf_tb_usuario_endereco, { as: "id_usuario_endereco_insf_tb_usuario_endereco", foreignKey: "id_usuario_endereco"});
  insf_tb_usuario_endereco.hasMany(insf_tb_usuario_endereco_uf, { as: "insf_tb_usuario_endereco_ufs", foreignKey: "id_usuario_endereco"});

  return {
    infoa_dtb_tb_cliente,
    infoa_dtb_tb_genero,
    infoa_dtb_tb_livro,
    infoa_dtn_tb_avaliacao,
    infoa_dtn_tb_cliente,
    infoa_dtn_tb_endereco,
    infoa_dtn_tb_favoritos,
    infoa_dtn_tb_produto,
    infoa_dtn_tb_tamanhos,
    infoa_dtn_tb_usuarios_adm,
    infoa_dtn_tb_venda,
    infoa_dtn_tb_venda_item,
    infoa_enl_cartao_credito,
    infoa_enl_categoria,
    infoa_enl_chat,
    infoa_enl_chat_usuario,
    infoa_enl_pedido,
    infoa_enl_pedido_compra_e_venda,
    infoa_enl_plano,
    infoa_enl_produto,
    infoa_enl_rank,
    infoa_enl_reg_plano,
    infoa_enl_usuario,
    infoa_enl_visto_recentemente,
    infoa_gab_cartao,
    infoa_gab_endereco,
    infoa_gab_entrega,
    infoa_gab_produto,
    infoa_gab_usuario,
    infoa_gab_venda,
    infoa_gab_venda_item,
    infoa_sti_categoria,
    infoa_sti_cliente,
    infoa_sti_cupom,
    infoa_sti_endereco,
    infoa_sti_produto,
    infoa_sti_venda,
    infoa_sti_venda_item,
    infob_amz_tbdenuncia,
    infob_amz_tbreporte_denuncia,
    infob_amz_tbusuario,
    infob_apn_tb_adm,
    infob_apn_tb_adocao,
    infob_apn_tb_pet,
    infob_apn_tb_user,
    infob_hdm_admin,
    infob_hdm_cadastro,
    infob_hdm_cadastro_adm,
    infob_hdm_chat,
    infob_hdm_chat_denuncias,
    infob_hdm_denuncia,
    infob_hdm_esqueci_senha,
    infob_hdm_esqueci_senha_adm,
    infob_hdm_login,
    infob_hdm_login_adm,
    infob_hdm_mapa,
    infob_hdm_sala,
    infob_hdm_usuario,
    infob_mw_filmes,
    infob_mw_tbatores,
    infob_mw_tbcomentarios,
    infob_mw_tbfilmeusu,
    infob_mw_tblista,
    infob_mw_tblistaitem,
    infob_mw_usuario,
    infoc_atn_tb_chat,
    infoc_atn_tb_configuracoes_empresa,
    infoc_atn_tb_configuracoes_pessoais,
    infoc_atn_tb_curriculo,
    infoc_atn_tb_empresa,
    infoc_atn_tb_pessoal,
    infoc_atn_tb_sala,
    infoc_atn_tb_vagas,
    infoc_jdf_adm,
    infoc_jdf_cartao,
    infoc_jdf_chat,
    infoc_jdf_cliente,
    infoc_jdf_item_pedido,
    infoc_jdf_pedido,
    infoc_jdf_produto,
    infoc_ntc_administrador,
    infoc_ntc_apoio_frase,
    infoc_ntc_caracteristica_fisica,
    infoc_ntc_denuncia,
    infoc_ntc_local,
    infoc_ntc_usuario,
    infoc_ntc_vestimento,
    infoc_nws_tb_calendario,
    infoc_nws_tb_calendario_item,
    infoc_nws_tb_cartao,
    infoc_nws_tb_categoria,
    infoc_nws_tb_evento,
    infoc_nws_tb_pix,
    infoc_nws_tb_usuario,
    infoc_nws_tb_venda,
    infoc_nws_tb_venda_item,
    infoc_tcc_cliente,
    infoc_tcc_endereco,
    infoc_tcc_produto,
    infoc_tcc_venda,
    infoc_tcc_venda_item,
    infoc_tct_cartao,
    infoc_tct_categorias,
    infoc_tct_chat,
    infoc_tct_cliente,
    infoc_tct_compra,
    infoc_tct_compra_item,
    infoc_tct_endereco,
    infoc_tct_produto,
    infoc_tdv_adm,
    infoc_tdv_cliente,
    infoc_tdv_cupom,
    infoc_tdv_endereco,
    infoc_tdv_favorito,
    infoc_tdv_forma_pagamento,
    infoc_tdv_genero,
    infoc_tdv_livro,
    infoc_tdv_pedido,
    infoc_tdv_pedido_item,
    infoc_tht_cartao,
    infoc_tht_chat,
    infoc_tht_compra,
    infoc_tht_lugar,
    infoc_tht_pacote,
    infoc_tht_usuario,
    infod_ecm_tb_calc,
    infod_ecm_tb_categorias,
    infod_ecm_tb_roupas,
    infod_ecm_usuario,
    infod_leo_agendamento,
    infod_leo_cliente,
    infod_leo_funcionario,
    infod_leo_servico,
    infod_leo_servico_imagem,
    infod_omn_area_vaga,
    infod_omn_candidato,
    infod_omn_candidato_vaga,
    infod_omn_curriculo,
    infod_omn_empresa,
    infod_omn_vaga,
    infod_ssc_adm,
    infod_ssc_cliente,
    infod_ssc_endereco,
    infod_ssc_favoritos,
    infod_ssc_item,
    infod_ssc_pedido,
    infod_ssc_produto,
    infod_ssc_venda,
    infod_tif_animes,
    infod_tif_chat,
    infod_tif_comentario,
    infod_tif_comunidade,
    infod_tif_favoritos,
    infod_tif_usuario,
    infod_tif_usuario_comunidade,
    insf_tb_produto,
    insf_tb_usuario,
    insf_tb_usuario_endereco,
    insf_tb_usuario_endereco_uf,
    tb_endereco,
    tb_produto,
  };
}
