import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
  const { category } = req.query; // e.g., ?category=business
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
      params: {
        country: "us",
        category: category || "general",
        apiKey: process.env.NEWS_API_KEY,
      },
    });
    res.json(response.data.articles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch articles" });
  }
});

export default router;
