const app = require('./app');
const mongoose = require('mongoose');


const DB = "mongodb://localhost:27017/users"

const ConnectToMongo = async (DB) => {
    try {
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('Connected Mongo')
    } catch (err) {
        console.log(err)
    }

    }

    ConnectToMongo(DB)
        const port = 8000
        app.listen(port, () => console.log(`Server Started on port $(port)`));


