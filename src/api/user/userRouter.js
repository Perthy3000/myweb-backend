const route = require('express')['Router']()
const userController = require('./userController')

route.post('/create-user', userController.addUser)

module.exports = route