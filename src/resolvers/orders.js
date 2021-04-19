import Order from "../models/orders";

export const OrderQueries = {
  getOrders: async (_, input) => {
    const allOrders = await Order.find();
    return allOrders;
  },
};

export const OrderMutations = {
  createOrder: async (_, input) => {
    const newOrder = new Order({ input });
    await newOrder.save();
    return newOrder;
  },
  updateOrder: async (_, input) => {
    const OrderId = input.id;
    delete input.id;
    const updateOrder = await findByIdAndUpdate(OrderId, input);
    return updateOrder;
  },
};
