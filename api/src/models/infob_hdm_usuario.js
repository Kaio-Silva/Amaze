import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_hdm_usuario extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_HDM_usuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_HDM_nome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nm_HDM_sobrenome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nm_HDM_email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_HDM_senha: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_HDM_cogidoRec: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infob_hdm_usuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_HDM_usuario" },
        ]
      },
    ]
  });
  return infob_hdm_usuario;
  }
}
