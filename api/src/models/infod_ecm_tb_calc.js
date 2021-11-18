import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_ecm_tb_calc extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_calc: {
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
      allowNull: true
    },
    vl_preco: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    tp_roupa: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    ds_tamanho: {
      type: DataTypes.CHAR(10),
      allowNull: true
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
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infod_ecm_tb_calc',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_calc" },
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
  return infod_ecm_tb_calc;
  }
}
