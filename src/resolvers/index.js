import User from "../models/user";
import Seller from "../models/Seller";
import Order from "../models/orders";
import Item from "../models/item";
export const resolvers = {
  Query: {
    getUser: async () => {
      const users = await User.find({});
      return users;
    },
  },
  Mutation: {
    createUser: async (_, { name, email, password }) => {
      let newuser = new User({ name, email, password });
      newuser.id = newuser._id;
      await newuser.save();
      return newuser;
    },
  },
  User: {
    __resolveType: (user) => {
      if (user.seller) return "Seller";
      return "NormalUser";
    },
  },
  shopItem: {
    __resolveType: (item) => {
      if (item.amount) {
        return "CartItem";
      } else {
        return "Item";
      }
    },
  },
};
