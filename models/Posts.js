import mongoose from "mongoose";
const { Schema } = mongoose;

const PostsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  uploader: {
    type: String,
    required: true,
  },
  uploadDate: {
    type: Date,
    required: true,
  },
  uploaderSchoolId: {
    type: Number,
    required: true,
  },
  comments: [
    {
      commentDate: {
        type: Date,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      commentUploader: {
        type: String,
        required: true,
      },
    },
  ],
  views: {
    type: Number,
    default: 0,
  },
  content: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("Posts", PostsSchema);
