import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_hdm_sala extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_hdm_sala: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_sala: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infob_hdm_sala',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_hdm_sala" },
        ]
      },
    ]
  });
  return infob_hdm_sala;
  }
}
