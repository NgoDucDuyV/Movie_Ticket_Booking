import express from "express";
const router = express.Router();

router.use("/auth", (req, res) => {
  console.log("vào auth thành côgn");
});

export default router;
