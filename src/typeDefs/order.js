export default `
type Order {
    items: [CartItem]!
    userID: String!
    payment: Boolean!
    status: String!
  }`;
