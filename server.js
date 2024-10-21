const express = require('express')
const db = require('./db')
const bodyParser = require('body-parser')
const logger = require('morgan')
const userController = require('./controllers/userController')
const mischiefController = require('./controllers/mischiefController')
const squeakController = require('./controllers/squeakController')
const commentController = require('./controllers/commentController')
const cheeseController = require('./controllers/cheeseController')
const stinkycheeseController = require('./controllers/stinkycheeseController')

const PORT = process.env.PORT || 3001

const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))


app.get('/', (req, res) => res.send('This is our landing page! Thanks for checking out the content of Squeaker.'))

app.get('/users', userController.getUsers)
app.get('/users/usernames/:username', userController.getUserByName)
app.get('/users/:id', userController.getUsersById)
app.post('/users', userController.createUser)
app.put('/users/:id', userController.updateUser)
app.delete('/users/:id', userController.deleteUser)

app.get('/mischiefs', mischiefController.getMischiefs)
app.get('/mischiefs/:id', mischiefController.getMischiefById)

app.get('/squeaks', squeakController.getUsers)
app.get('/squeaks/user/:user', squeakController.getSqueakByUser)
app.get('/squeaks/:id', squeakController.getSqueaksById)
app.post('/squeaks', squeakController.createSqueak)
app.put('/squeaks/:id', squeakController.updateSqueak)
app.delete('/squeaks/:id', squeakController.deleteSqueak)

app.get('/comments/:id', commentController.getComments)
app.get('/comments/squeak/:squeak', commentController.getCommentBySqueak)
app.get('/comments/:id', commentController.getCommentById)
app.post('/comments', commentController.createComment)
app.put('/comments/:id', commentController.updateComment)
app.delete('/comments/:id', commentController.deleteComment)

//cheeses
app.get('/cheeses/:id', cheeseController.getInstructionById)
app.get('/cheeses/recipe/:recipe', cheeseController.getInstructionByRecipe)
app.post('/cheeses', cheeseController.createInstruction)
app.put('/cheeses/:id', cheeseController.updateInstruction)
app.delete('/cheeses/:id', cheeseController.deleteInstruction)

//stinkycheeses
app.get('/stinkycheeses/:id', stinkycheeseController.getInstructionById)
app.get('/stinkycheeses/recipe/:recipe', stinkycheeseController.getInstructionByRecipe)
app.post('/stinkycheeses', stinkycheeseController.createInstruction)
app.put('/stinkycheeses/:id', stinkycheeseController.updateInstruction)
app.delete('/stinkycheeses/:id', stinkycheeseController.deleteInstruction)

app.get('/*', (req, res) => res.send({ error: "404 page not found" }))