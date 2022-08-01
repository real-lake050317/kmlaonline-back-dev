import mongoose from "mongoose";
const { Schema } = mongoose;

import Comment from './Comment.js';

const PostSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true
  },
  uploader: {
    type: String,
    required: true,
  },
  uploadDate: {
    type: String,
    required: true,
  },
  comments: {
    type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
  },
  views: {
    type: Number,
    required: true,
    default: 0,
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
    default: 0,
  }
});

export default mongoose.model("Post", PostSchema);
