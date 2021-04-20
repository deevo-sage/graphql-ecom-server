import mongoose from "mongoose";
import bcrypt from "bcrypt-nodejs";
const Seller = new mongoose.Schema({
  id: String,
  name: String,
  selleremail: {
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
  wallet: { type: Number, default: 0 },
  gst: { type: Number, default: 0 },
  items: { type: [String], default: [] },
  ordersRecieved: { type: [String], default: [] },
});
Seller.pre("save", function (next) {
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
Seller.methods.comparePass = (password) => {
  var user = this;
  return bcrypt.compareSync(password, user.password);
};
export default mongoose.model("Seller", Seller);
