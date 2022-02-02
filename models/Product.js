import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema(
  { object: { type: String, default: "product"},
    name: { type: String, required: true, unique: true} },
  { minimize: false, timestamps: true, collection: "products" }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
