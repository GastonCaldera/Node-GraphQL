const { UserModel } = require('../../models/user')

module.exports = {
    createUser: async (_, { input }) => {
        newUser = await UserModel.create(input);
        return newUser;
    },
    updateUser: async (_, { id, input }) => {
        const UserToUpdate = await UserModel.findOne({ _id: id });

        Object.keys(input).forEach(value => {
            UserToUpdate[value] = input[value];
        });

        const updatedUser = await UserToUpdate.save();
        return updatedUser;
    },
    deleteUser: async (_, { id }) => {
        const deleteUser = await UserModel.deleteOne({ _id: id });
        if (deleteUser.deletedCount) return { id: id }
    }
}
