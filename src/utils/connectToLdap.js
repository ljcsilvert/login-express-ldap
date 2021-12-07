import ldap from 'ldapjs'

/**
 ** Because we just want to test if a user can login to an LDAP,
 ** we just need to check if the binding to the LDAP client doesnt res an error.
 * ? Is there a better way to check this?
 */
function connectToLdap(ldapUrl, user) {
  const client = ldap.createClient({ url: ldapUrl })

  // client.bind() doesnt return a promise 🐊
  return new Promise((resolve, reject) => {
    client.bind(user.username, user.decryptedPassword, error => {
      if (error === null) {
        client.destroy() // ? Didnt understood difference between client.destroy and client.unbind?
        console.log(`${user.username} is connected to ${ldapUrl}`)
        resolve(true)
      }
      client.destroy(error)
      resolve(false)
    })
  })
}

export default connectToLdap
