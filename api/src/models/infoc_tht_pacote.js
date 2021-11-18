import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tht_pacote extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_pacote: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nm_pacote: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    dt_data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ds_ingresso: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    vl_preco: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ds_horario: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ds_cancelamento: {
      type: DataTypes.STRING(555),
      allowNull: true
    },
    ds_endereco: {
      type: DataTypes.STRING(555),
      allowNull: true
    },
    ds_acesso: {
      type: DataTypes.STRING(555),
      allowNull: true
    },
    ds_imagem1: {
      type: DataTypes.STRING(1255),
      allowNull: true
    },
    ds_imagem2: {
      type: DataTypes.STRING(1255),
      allowNull: true
    },
    ds_imagem3: {
      type: DataTypes.STRING(1255),
      allowNull: true
    },
    ds_imagem4: {
      type: DataTypes.STRING(1255),
      allowNull: true
    },
    ds_link: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bt_ativo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tht_pacote',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_pacote" },
        ]
      },
    ]
  });
  return infoc_tht_pacote;
  }
}
