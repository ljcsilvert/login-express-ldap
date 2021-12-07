import _sequelize from 'sequelize'
const { Model } = _sequelize

export default class Role extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        id_role: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        name_role: {
          type: DataTypes.STRING(500),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Role',
        tableName: 'role',
        timestamps: false,
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'id_role' }],
          },
        ],
      }
    )
    return Role
  }
}
