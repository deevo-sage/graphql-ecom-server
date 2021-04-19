import mongoose from "mongoose";

export const Item = new mongoose.Schema({
  name: String,
  description: String,
  pictures: { type: [String], default: [] },
  price: Number,
  seller: String,
  discount: { type: Number, default: 0 },
  stock: { type: Number, default: 0 },
  category: { type: String, default: "" },
  sold: { type: Number, default: 0 },
  bestseller: { type: Boolean, default: false },
  wishlisted: { type: [String], default: [] },
});

export default mongoose.model("Item", Item);
