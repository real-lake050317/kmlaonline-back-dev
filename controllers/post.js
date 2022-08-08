import Post from "../models/Post.js";

export const createPost = async (req, res, next) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    req.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updatePost = async (req, res, next) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deletePost = async (req, res, next) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json("Post Has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getPosts = async (req, res, next) => {
  next();
  try {
    const posts = await Post.find();
    res.status(200).json(hotels);
  } catch (err) {
    res.status(500).json(err);
  }
};
