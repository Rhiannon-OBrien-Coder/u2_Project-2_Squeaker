const db = require('../db')
const { User, Mischief } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
const user1 = await User.find({ username: "User-1" })
const user2 = await User.find({ username: "User-2" })
const user3 = await User.find({ username: "User-3" })

  const mischiefs = [
    {
    owner: user1[0]._id,
    followers: [user2[0]._id, user3[0]._id]
    },
    {
    owner: user2[0]._id,
    followers: [user1[0]._id, user3[0]._id]
    },
    {
    owner: user3[0]._id,
    followers: [user2[0]._id, user1[0]._id]
    },
  ]
  await Mischief.insertMany(mischiefs)
  console.log('Created mischiefs for users!')
}


const run = async () => {
  await main()
  db.close()
}

run()