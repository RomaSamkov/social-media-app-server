import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { getFeedPosts } from "../controllers/posts.js";

const router = express.Router();

/* ------- Read ------- */

router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken);

/* ------- Update ------- */

router.patch("/:id/like", verifyToken);

export default router;
