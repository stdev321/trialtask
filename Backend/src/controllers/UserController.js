const userDbService = require("../Helper/UserServices");

class UserServices {
  getUserById = async (req) => {
    try {
      const userId = Number(req.params.id);
      const userData = await userDbService.getUser(userId);
      return userData;
    } catch (error) {
      return error;
    }
  };

  getAllUsers = async () => { 
    try {
      const userData = await userDbService.getAllUsers();
      return userData;
    } catch (error) {
      return error;
    }
  }

  createUser = async (req) => {
    try {
      const value = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };
      const user = await userDbService.createUser(value);
      return user;
    } catch (error) {
      return error;
    }
  };

  updateUser = async (req) => {
    try {
      const userId = Number(req.params.id);
      const user = await userDbService.updateUser(req.body, userId);
      return user;
    } catch (error) {
      return error;
    }
  };

  deleteUser = async (req) => {
    try {
      const userId = Number(req.params.id);
      const userData = await userDbService.deleteUser(userId);
      return userData;
    } catch (error) {
      return error;
    }
  };
}

const userService = new UserServices();
module.exports = userService;
