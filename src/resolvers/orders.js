import Ordermodel from "../models/orders";
import Sellermodel from "../models/Seller";
import Itemmodel from "../models/item";
import Usermodel from "../models/user";
export const OrderQueries = {
  getOrders: async (_, input) => {
    const allOrders = await Ordermodel.find();
    return allOrders;
  },
};

export const OrderMutations = {
  createOrder: async (_, input) => {
    const user = await Usermodel.findById(input.user);
    if (user) {
      const newOrder = new Ordermodel(input);
      await newOrder.save();
      
      const orders = user.orders;
      orders.push(newOrder._id);
      await Usermodel.findByIdAndUpdate(input.user, { orders });
      const itemids = input.items.map((item, key) => {
        return item.itemId;
      });
      const allitems = await Itemmodel.find({
        _id: {
          $in: itemids,
        },
      });
      const sellers = {};
      allitems.forEach((item) => {
        if (!sellers[item.seller]) sellers[item.seller] = item.seller;
      });
      let count = 0;
      console.log(Object.entries(sellers));
      for (const [key, value] of Object.entries(sellers)) {
        const seller = await Sellermodel.findById(key);
        const ordersRecieved = seller.ordersRecieved;
        ordersRecieved.push(newOrder._id);
        count += 1;
        console.log({ seller, ordersRecieved });
        await Sellermodel.findByIdAndUpdate(key, { ordersRecieved });
      }

      console.log({ count });

      return newOrder;
    }
    return null;
  },
  updateOrder: async (_, input) => {
    const OrderId = input.id;
    delete input.id;
    const updateOrder = await Ordermodel.findByIdAndUpdate(OrderId, input);
    return updateOrder;
  },
};

export const Order = {
  user: async (order) => {
    const user = await Usermodel.findById(order.user);
    return user;
  },
  items: async (order) => {
    let itemidarr = order.items.map((item) => {
      return item.itemId;
    });
    const items = await Itemmodel.find({
      _id: { $in: itemidarr },
    });

    const final = items.map((item, key) => {
      return { ...item._doc, amount: order.items[key].amount };
    });
    // console.log({ items, final });
    return final;
  },
};
