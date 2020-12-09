require('./connection')
const User = require('./models/User')

async function createUser(){

const user = new User({

    username: 'Ivonne',
    password: '123',
    date: new Date(1997,0,14)
})      

 const newuser = await user.save()
 return newuser
}

createUser()
.then(newuser => console.log('new user: ', newuser))
.catch(err => console.log(err))

