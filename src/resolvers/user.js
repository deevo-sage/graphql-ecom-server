import User from "../models/user";

const FindOne = async (_, { email }) => {
  const requiredUser = await User.findOne({ email });
  return requiredUser;
};
const CreateUser = async(_, { name, email, gender, country, password });
export default {
  FindOne,
};
