const { Schema } = require('mongoose')

const Mischief = new Schema(
  {
    owner: { type: Schema.Types.ObjectId, ref: 'user_id' },
    followers: { type: Array, ref: 'user_id' }
  },
  { timestamps: true }
)

module.exports = Mischief