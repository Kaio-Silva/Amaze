import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infob_hdm_cadastro_adm extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_HDM_cadastro: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_HDM_nome: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nm_HDM_sobrenome: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    dt_HDM_data_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    nr_HDM_celular: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nm_HDM_email_empresa: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    nm_HDM_senha: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infob_hdm_cadastro_adm',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_HDM_cadastro" },
        ]
      },
    ]
  });
  return infob_hdm_cadastro_adm;
  }
}
