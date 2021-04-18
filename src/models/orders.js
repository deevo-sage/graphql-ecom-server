import mongoose from "mongoose";
import { Item } from "./item";
export const Order = new mongoose.Schema({
  orderedItems: { type: [Item], default: [] },
  userId: String,
  payment: Boolean,
  status: String,
});
export default mongoose.model("Order", Order);
