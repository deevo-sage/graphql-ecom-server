export default `
interface OurUsers {
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
  type User implements OurUsers {
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
  type Seller implements OurUsers {
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
  }`;
