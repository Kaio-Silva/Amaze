import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_dtn_tb_usuarios_adm extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_usuarios_adm: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_adm: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ds_email: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ds_senha: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoa_dtn_tb_usuarios_adm',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuarios_adm" },
        ]
      },
    ]
  });
  return infoa_dtn_tb_usuarios_adm;
  }
}
