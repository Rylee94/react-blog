const express = require("express");

const {
  createPost,
  deletePost,
  getPosts,
  getPost,
} = require("../controllers/blogController");

const router = express.Router();

//POST a new blog
router.post("/", createPost);

//DELETE a blog
router.delete("/:id", deletePost);

//GET all blogs
router.get("/", getPosts);

//GET single blog
router.get("/:id", getPost);

module.exports = router;
