import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_dtn_tb_venda_item extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_venda_item: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_produto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoa_dtn_tb_produto',
        key: 'id_produto'
      }
    },
    id_venda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoa_dtn_tb_venda',
        key: 'id_venda'
      }
    },
    qtd_qtd: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoa_dtn_tb_venda_item',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_venda_item" },
        ]
      },
      {
        name: "id_venda",
        using: "BTREE",
        fields: [
          { name: "id_venda" },
        ]
      },
      {
        name: "id_produto",
        using: "BTREE",
        fields: [
          { name: "id_produto" },
        ]
      },
    ]
  });
  return infoa_dtn_tb_venda_item;
  }
}
