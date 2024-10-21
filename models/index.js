const mongoose = require('mongoose')
const CheeseSchema = require('./cheese')
const StinkyCheeseSchema = require('./stinkycheese')
const MischiefSchema = require('./mischief')
const CommentSchema = require('./comment')
const SqueakSchema = require('./squeak')
const UserSchema = require('./user')

const Cheese = mongoose.model('Cheese', CheeseSchema)
const StinkyCheese = mongoose.model('Stinky Cheese', StinkyCheeseSchema)
const Mischief = mongoose.model('Mischief', MischiefSchema)
const Comment = mongoose.model('Comment', CommentSchema)
const Squeak = mongoose.model('Squeak', SqueakSchema)
const User = mongoose.model('User', UserSchema)

module.exports = {
    Cheese,
    StinkyCheese,
    Mischief,
    Comment,
    Squeak,
    User
}