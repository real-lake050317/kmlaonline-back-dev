import Announcements from "../models/Announcements.js";

export const createPost = async (req, res, next) => {
  const newPost = new Announcements(req.body);
  try {
    const savedPost = await newPost.save();
    req.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updatePost = async (req, res, next) => {
  try {
    const updatedPost = await Announcements.findByIdAndUpdate(
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
    await Announcements.findByIdAndDelete(req.params.id);
    res.status(200).json("Post Has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getPost = async (req, res, next) => {
  try {
    const post = await Announcements.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getPosts = async (req, res, next) => {
  next();
  try {
    const posts = await Announcements.find().sort({ _id: -1 }).skip((req.params.page - 1) * 10).limit(10);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};
