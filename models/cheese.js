const { Schema } = require('mongoose')

const Cheese  = new Schema(
  {
    squeak: { type: Schema.Types.ObjectId, ref: 'squeak_id' },
    user: { type: Schema.Types.ObjectId, ref: 'user_id' }
  },
  { timestamps: true }
)

module.exports = Cheese