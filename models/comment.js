const { Schema } = require('mongoose')

const Comment  = new Schema(
  {
    squeak: { type: Schema.Types.ObjectId, ref: 'squeak_id' },
    content:  { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'user_id' }
  },
  { timestamps: true }
)

module.exports = Comment