import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserReg = new Schema({
  userID: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  nic: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

export default mongoose.model("users", UserReg);
