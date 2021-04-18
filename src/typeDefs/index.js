import { gql } from "apollo-server-express";
export const typeDefs = gql`
  interface User {
    id: ID!
    email: String!
    password: String!
    name: String!
    gender: String!
    country: String!
    Int: Int
    address: [Address]!
    order: [Order]!
    seller: Boolean
    currency: String
    wallet: Int
  }
  type NormalUser implements User {
    id: ID!
    email: String!
    password: String!
    name: String!
    gender: String!
    country: String!
    Int: Int
    address: [Address]!
    order: [Order]!
    seller: Boolean
    wishlist: [Item]
    currency: String
    wallet: Int
    cart: [CartItem]
  }
  type Seller implements User {
    id: ID!
    email: String!
    password: String!
    name: String!
    gender: String!
    country: String!
    Int: Int
    address: [Address]!
    order: [Order]!
    seller: Boolean
    currency: String
    wallet: Int
    gst: Int
    items: [Item]
    ordersRecieved: [Order]
  }
  type Address {
    line1: String!
    line2: String
    pincode: Int!
    state: String
  }
  interface shopItem {
    name: String!
    description: String!
    pictures: [String]!
    price: Float!
    currency: String!
    Country: String!
    multiNation: Boolean!
    discount: Int
    Stock: Int!
    category: String!
    sold: Int
    wishlisted: [User]
  }
  type CartItem implements shopItem {
    amount: Int!
    name: String!
    description: String!
    pictures: [String]!
    price: Float!
    currency: String!
    Country: String!
    multiNation: Boolean!
    discount: Int
    Stock: Int!
    category: String!
    sold: Int
    wishlisted: [User]
  }

  type Item implements shopItem {
    name: String!
    description: String!
    pictures: [String]!
    price: Float!
    currency: String!
    Country: String!
    multiNation: Boolean!
    discount: Int
    Stock: Int!
    category: String!
    sold: Int
    wishlisted: [User]
  }
  type Order {
    items: [CartItem]!
    userID: String!
    payment: Boolean!
    status: String!
  }
  type Query {
    getUser: [User]!
    getOneUser(id: String!): User!
    getItem(id: String!): Item!
    getItems(limit: Int): [Item]!
    getHomePageItems: [Item]!
    getOrders(id: String): [Order]!
  }
  type Mutation {
    createUser(name: String!, email: String!, password: String!): User!
    updateUser(name: String): User!
    createItem(name: String): Item!
    updateItem(name: String): Item!
    createOrder(name: String): Order!
    updateOrder(name: String): Order!
    deleteItem(id: String): Item!
  }
`;
