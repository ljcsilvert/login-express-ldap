# login-express-ldap

This server checks connexion to multiple LDAP to issue a JWT with user infos if one of them succeed.

It only has one route "/api/login".
It needs to receive a username (which is an email) and an encrypted password (which is encrypted with a public key).
It decrypts the password with the private key.
It checks if it can connect to any of the LDAP with the credentials received.
If it succeeds, it issue a JWT with all user infos.

## Stack

- Express
- Sequelize
- jsonwebtoken
- ldapjs
- Typescript _enabled but nothing is done with it yet_
- Jest _enabled but nothing is done with it yet_

## Need to be done

- Test with Jest.
- Try to refactor everything in Typescript ?
