//! TEST LOGIN ROUTE

import fs from 'fs'
import crypto from 'crypto'
import fetch from 'node-fetch'

const key = fs.readFileSync('path_password_pub_key', 'utf-8')

//* remplir avec vos identifiants
const username = 'your email'
const password = 'your password'

const buff = Buffer.from(password, 'utf8')
const encryptedPassword = crypto.publicEncrypt(key, buff)

const data = {
  username: username,
  password: encryptedPassword,
}

fetch('http://localhost:9201/api/login', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then(response => response.json())
  .then(data => console.log(data))
