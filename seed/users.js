const db = require('../db')
const { User } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const users = [
    {
    username: "User-1",
    password: "userpassword_1",
    },
    {
    username: "User-2",
    password: "userpassword_2",
    },
    {
    username: "User-3",
    password: "userpassword_3",
    },
  ]
  await User.insertMany(users)
  console.log('Created initial users!')
}


const run = async () => {
  await main()
  db.close()
}

run()