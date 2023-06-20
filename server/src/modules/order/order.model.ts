import mongoose, { Schema } from 'mongoose'
const ObjectId = mongoose.Types.ObjectId

const OrderSchema: Schema = new mongoose.Schema(
  {
    user_Id: { type: ObjectId, ref: 'User', required: true },
    sub_total: { type: Number, required: true },
    phone_number: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model('Order', OrderSchema)
