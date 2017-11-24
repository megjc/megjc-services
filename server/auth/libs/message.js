/**
 * @desc Library to manage errors.
 * @author Tremaine Buchanan
 * @since 2017-06-18
 */
'use strict'
const MESSAGE = {
  BAD_REQUEST : {
        text: 'Your username/password is incorrect.',
        developer_msg: 'Username/password supplied by the user is invalid or no dn found',
        success: false
  },
  AUTH_SUCCESS: {
    text: 'User successfully authenticated',
    success: true
  },
  UNAUTHORIZED: {
    text: 'Your session has expired. Please enter your username and password',
    developer_msg: 'Unable to validate/verify user credentials',
    success: false
  },
  EMPTY_VALUES : {
    text: 'Required fields are missing.',
    developer_msg: 'Empty data was supplied in one or more fields.',
    success: false
  },
  LDAP: {
    BIND_FAILURE: {
      text: 'Unable to successfully authenticate user.',
      developer_msg: 'Credentials provided are not valid to complete LDAP bind operation',
      success: false
    },
    USER_NOT_FOUND: {
      text: 'Unable to locate username provided.',
      developer_msg: 'Unable to locate username provided in LDAP server',
      success: false
    }
  },
  TOKEN: {
    BAD_REQUEST: {
      text: 'Token not present in request.',
      developer_msg: 'JSON Web Token not present in request headers.',
      success: false
    }
  },
  PERMISSION: {
    UNAUTHORIZED: {
      text: 'Unathorized endpoint access',
      developer_msg: 'User not authorized to access endpoint',
      success: false
    }
  }
}

exports.message = MESSAGE
