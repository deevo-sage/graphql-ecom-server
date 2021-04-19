import User from "../models/user";
import Seller from "../models/Seller";

export const UserQueries = {
  getUser: async (_, input) => {
    const users = await User.find({});
    return users;
  },
  getOneUser: async (_, input) => {
    const requiredUser = await User.findById(input.id);
    return requiredUser;
  },
};

export const UserMutations = {
  createUser: async (_, input) => {
    let newuser = new User(input);
    newuser.id = newuser._id;
    await newuser.save();
    if (!newuser.orders) newuser.orders = [];

    if (!newuser.wishlist) newuser.wishlist = [];
    if (!newuser.address) newuser.address = [];
    return newuser;
  },
  updateUser: async (_, input) => {
    const userId = input.id;
    delete input.id;
    console.log(input);
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      input,
      (err, doc) => doc
    );
    return updatedUser;
  },
  updateAddress: async (_, input) => {
    const userId = input.id;
    delete input.id;
    console.log(input);
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      input,
      (err, doc) => doc
    );
    return updatedUser;
  },
  updateWishlist: async (_, input) => {
    const userId = input.id;
    delete input.id;
    console.log(input);
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      input,
      (err, doc) => doc
    );
    return updatedUser;
  },
  updateCart: async (_, input) => {
    const userId = input.id;
    delete input.id;
    console.log(input);
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      input,
      (err, doc) => doc
    );
    return updatedUser;
  },
};
export const NormalUser = {
  order: async (user) => {
    // let orarray = [
    //   { status: "single", payment: true },
    //   { status: "single", payment: true },
    // ];
    const orderpromises = user.orders.map((item) =>
      Order.findById({ id: item })
    );
    const results = await Promise.all(orderpromises);
    // console.log({orderpromises,resultarr});
    return results;
  },
  cart: async (user) => {
    const cartpromises = user.cart.map((item) => Order.findById(item.id));
    const results = await Promise.all(cartpromises);
    const final = results.map((item, key) => {
      return {
        ...item,
        amount: user.cart[key].amount,
      };
    });
    return final;
  },
  wishlist: async (user) => {
    const cartpromises = user.wishlist.map((item) => Order.findById(item.id));
    const results = await Promise.all(cartpromises);
    return results;
  },
};
