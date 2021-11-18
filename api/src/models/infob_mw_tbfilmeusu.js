import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_mw_tbfilmeusu extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_filme_usu: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_filme: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nm_categoria: {
      type: DataTypes.STRING(258),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infob_mw_tbfilmeusu',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_filme_usu" },
        ]
      },
      {
        name: "id_filme",
        using: "BTREE",
        fields: [
          { name: "id_filme" },
        ]
      },
      {
        name: "id_usuario",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
  return infob_mw_tbfilmeusu;
  }
}
