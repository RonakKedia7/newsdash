import express from "express";
import Bookmark from "../models/Bookmark.js";

const router = express.Router();

/* GET bookmarks */
router.get("/", async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ message: "userId is required" });
    }

    const bookmarks = await Bookmark.find({ userId });

    res.json(bookmarks);
  } catch (error) {
    console.error("GET BOOKMARK ERROR:", error);
    res.status(500).json({ message: "Server error fetching bookmarks" });
  }
});

/* ADD bookmark */
router.post("/", async (req, res) => {
  try {
    const bookmark = new Bookmark(req.body);
    const saved = await bookmark.save();
    res.json(saved);
  } catch (error) {
    console.error("ADD BOOKMARK ERROR:", error);
    res.status(500).json({ message: "Server error adding bookmark" });
  }
});

/* DELETE bookmark */
router.delete("/:id", async (req, res) => {
  try {
    await Bookmark.findByIdAndDelete(req.params.id);
    res.json({ message: "Bookmark deleted" });
  } catch (error) {
    console.error("DELETE BOOKMARK ERROR:", error);
    res.status(500).json({ message: "Server error deleting bookmark" });
  }
});

export default router;
