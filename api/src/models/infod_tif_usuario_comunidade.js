import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_tif_usuario_comunidade extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_usuario_comunidade: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infod_tif_usuario',
        key: 'id_usuario'
      }
    },
    id_comunidade: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infod_tif_comunidade',
        key: 'id_comunidade'
      }
    }
  }, {
    sequelize,
    tableName: 'infod_tif_usuario_comunidade',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario_comunidade" },
        ]
      },
      {
        name: "id_usuario",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "id_comunidade",
        using: "BTREE",
        fields: [
          { name: "id_comunidade" },
        ]
      },
    ]
  });
  return infod_tif_usuario_comunidade;
  }
}
