import _sequelize from 'sequelize'
const { Model } = _sequelize

export default class RoleUser extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        id_role: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          references: {
            model: 'Role',
            key: 'id_role',
          },
        },
        id_user: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          references: {
            model: 'User',
            key: 'id_user',
          },
        },
      },
      {
        sequelize,
        modelName: 'RoleUser',
        tableName: 'role_user',
        timestamps: false,
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'id_role' }, { name: 'id_user' }],
          },
          {
            name: 'role_user_user0_FK',
            using: 'BTREE',
            fields: [{ name: 'id_user' }],
          },
        ],
      }
    )
    return RoleUser
  }
}
