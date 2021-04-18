import mongoose from "mongoose";
import { User } from "./user";

export const Item = new mongoose.Schema({
  name: String,
  description: String,
  pictures: [String],
  currency: String,
  price: Number,
  Country: String,
  multiNation: Boolean,
  sellerId: String,
  discount: { type: Number, default: 0 },
  Stock: Number,
  category: String,
  sold: Number,
  bestseller: { type: Boolean, default: false },
  wishlisted: [User],
});
export const CartItem = new mongoose.Schema({
  name: String,
  description: String,
  pictures: [String],
  currency: String,
  price: Number,
  Country: String,
  multiNation: Boolean,
  sellerId: String,
  discount: { type: Number, default: 0 },
  Stock: Number,
  category: String,
  amount: Number,
});

export default mongoose.model("Item", Item);
