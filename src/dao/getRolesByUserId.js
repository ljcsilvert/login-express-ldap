import sequelize from '../config/sequelize.js'
import initModels from '../models/initModels.js'

async function getRolesByUserId(userId) {
  try {
    const roles = await initModels(sequelize).RoleUser.findAll({
      where: { id_user: userId },
      include: [
        {
          model: initModels(sequelize).Role,
          as: 'id_role_role',
          attributes: [['name_role', 'roleName']],
        },
      ],
    })

    return roles.map(element => element.dataValues.id_role_role.dataValues.roleName)
  } catch (err) {
    return console.error(err)
  }
}

export default getRolesByUserId
