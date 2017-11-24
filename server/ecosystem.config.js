/**
 * @author Tremaine Buchanan
 * @since 2017-10
 */
require('dotenv').config()
module.exports = {
  apps : [{
    name   : "client-service",
    script : "../client/bin/www",
    watch: true,
    env: {
      "PORT": 8000
    }
  },{
    name   : "pmas-service",
    script : "./pmas/bin/www",
    watch: true,
    env: {
      "PORT": 8003,
      "DB_HOST":process.env.DB_HOST,
      "DB_USER":process.env.DB_USER,
      "DB_PASS":process.env.DB_PASS,
      "DB_NAME":process.env.PMAS_DB,
      "DB_ADMIN":process.env.DB_ADMIN
    }
  },{
    name   : "employee-service",
    script : "./employees/bin/www",
    watch: true,
    env: {
      "PORT": 8004,
      "DB_HOST":process.env.DB_HOST,
      "DB_USER":process.env.DB_USER,
      "DB_PASS":process.env.DB_PASS,
      "DB_NAME":process.env.EMPLOYEE_DB,
      "DB_ADMIN":process.env.DB_ADMIN
    }
  },{
    name   : "auth-service",
    script : "./auth/bin/www",
    watch: true,
    env: {
      "PORT": 8005,
      "LDAP_URL":process.env.LDAP_URL,
      "LDAP_ADMIN":process.env.LDAP_ADMIN,
      "LDAP_PASS":process.env.LDAP_PASS,
      "LDAP_SUFFIX": process.env.LDAP_SUFFIX
    }
  }]
}
