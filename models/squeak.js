const { Schema } = require('mongoose')

const Squeak  = new Schema(
  {
    image: { type: String, required: false },
    content:  { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'user_id' }
  },
  { timestamps: true }
)

module.exports = Squeak