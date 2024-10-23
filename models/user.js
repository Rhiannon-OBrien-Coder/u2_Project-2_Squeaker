const { Schema } = require('mongoose')

const User = new Schema(
  {
    icon: { type: String, required: false },
    username: { type: String, required: true, maxLength: 25 },
    password: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = User