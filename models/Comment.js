import mongoose from "mongoose";
const { Schema } = mongoose;

const CommentSchema = new mongoose.Schema({
  writer: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
    default: 0,
  },
  dislikes: {
    type: Number,
    required: true,
    default: 0
  }
});

export default mongoose.model("Comment", CommentSchema);
