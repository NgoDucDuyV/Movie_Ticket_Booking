import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const post = process.env.post || 8090;
app.listen(post, () => {
  console.log(`chạy server thành côgn trên cổng ${post}`);
});
