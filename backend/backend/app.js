const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const ToDoRoutes = require('./routes/todo.js')

let app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use("/todo", ToDoRoutes);
app.use("/user", (req, res) => {
    res.send("app 2 users to");
})

//Export App
module.exports = app