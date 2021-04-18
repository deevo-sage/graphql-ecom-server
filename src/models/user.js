import mongoose from "mongoose";
import bcrypt from "bcrypt-nodejs";
import { Order } from "./orders";
import { CartItem, Item } from "./item";
export const User = new mongoose.Schema({
  id: String,
  name: String,
  email: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },
  gender: String,
  country: String,
  password: String,
  number: Number,
  address: [{ line1: String, line2: String, pincode: Number, state: String }],
  orders: { type: [Order], default: [] },
  seller: {
    type: Boolean,
    default: false,
  },
  wishlist: { type: [Item], default: [] },
  currency: String,
  wallet: Number,
  cart: { type: [CartItem], default: [] },
});
User.pre("save", function (next) {
  var user = this;
  if (user.isModified("password")) {
    return next();
  } else {
    bcrypt.hash(user.password, null, null, (err, hash) => {
      if (err != null) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  }
});
User.methods.comparePass = (password) => {
  var user = this;
  return bcrypt.compareSync(password, user.password);
};
export default mongoose.model("User", User);
