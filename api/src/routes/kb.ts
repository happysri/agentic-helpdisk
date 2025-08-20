import { Router } from "express";
import { Article } from "../models/Article";

const router = Router();

router.get("/", async (_, res) => {
  const articles = await Article.find();
  res.json(articles);
});

export default router;
