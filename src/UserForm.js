import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

const UserForm = ({ user, onSubmit}) => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            username: user ? user.username : '',
            email: user ? user.email: '',
            password: user ? user.password : '',
        }
    })
    const history = useHistory()

    const submitHandler = handleSubmit((data) => {
        onSubmit(data)
        history.push('/')
    })

    return (
        <form onSubmit={submitHandler}>
            <div className='form-group'>
                <label htmlFor='username'>Username:</label>
                <input className ='form-control'{...register('username')} type='text' name='username' id='username'/>
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input className='form-control'{...register('email')} type='text' name='email' id='email'/>
            </div>
            <div>
                <label htmlFor='password'>Password:</label>
                <input className='form-control'{...register('password')} type='text' name='password' id='password' />
            </div>
            <div className='form-group'>
                <button type='submit' className='btn btn-primary'>
                    Save User
                </button>
            </div>
        </form>
    )

}

export default UserForm