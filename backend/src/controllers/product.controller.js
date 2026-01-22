import Product from "../models/product.model";

export const GetAllProduct = async (req, res) => {
  try {
    const product = await Product.find();
    console.log(product);

    if (!product) {
      return res.status(400).json({
        message: "Chưa có dữ liệu",
      });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "lỗi Hệ thống" });
    console.log(error);
  }
};

export const CreateProduct = async (req, res) => {
    try {
        console.log(req.body);
        
  } catch (error) {
    res.status(500).json({ message: "lỗi Hệ thống" });
    console.log("Lỗi hệ thống khi CreateProduct", error);
  }
};
