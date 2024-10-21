const db = require('../db')
const { User, Squeak, Comment } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
const squeak1 = await Squeak.find({ content:  "literally me" })
const squeak2 = await Squeak.find({ content:  "Squad goals" })
const squeak3 = await Squeak.find({ content: "Can you believe this show? so inaccurate smh, us mice would never befriend ducks and dogs", })
const user1 = await User.find({ username: "User-1" })
const user2 = await User.find({ username: "User-2" })
const user3 = await User.find({ username: "User-3" })

  const comments = [
    {
    squeak: squeak1[0]._id,
    content: "yooo same",
    user: user2[0]._id
    },
    {
    squeak: squeak2[0]._id,
    content: "i'm joiningggg",
    user: user3[0]._id
    },
    {
    squeak: squeak3[0]._id,
    content: "this is a brain dead take, mickey is the one true god",
    user: user1[0]._id
    },
  ]
  await Comment.insertMany(comments)
  console.log('Created first comments for each squeak')
}


const run = async () => {
  await main()
  db.close()
}

run()