const express = require("express");
const {
  AllBlogs,
  singleBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../Controller/blogController");

const routes = express.Router();

routes.get("/", AllBlogs);
routes.get("/:id", singleBlog);

routes.post("/", createBlog);
routes.put("/:id", updateBlog);

routes.delete("/:id", deleteBlog);

module.exports = routes;
