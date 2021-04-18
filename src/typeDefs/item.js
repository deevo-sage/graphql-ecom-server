export default ` interface shopItem {
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
  }`;
