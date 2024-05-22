const mongoose = require("mongoose");

const BlogScheme = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isPublished: {
      type: Boolean,
      required: true,
      default: false,
    },
    coverImage:{
      type : String,
      default : false
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", BlogScheme);
