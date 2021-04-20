import Itemmodel from "../models/item";
import Sellermodel from "../models/Seller";

export const ItemQueries = {
  getItem: async (_, input) => {
    const requiredItem = await Itemmodel.findById(input.id);
    return requiredItem;
  },
  getItems: async (_, input) => {
    let items;
    if (input.limit) items = await Itemmodel.find({}).limit(input.limit);
    else items = await Itemmodel.find({});
    if (items) return items;
    else return [];
  },
  getCategoryItems: async (_, input) => {
    let items;
    if (input.limit)
      items = await Itemmodel.find({ category: input.category }).limit(
        input.limit
      );
    else items = await Itemmodel.find({ category: input.category });
    if (items) return items;
    return [];
  },
};

export const ItemMutations = {
  createItem: async (_, input) => {
    const itemSeller = await Sellermodel.findById(input.seller);
    if (itemSeller) {
      const newItem = new Itemmodel(input);
      const id = newItem._id;
      await newItem.save();
      let items = itemSeller.items;
      items.push(id);
      await Sellermodel.findByIdAndUpdate(input.seller, { items });
      return newItem;
    } else return null;
  },
  updateItem: async (_, input) => {
    const itemId = input.id;
    delete input.id;
    const updatedItem = await Itemmodel.findByIdAndUpdate(itemId, input);
    return updatedItem;
  },
  updatePictures: async (_, input) => {
    const itemId = input.id;
    delete input.id;
    const updatedItem = await Itemmodel.findByIdAndUpdate(itemId, input);
    return updatedItem;
  },
  itemSold: async (_, input) => {
    let sold = input.sold;
    const Item = await Itemmodel.findById(input.id);

    if (Item) {
      sold += Item.sold;
    } else {
      return;
    }
    const updatedItem = await Itemmodel.findByIdAndUpdate(input.id, { sold });
    return updatedItem;
  },
  deleteItem: async (_, input) => {
    const deletedItem = await Itemmodel.findByIdAndDelete(input.id);
    let items = itemSeller.items.filter((item) => item !== input.id);
    await Sellermodel.findByIdAndUpdate(input.seller, { items });
    return deletedItem;
  },
};

export const Item = {
  seller: async (item) => {
    const seller = await Sellermodel.findById(item.seller);
    console.log(seller);
    return seller;
  },
};

export const CartItem = {
  seller: async (item) => {
    const seller = await Sellermodel.findById(item.seller);
    console.log(seller);
    return seller;
  },
};

