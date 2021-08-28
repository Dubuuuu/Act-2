import axios from 'axios'

export const getUsers = async () => {
    const users = await axios.get('http://localhost:8000/user')
    return users.data.data
}

export const createUser = async () => {
    await axios.post('http://localhost:8000/user/create', user)
}

export const editUser = async (id, user) => {
    await axios.patch(`http://localhost:8000/user/${id}`, user)
}

export const getUserById = async (id) => {
    const user = await axios.get(`http://localhost:8000/user/${id}`)
    return user.data.data
}

export const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8000/user/${id}`)
}
