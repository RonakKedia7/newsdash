import mongoose from "mongoose";

const bookmarkSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // identifies the user
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: String,
  source: Object,
});

export default mongoose.model("Bookmark", bookmarkSchema);
