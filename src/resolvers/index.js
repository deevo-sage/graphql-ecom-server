import { UserMutations, UserQueries, User } from "./user";
import { OrderMutations, OrderQueries, Order } from "./orders";
import { ItemMutations, ItemQueries, Item, CartItem } from "./item";
import { SellerMutations, SellerQueries, Seller } from "./seller";
export const resolvers = {
  Query: {
    ...UserQueries,
    ...ItemQueries,
    ...OrderQueries,
    ...SellerQueries,
  },
  Mutation: {
    ...UserMutations,
    ...ItemMutations,
    ...OrderMutations,
    ...SellerMutations,
  },

  User,
  Seller,
  Order,
  Item,
  CartItem,
};
