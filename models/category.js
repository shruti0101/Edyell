import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: String,
  slug: String,
  image: String,
  metaTitle: String,

  metaDescription: String,
  order: {
  type: Number,
  default: 0,
},
});

export default mongoose.models.category ||
  mongoose.model("category", CategorySchema);
