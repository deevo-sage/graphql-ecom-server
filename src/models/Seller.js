import mongoose from "mongoose";
import { Order } from "./orders";
import { Item } from "./item";
import { User } from "./user";
const Seller = new mongoose.Schema({
  info:User,
  gst: Number,
  items: [Item],
  ordersRecieved: [Order],
});

export default mongoose.model("Seller", Seller);
