const db = require('../db')
const { User, Squeak } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
const user1 = await User.find({ username: "User-1" })
const user2 = await User.find({ username: "User-2" })
const user3 = await User.find({ username: "User-3" })

  const squeaks = [
    {
    image: "https://pbs.twimg.com/media/GaI9_vbb0AMsi2H?format=jpg&name=large",
    content:  "literally me",
    user: user1[0]._id
    },
    {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdaoaEOrtpNuiNXU3fJ27ISfVYsAua33kr6w&s",
    content:  "Squad goals",
    user: user2[0]._id
    },
    {
    image: "https://lumiere-a.akamaihd.net/v1/images/p_disneymickeymouse_21494_cef43efe.jpeg?region=0%2C0%2C540%2C810",
    content:  "Can you believe this show? so inaccurate smh, us mice would never befriend ducks and dogs",
    user: user3[0]._id
    },
  ]
  await Squeak.insertMany(squeaks)
  console.log('Created first squeaks for each user')
}


const run = async () => {
  await main()
  db.close()
}

run()