

const mongoose = require('mongoose')

const uri='mongodb://127.0.0.1:27017/mywebstore';

mongoose.connect('mongodb://localhost:27017/mywebstore',{useNewUrlParser: true, useUnifiedTopology: true, 'useCreateIndex': true})
.catch(error => console.log("Has ocurred an error ",error))
//Eventos para mostrar si ya está hecha la conección

mongoose.connection.once('open', _ =>{
console.log('DBB is connected to server from mongo')
})

mongoose.connection.on('error', error =>{
    console.log('There is an error ', error)
})


