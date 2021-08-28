import React, { useState, useEffect } from 'react'
import UserForm from './UserForm'
import { editUser, getUserById } from './api'
import { useParams } from 'react-router'

const EditUser = () => {
    const { id } = useParams()
    const [user, setUser] = useState()


    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUserById(id)
            setUser(user)
        }
        fetchUser()
    }, [id])

    const onSubmit = (data) => {
        editUser(id, data)
    }

    return user ? (
        <div className='containter'>
            <div>
                <h3>Edit User</h3>
                <UserForm user={user} onSubmit={onSubmit} />
            </div>
        </div>
    ) : (
        <div>Loading....</div>
    )
}


export default EditUser