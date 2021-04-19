import { gql } from "apollo-server-express";
export const typeDefs = gql`
  interface User {
    id: ID!
    email: String!
    password: String!
    name: String!
    gender: String!
    country: String!
    number: Int
    address: [Address]!
    order: [Order]!
    seller: Boolean
    wallet: Int
  }
  type NormalUser implements User {
    id: ID!
    email: String!
    password: String!
    name: String!
    gender: String!
    country: String!
    number: Int
    address: [Address]!
    order: [Order]!
    seller: Boolean
    wishlist: [Item]!
    wallet: Int
    cart: [CartItem]!
  }
  type Seller implements User {
    id: ID!
    email: String!
    password: String!
    name: String!
    gender: String!
    country: String!
    number: Int
    address: [Address]!
    order: [Order]!
    seller: Boolean
    wallet: Int
    gst: Int
    items: [Item]!
    ordersRecieved: [Order]!
  }
  type Address {
    line1: String!
    line2: String
    pincode: Int!
    state: String
  }

  type CartItem {
    _id: ID!
    amount: Int!
    name: String!
    description: String!
    pictures: [String]!
    seller: Seller!
    price: Float!
    discount: Int
    stock: Int!
    category: String!
  }

  type Item {
    _id: ID!
    name: String!
    description: String!
    pictures: [String]!
    price: Float!
    discount: Int
    seller: Seller!
    stock: Int!
    category: String!
    sold: Int
    wishlisted: [User]
  }
  type Order {
    items: [CartItem]
    userID: String!
    payment: Boolean!
    status: String!
  }
  input CartIteminput {
    amount: Int!
    id: ID!
  }
  input Addressinput {
    line1: String!
    line2: String!
    pincode: Int!
    state: String!
  }
  type Query {
    getUser: [User]!
    getOneUser(id: String!): User!
    getItem(id: String!): Item!
    getItems(limit: Int): [Item]!
    getCategoryItems(category: String!, limit: Int): [Item]!
    getOrders: [Order]!
  }
  type Mutation {
    createUser(
      name: String!
      email: String!
      password: String!
      number: Int
      gender: String!
      country: String!
    ): User!
    updateUser(
      id: String!
      name: String!
      email: String!
      password: String!
      number: Int!
      gender: String!
      country: String!
      seller: Boolean!
    ): User!
    updateAddress(id: String!, address: [Addressinput]!): User
    updateWishlist(id: String!, wishlist: [String]!): User!
    updateCart(id: String!, cart: [CartIteminput]!): User!
    createItem(
      name: String!
      description: String!
      price: Int!
      seller: String!
    ): Item!
    updateItem(
      id: String!
      name: String!
      description: String!
      price: Int!
      discount: Int!
      stock: Int!
      category: String!
    ): Item!
    updatePictures(id: String!, pictures: [String]!): Item!
    itemSold(id: String!, amount: Int): Item!
    deleteItem(id: String!): Item!
    createOrder(
      userId: String!
      payment: Boolean!
      status: String!
      orderedItems: [CartIteminput]!
    ): Order!
    updateOrder(id: String!, payment: Boolean!, status: String!): Order!
  }
`;
