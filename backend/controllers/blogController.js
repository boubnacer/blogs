const getBlogs = (req, res) => {
  res.status(200).json({ message: "get goals" });
};

const setBlog = (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ message: "please add a name feild" });
  }
  res.status(200).json({ success: true, data: name });
};

const updateBlog = (req, res) => {
  res.status(200).json({ msg: "update goal" });
};

const deleteBlog = (req, res) => {
  res.status(200).json({ msg: "delete goal" });
};

module.exports = {
  getBlogs,
  setBlog,
  updateBlog,
  deleteBlog,
};
