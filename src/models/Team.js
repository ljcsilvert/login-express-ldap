import _sequelize from 'sequelize'
const { Model } = _sequelize

export default class Team extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        id_team: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        name_team: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Team',
        tableName: 'team',
        timestamps: false,
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'id_team' }],
          },
        ],
      }
    )
    return Team
  }
}
