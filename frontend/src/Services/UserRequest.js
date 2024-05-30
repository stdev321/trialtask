import axios from 'axios'

const API_URL ="http://localhost:3000/" // Api Url Change If Your URL changes

class UserRequest { 
    async getAllUsers() { 
        try {
            const res = await axios.get(`${API_URL}users`).then((res) => res).catch((res) => res)
            if (res.status === 200) {
                return {error: false, data: res.data.data}
            }
            return {error: true, message: "No User Found!!"};
        } catch (error) {
            return error
        }
    }

    async getUserById(id) { 
        try {
            const res = await axios.get(`${API_URL}users/${id}`).then((res) => res).catch((res) => res)
            if (res.status === 200) {
                return {error: false, data: res.data.data}
            }else if (res.status === 412) { 
                return {error: true, message: res.data.message}
            }
            return {error: true, message: "Something Went Wrong!!"};
        } catch (error) {
            return error
        }
    }

    async editUser(value, id) { 
        try {
            const header = {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            };
            const res = await axios.put(`${API_URL}users/${id}`, value, header).then((res) => res).catch((res) => res)
            if (res.status === 200) {
                return {error: false, data: res.data.data}
            }
            return {error: true, message: "No User Found!!"};
        } catch (error) {
            return error
        }
    }

    async addUser(value) { 
        try {
            const header = {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            };
            const res = await axios.post(`${API_URL}users`, value, header).then((res) => res).catch((res) => res)
            if (res.status === 200) {
                return {error: false, data: res.data.data}
            }
            return {error: true, message: "No User Found!!"};
        } catch (error) {
            return error
        }
    }

    async delUser(id) { 
        try {
            const header = {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            };
            const res = await axios.delete(`${API_URL}users/${id}`, header).then((res) => res).catch((res) => res)
            if (res.status === 200) {
                return {error: false, data: res.data.data}
            }
            return {error: true, message: "No User Found!!"};
        } catch (error) {
            return error
        }
    }
}

const userRequest = new UserRequest()
export default userRequest;