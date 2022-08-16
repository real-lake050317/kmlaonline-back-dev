import Posts from "../models/Posts.js";

export const getPost = async (req, res, next) => {
  try {
    const post = await Posts.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getPosts = async (req, res, next) => {
  next();
  try {
    const posts = await Posts.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};
