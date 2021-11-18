import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_hdm_chat extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_HDM_chat: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_HDM_sala: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infob_hdm_sala',
        key: 'id_hdm_sala'
      }
    },
    id_HDM_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infob_hdm_usuario',
        key: 'id_HDM_usuario'
      }
    },
    ds_HDM_mensagem: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dt_HDM_data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nm_HDM_usuario: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infob_hdm_chat',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_HDM_chat" },
        ]
      },
      {
        name: "id_HDM_sala",
        using: "BTREE",
        fields: [
          { name: "id_HDM_sala" },
        ]
      },
      {
        name: "id_HDM_usuario",
        using: "BTREE",
        fields: [
          { name: "id_HDM_usuario" },
        ]
      },
    ]
  });
  return infob_hdm_chat;
  }
}
