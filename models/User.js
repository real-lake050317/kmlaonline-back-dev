import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  comments: {
    type: Number,
    required: true,
  },
  posts: {
    type: Number,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  contact: {
    type: String,
    required: false,
  },
  introduction: {
    type: String,
    required: false,
  },
  birthday: {
    type: Date,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  englishName: {
    type: String,
    required: true,
  },
  waver: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  schoolId: {
    type: Number,
    required: true,
    unique: true
  },
  interest: {
    type: String
  }
});

export default mongoose.model("User", UserSchema);
