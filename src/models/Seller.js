import mongoose from "mongoose";
const Seller = new mongoose.Schema({
  UserId: String,
  gst: Number,
  items: { type: [String], default: [] },
  ordersRecieved: { type: [String], default: [] },
});

export default mongoose.model("Seller", Seller);
