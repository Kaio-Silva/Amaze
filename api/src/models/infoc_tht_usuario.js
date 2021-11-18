import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tht_usuario extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_usuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_usuario: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ds_email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nr_celular: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ds_senha: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tht_usuario',
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
  return infoc_tht_usuario;
  }
}
