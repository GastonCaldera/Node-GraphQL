const { UserModel } = require('../../models/user')

module.exports = {
    users: async () => {
        return await UserModel.find()
    }
}