import mongoose from "mongoose";
import bcrypt from "bcrypt-nodejs";
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
  number: { type: Number, default: 0 },
  address: [{ line1: String, line2: String, pincode: Number, state: String }],
  orders: { type: [String], default: [] },
 
  wishlist: { type: [String], default: [] },
  wallet: { type: Number, default: 0 },
  cart: { type: [{ id: String, amount: Number }], default: [] },
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
