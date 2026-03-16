import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import connectDB from "./db/index.js";

import articlesRoute from "./routes/articles.js";
import bookmarksRoute from "./routes/bookmarks.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/articles", articlesRoute);
app.use("/api/bookmarks", bookmarksRoute);

connectDB();

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
