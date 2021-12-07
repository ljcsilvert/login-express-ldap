import _sequelize from 'sequelize'
const { Model } = _sequelize

export default class User extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        id_user: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        pseudo_user: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        email_user: {
          type: DataTypes.STRING(300),
          allowNull: false,
        },
        name_user: {
          type: DataTypes.STRING(300),
          allowNull: false,
        },
        image_path_user: {
          type: DataTypes.STRING(1000),
          allowNull: false,
        },
        id_team: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Team',
            key: 'id_team',
          },
        },
      },
      {
        sequelize,
        modelName: 'User',
        tableName: 'user',
        timestamps: false,
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'id_user' }],
          },
          {
            name: 'user_team_FK',
            using: 'BTREE',
            fields: [{ name: 'id_team' }],
          },
        ],
      }
    )
    return User
  }
}
