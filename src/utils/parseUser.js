async function parseUser(userData, roles) {
  return {
    id: userData.id,
    pseudo: userData.pseudo,
    name: userData.name,
    email: userData.email,
    team: userData.id_team_team.dataValues.team,
    imagePath: userData.imagePath,
    roles,
  }
}

export default parseUser
