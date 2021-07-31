const userModel = require('./userModel')
const { success, fail } = require('./../../config/response')

class userController {
  async addUser(req, res) {
    try {
      // TODO: check data
      const {email, username, password} = req.body
      if(!email || !username || !password) {
        fail(res, 'Missing info')
      } else {
        const newUser = await userModel.createUser({email, username, password})
        success(res, "User created", newUser)
      }
    } catch (error) {
      fail(res, error, 400)
    }
  }
}

module.exports = new userController()