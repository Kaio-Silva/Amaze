import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_ecm_tb_categorias extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_categoria: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_categoria: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infod_ecm_tb_categorias',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_categoria" },
        ]
      },
    ]
  });
  return infod_ecm_tb_categorias;
  }
}
