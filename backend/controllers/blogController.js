const asyncHandler = require("express-async-handler");
const Blog = require("../models/blogModel.js");

const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find();
  res.status(200).json({ success: true, blogs });
});

const setBlog = asyncHandler(async (req, res) => {
  const { text } = req.query;
  if (!text) {
    res.status(400);
    throw new Error("Please add name feild");
  }
  await Blog.create({ text });
  res.status(200).json({ success: true, data: text });
});

const updateBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) {
    res.status(404);
    throw new Error("Blog does not found");
  }
  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({ msg: "update goal", updatedBlog });
});

const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) {
    res.status(404);
    throw new Error("blog does not found");
  }
  await blog.remove();
  res.status(200).json({ msg: "delete goal" });
});

module.exports = {
  getBlogs,
  setBlog,
  updateBlog,
  deleteBlog,
};
