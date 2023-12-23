const Blog = require("../models/blogModel");
const mongoose = require("mongoose");

//get all blogs
const getPosts = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Invalid ID" });
    }
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }
  try {
    const deletePost = await Blog.findByIdAndDelete(id);
    if (!deletePost) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.status(200).json({ message: "Blog deleted successfully", deletePost });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createPost = async (req, res) => {
  const { title, body, author } = req.body;

  try {
    const post = await Blog.create({ title, body, author });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getPosts,
  createPost,
  deletePost,
  getPost,
};
