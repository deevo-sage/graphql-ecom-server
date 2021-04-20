import Usermodel from "../models/user";
import Itemmodel from "../models/item";
import Ordermodel from "../models/orders";

export const UserQueries = {
  getUser: async (_, input) => {
    const users = await Usermodel.find({});
    console.log(users[0]);
    return users;
  },
  getOneUser: async (_, input) => {
    const requiredUser = await Usermodel.findById(input.id);
    return requiredUser;
  },
};

export const UserMutations = {
  createUser: async (_, input) => {
    let newuser = new Usermodel(input);
    newuser.id = newuser._id;
    await newuser.save();

    return newuser;
  },
  updateUser: async (_, input) => {
    const userId = input.id;
    delete input.id;
    console.log(input);
    const updatedUser = await UsermodelfindByIdAndUpdate(
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
    const updatedUser = await Usermodel.findByIdAndUpdate(
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
    const updatedUser = await Usermodel.findByIdAndUpdate(
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
    const updatedUser = await Usermodel.findByIdAndUpdate(
      userId,
      input,
      (err, doc) => doc
    );
    return updatedUser;
  },
};
export const User = {
  orders: async (user) => {
    const results = await Ordermodel.find({
      _id: {
        $in: user.orders,
      },
    });
    return results;
  },
  cart: async (user) => {
    const results = await Itemmodel.find({
      _id: {
        $in: user.cart,
      },
    });
    const final = results.map((item, key) => {
      return {
        ...item,
        amount: user.cart[key].amount,
      };
    });
    return final;
  },
  wishlist: async (user) => {
    const results = await Itemmodel.find({
      _id: {
        $in: user.wishlist,
      },
    });
    return results;
  },
};
