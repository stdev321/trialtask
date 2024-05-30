const prisma = require('../DBClient/PrismaClient')
const bcrypt = require('bcrypt')

class UserDbServices {
    getUser = async (id) => {
        try {
            return await prisma.user.findUniqueOrThrow({
                where: {id: id},
                select: {
                    id: true,
                    email: true,
                    name: true,
                    createdAt: true,
                    updatedAt: true
                }
            });
        } catch (error) {
            return error
        }
    }

    getAllUsers = async () => {
        try {
            return await prisma.user.findMany({
                select: {
                    id: true,
                    email: true,
                    name: true,
                    createdAt: true,
                    updatedAt: true
                }
            });
        } catch (error) {
            return error
        }
    }

    updateUser = async (value, userId) => {
        try {
            return await prisma.user.update({
              where: { id: userId },
                data: value,
                select: {
                    id: true,
                    email: true,
                    name: true,
                    createdAt: true,
                    updatedAt: true
                }
            })
          } catch (error) {
            return error
          }
      
    }

    deleteUser = async (id) => { 
        try {
            return await prisma.user.delete({
                where: {id: id}
            }) 
        } catch (error) {
            return error
        }
    }

    createUser = async (value) => { 
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(value.password, salt);
            return await prisma.user.create({
                data: {
                  email: value.email,
                  name: value.name,
                  password: hashedPassword,
                },
                select: {
                  id: true,
                  email: true,
                  name: true,
                  createdAt: true,
                  updatedAt: true
                }
               }); 
        } catch (error) {
            return error
        }
    }
}
  
const userDbService = new UserDbServices();
module.exports = userDbService