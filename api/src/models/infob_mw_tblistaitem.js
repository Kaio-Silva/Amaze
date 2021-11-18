import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_mw_tblistaitem extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_lista_item: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_lista: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infob_mw_tblista',
        key: 'id_lista'
      }
    },
    id_filme: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infob_mw_filmes',
        key: 'id_filme'
      }
    }
  }, {
    sequelize,
    tableName: 'infob_mw_tblistaitem',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_lista_item" },
        ]
      },
      {
        name: "id_lista",
        using: "BTREE",
        fields: [
          { name: "id_lista" },
        ]
      },
      {
        name: "id_filme",
        using: "BTREE",
        fields: [
          { name: "id_filme" },
        ]
      },
    ]
  });
  return infob_mw_tblistaitem;
  }
}
