import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
});

const Product = mongooose.model("Product", productSchema);
export default Product;
