import Sellermodel from "../models/Seller";
import Itemmodel from "../models/item";
import Ordermodel from "../models/orders";

export const SellerQueries = {
  getSeller: async (_, input) => {
    const requiredUser = await Sellermodel.findById(input.id);
    return requiredUser;
  },
  getSellers: async (_, input) => {
    const requiredUser = await Sellermodel.find();
    return requiredUser;
  },
};

export const SellerMutations = {
  createSeller: async (_, input) => {
    let newuser = new Sellermodel(input);
    newuser.id = newuser._id;
    await newuser.save();
    return newuser;
  },
  updateSeller: async (_, input) => {
    const userId = input.id;
    delete input.id;
    const updatedUser = await Sellermodel.findByIdAndUpdate(
      userId,
      input,
      (err, doc) => doc
    );
    return updatedUser;
  },
  updateSellerAddress: async (_, input) => {
    const userId = input.id;
    delete input.id;
    const updatedUser = await Sellermodel.findByIdAndUpdate(
      userId,
      input,
      (err, doc) => doc
    );
    return updatedUser;
  },
};
export const Seller = {
  ordersRecieved: async (seller) => {
    const results = await Ordermodel.find({
      _id: {
        $in: seller.ordersRecieved,
      },
    });
    return results;
  },
  items: async (seller) => {
    const items = await Itemmodel.find({
      _id: {
        $in: seller.items,
      },
    });
    return items;
  },
};
