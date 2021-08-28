import React from 'react'
import UserForm from './UserForm'
import {createUser} from './api'


const CreateUser = () => {
    const onSubmit = (data) => {
        createUser(data)
    }


return (
    <div className='container'>
        <div>
            <h3>Create User</h3>
            <UserForm onSubmit={onSubmit} />
        </div>
    </div>
)
}

export default CreateUser