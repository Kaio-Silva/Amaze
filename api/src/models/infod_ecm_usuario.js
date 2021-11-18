import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_ecm_usuario extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_usuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_usuario: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_telefone_cel: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ds_cpf: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ds_senha: {
      type: DataTypes.STRING(128),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infod_ecm_usuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
  return infod_ecm_usuario;
  }
}
