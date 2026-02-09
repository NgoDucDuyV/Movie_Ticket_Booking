import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body);

  res.status(200).json({ message: "tạo tài khoản thành côcông!" });
});

export default router;
