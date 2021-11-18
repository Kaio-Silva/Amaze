import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_nws_tb_venda extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_venda: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_nws_tb_usuario',
        key: 'id_usuario'
      }
    },
    ds_situacao: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tp_pagamento: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_cartao: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_nws_tb_cartao',
        key: 'id_cartao'
      }
    },
    dt_inclusao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id_evento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_nws_tb_evento',
        key: 'id_evento'
      }
    }
  }, {
    sequelize,
    tableName: 'infoc_nws_tb_venda',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_venda" },
        ]
      },
      {
        name: "id_usuario",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "id_cartao",
        using: "BTREE",
        fields: [
          { name: "id_cartao" },
        ]
      },
      {
        name: "id_evento",
        using: "BTREE",
        fields: [
          { name: "id_evento" },
        ]
      },
    ]
  });
  return infoc_nws_tb_venda;
  }
}
