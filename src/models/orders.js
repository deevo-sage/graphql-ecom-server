import mongoose from "mongoose";
export const Order = new mongoose.Schema({
  items: {
    type: [{ itemId: String, amount: Number }],
    default: [],
    _id: false,
  },
  user: String,
  payment: Boolean,
  status: String,
});
export default mongoose.model("Order", Order);
