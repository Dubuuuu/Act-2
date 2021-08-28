import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUsers, deleteUser } from './api'

const UsersList = () => {
    const [items, setItems] = useState([])

    const deleteHandler = async (id) => {
        await deleteUser(id)

        const fetchItems = async () => {
            const users = await getUsers()
            setItems(users)
        }
        fetchItems()
    }


useEffect(() => {
    const fetchItems = async () => {
        const users = await getUsers()
        setItems(users)
    }
    fetchItems()
}, [])

return (
    <div className='container'>
        <div className='mt-3'>
            <h3>Users List</h3>
            <table className='table table-striped mt-3'>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((user) => (
                        <tr key ={user._id}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td><Link to={`/edit/${user._id}`}>Edit</Link></td>
                            <td><button onClick={() => deleteHandler(user._id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
) 
}

export default UsersList