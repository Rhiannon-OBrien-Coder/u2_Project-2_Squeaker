const db = require('../db')
const { User } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const users = [
    {
      icon: "https://easydraweverything.com/wp-content/uploads/2024/06/cute-mouse-drawing-8.jpg",
      username: "User-1",
      password: "userpassword_1",
    },
    {
      icon: "https://easy-drawing-ideas.com/wp-content/uploads/2023/07/mouse-easy-drawing.png?v=1688935262",
      username: "User-2",
      password: "userpassword_2",
    },
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLfa9UZxgM9yuYsy4WhFV_P2sGK-nnnHbQ_A&s",
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