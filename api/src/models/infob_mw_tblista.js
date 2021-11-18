import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_mw_tblista extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_lista: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infob_mw_usuario',
        key: 'id_usuario'
      }
    },
    nm_lista: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_descricao: {
      type: DataTypes.STRING(300),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infob_mw_tblista',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_lista" },
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
  return infob_mw_tblista;
  }
}
