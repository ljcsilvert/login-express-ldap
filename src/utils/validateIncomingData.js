/* eslint-disable no-useless-escape */
/* eslint-disable no-prototype-builtins */

/**
 ** Middleware that validate incoming data.
 */
async function validateIncomingData(req, res, next) {
  // TODO: Validate incoming data with Joi (this isnt enough).
  if (!req.body.hasOwnProperty('username')) return res.status(400).json({ error: 'Username property is missing.' })
  if (!req.body.hasOwnProperty('password')) return res.status(400).json({ error: 'Password property is missing.' })

  const username = req.body.username
  const password = req.body.password

  if (!username) return res.status(400).json({ error: 'Username value is empty.' })
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(username)) return res.status(400).json({ error: 'Email is not valid.' })
  if (!password) return res.status(400).json({ error: 'Password value is empty.' })

  req.username = username
  req.password = password

  next()
}

export default validateIncomingData
