import { UserMutations, UserQueries, NormalUser } from "./user";
import { OrderMutations, OrderQueries } from "./orders";
import { ItemMutations, ItemQueries, Itemresolver } from "./item";

import typeresolvers from "./typeresolver";
export const resolvers = {
  Query: {
    ...UserQueries,
    ...ItemQueries,
    ...OrderQueries,
  },
  Mutation: {
    ...UserMutations,
    ...ItemMutations,
    ...OrderMutations,
  },

  NormalUser,

  ...typeresolvers,
  Item: {
    ...Itemresolver,
  },
};
