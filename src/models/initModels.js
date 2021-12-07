/* eslint-disable camelcase */
import _sequelize from 'sequelize'
import _role from './Role.js'
import _role_user from './RoleUser.js'
import _team from './Team.js'
import _user from './User.js'
const DataTypes = _sequelize.DataTypes

export default function initModels(sequelize) {
  const Role = _role.init(sequelize, DataTypes)
  const RoleUser = _role_user.init(sequelize, DataTypes)
  const Team = _team.init(sequelize, DataTypes)
  const User = _user.init(sequelize, DataTypes)

  // TODO: Weird "as" property leads to weirder things like "element.dataValues.id_role_role.dataValues.roleName".
  Role.belongsToMany(User, { as: 'id_user_users', through: RoleUser, foreignKey: 'id_role', otherKey: 'id_user' })
  User.belongsToMany(Role, { as: 'id_role_roles', through: RoleUser, foreignKey: 'id_user', otherKey: 'id_role' })
  RoleUser.belongsTo(Role, { as: 'id_role_role', foreignKey: 'id_role' })
  Role.hasMany(RoleUser, { as: 'role_users', foreignKey: 'id_role' })
  User.belongsTo(Team, { as: 'id_team_team', foreignKey: 'id_team' })
  Team.hasMany(User, { as: 'users', foreignKey: 'id_team' })
  RoleUser.belongsTo(User, { as: 'id_user_user', foreignKey: 'id_user' })
  User.hasMany(RoleUser, { as: 'role_users', foreignKey: 'id_user' })

  return {
    Role,
    RoleUser,
    Team,
    User,
  }
}
