const asyncHandler = require("express-async-handler");

const getBlogs = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get goals" });
});

const setBlog = asyncHandler(async (req, res) => {
  const { name } = req.query;
  if (!name) {
    res.status(400);
    throw new Error("Please add name feild");
  }
  res.status(200).json({ success: true, data: name });
});

const updateBlog = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "update goal" });
});

const deleteBlog = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "delete goal" });
});

module.exports = {
  getBlogs,
  setBlog,
  updateBlog,
  deleteBlog,
};
