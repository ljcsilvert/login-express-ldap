import sequelize from '../config/sequelize.js'
import initModels from '../models/initModels.js'

async function getUserByEmail(email) {
  try {
    const [user] = await initModels(sequelize).User.findAll({
      attributes: [
        ['id_user', 'id'],
        ['pseudo_user', 'pseudo'],
        ['email_user', 'email'],
        ['name_user', 'name'],
        ['image_path_user', 'imagePath'],
      ],
      where: { email_user: email },
      include: [
        {
          model: initModels(sequelize).Team,
          as: 'id_team_team',
          attributes: [['name_team', 'team']],
        },
      ],
    })

    return user.dataValues
  } catch (err) {
    return console.error(err)
  }
}

export default getUserByEmail
