import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_ecm_tb_roupas extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_roupa: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ds_roupa: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    vl_preco: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    tp_roupa: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    ds_tamanho: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    bt_disponivel: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    qtd_disponivel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ds_cor: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infod_ecm_tb_roupas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_roupa" },
        ]
      },
      {
        name: "id_categoria",
        using: "BTREE",
        fields: [
          { name: "id_categoria" },
        ]
      },
    ]
  });
  return infod_ecm_tb_roupas;
  }
}
