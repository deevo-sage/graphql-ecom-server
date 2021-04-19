import mongoose from "mongoose";
export const Order = new mongoose.Schema({
  orderedItems: { type: [{ id: String, amount: Number }], default: [] },
  userId: String,
  payment: Boolean,
  status: String,
});
export default mongoose.model("Order", Order);
