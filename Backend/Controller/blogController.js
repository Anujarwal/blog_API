const Blog = require("../Models/BlogModels");
const asyncHandler = require("express-async-handler");

const AllBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find();
  if (!blogs) {
    res.status(404);
    throw new Error("Blogs not Found");
  }
  res.json(blogs).status(200);
});

const singleBlog = asyncHandler(async (req, res) => {
  const blogs = await Blog.findById(req.params.id);
  if (!blogs) {
    res.status(404);
    throw new Error("Blog not Found");
  }
  res.json(blogs).status(200);
});

const createBlog = asyncHandler(async (req, res) => {
  const { title, author, description, isPublished, coverImage } = req.body;
  if (!title || !author || !description || !isPublished || !coverImage) {
    res.status(401);
    throw new Error("Please Fill All Details");
  }

  const blogs = await Blog.create({
    title,
    author,
    description,
    isPublished,
    coverImage,
  });

  res.json(blogs).status(201);
});

const updateBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!blog) {
    res.status(400);
    throw new Error("Blog Cannot be updated");
  }

  res.json(blog).status(200);
});

const deleteBlog = asyncHandler(async (req, res) => {
  const blogs = await Blog.findByIdAndDelete(req.params.id);
  if (!blogs) {
    res.status(400);
    throw new Error("Blog Connot be delete");
  }

  res.json({success : true});
});

module.exports = { AllBlogs, singleBlog, createBlog, updateBlog, deleteBlog };
