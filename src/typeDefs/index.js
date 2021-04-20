import { gql } from "apollo-server-express";
export const typeDefs = gql`
  type User {
    id: String!
    email: String!
    password: String!
    name: String!
    gender: String!
    country: String!
    number: Int
    address: [Address]!
    orders: [Order]!
    wishlist: [Item]!
    wallet: Int
    cart: [CartItem]!
  }
  type Seller {
    id: String!
    selleremail: String!
    password: String!
    name: String!
    gender: String!
    country: String!
    number: Int
    address: [Address]!
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
    _id: String!
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
    _id: String!
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
    _id: String!
    items: [CartItem]
    user: User!
    payment: Boolean!
    status: String!
  }
  input CartIteminput {
    amount: Int!
    itemId: String!
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
    getSeller(id: String!): Seller!
    getSellers: [Seller]!

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
    createSeller(
      name: String!
      selleremail: String!
      password: String!
      number: Int
      gender: String!
      country: String!
    ): Seller!
    updateSeller(
      id: String!
      name: String!
      email: String!
      password: String!
      number: Int!
      gender: String!
      country: String!
      seller: Boolean!
    ): Seller!
    updateSellerAddress(id: String!, address: [Addressinput]!): Seller!
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
      user: String!
      payment: Boolean!
      status: String!
      items: [CartIteminput]!
    ): Order!
    updateOrder(id: String!, payment: Boolean!, status: String!): Order!
  }
`;
