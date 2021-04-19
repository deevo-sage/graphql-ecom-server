import Item from "../models/item";
import User from "../models/user";

export const ItemQueries = {
  getItem: async (_, input) => {
    const requiredItem = await Item.findById(input.id);
    return requiredItem;
  },
  getItems: async (_, input) => {
    let items;
    if (input.limit) items = await Item.find({}).limit(input.limit);
    else items = await Item.find({});
    if (items) return items;
    else return [];
  },
  getCategoryItems: async (_, input) => {
    const items = input.limit
      ? await Item.find({ category: input.category }).limit(input.limit)
      : await Item.find({ category: input.category });
    return items;
  },
};

export const ItemMutations = {
  createItem: async (_, input) => {
    const newItem = new Item(input);
    await newItem.save();
    return newItem;
  },
  updateItem: async (_, input) => {
    const itemId = input.id;
    delete input.id;
    const updatedItem = await Item.findByIdAndUpdate(itemId, input);
    return updatedItem;
  },
  updatePictures: async (_, input) => {
    const itemId = input.id;
    delete input.id;
    const updatedItem = await Item.findByIdAndUpdate(itemId, input);
    return updatedItem;
  },
  itemSold: async (_, input) => {
    let sold = input.sold;
    const Item = await Item.findById(input.id);

    if (Item) {
      sold += Item.sold;
    } else {
      return;
    }
    const updatedItem = await Item.findByIdAndUpdate(input.id, { sold });
    return updatedItem;
  },
  deleteItem: async (_, input) => {
    const deletedItem = await Item.findByIdAndDelete(input.id);
    return deletedItem;
  },
};

export const Itemresolver = {
  seller: async (user) => {
    const seller = await User.findById(user.seller);
    return seller;
  },
};
