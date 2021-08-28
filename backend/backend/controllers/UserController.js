const User = require('../models/Users')

exports.GetAllUsers = GetAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find({})
        res.status(200).json({
            status: 'sucess',
            data: allUsers,
        })
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: 'GET ALL USERS ERROR'
        })
    }
}

exports.CreateUser = CreateUser = async (req, res) => {
    try {
        const newUser = req.body
        const user = await User.create(newUser)
        res.status(200).json({
            status: 'success',
            data: user,
        })
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: 'CREATE USER ERROR'
        })
    }
}

exports.GetUserById = GetuSerById = async (req, res) => {
    try {
        const userId = req.params.id
        const user = await User.findById(userId)
        if (!user) {
            res.status(404).json({
                status: 'failed',
                message: 'USER NOT FOUND',
            })
        } else {
            res.status(200).json({
                status: 'success',
                data: user,
            })
        }
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            mesage: 'GET USER BY ID ERROR',
        })
    }
}

exports.UpdateUserById = UpdateUserById = async (req, res) => {
    try {
        const userId= req.params.id
        const updateUser = req.body
        const user = await User.findByIdAndUpdate(userId, updateUser, {new: true})
        if (!user) {
            res.status(404).json({
                status: 'failed',
                message: 'USER NOT FOUND',
            })
        } else {
            res.status(200).json({
                status: 'success',
                data: user,
            })
        }
    } catch (err){
        res.status(400).json({
            status: 'failed',
            message: 'UPDATE USER ERRPR',
        })
    }
    
}

exports.DeleteUser = DeleteUser = async (req, res) => {
    try {
        const userId = req.params.id
        const user = await User.findByIdAndDelete(userId)
        if (!user) {
            res.status(404).json({
                status: 'failed',
                message: 'USER NOT FOUND',
            })
        } else {
            res.status(200).json({
                status: 'success',
                message: 'User is deleted',
            })
        }
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: 'DELETE USER ERROR',
        })
    }
}

