const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const ToDoRoutes = require('./routes/todo.js.js')

let app = express()

// Route Imports
const UserRoutes = require('./routes/users')

let app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use("/user", UserRoutes)


//Export App
module.exports = app