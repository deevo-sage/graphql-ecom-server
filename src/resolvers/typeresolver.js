export default {
  User: {
    __resolveType: (user) => {
      if (user.seller) return "Seller";
      return "NormalUser";
    },
  },
};
