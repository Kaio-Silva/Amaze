import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_dtn_tb_tamanhos extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_tamanho: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'infoa_dtn_tb_tamanhos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_tamanho" },
        ]
      },
    ]
  });
  return infoa_dtn_tb_tamanhos;
  }
}
