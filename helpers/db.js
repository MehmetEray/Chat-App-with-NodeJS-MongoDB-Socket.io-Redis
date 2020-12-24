const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect(process.env.DB_STRING, {useNewUrlParser: true})
    mongoose.connection.on('open',() => {
        console.log('Connected to MongoDB')
    })
    mongoose.connection.on('error',(error) => {
        console.log('Mongo Error : ',error)
    })
    mongoose.Promise = global.Promise;
}