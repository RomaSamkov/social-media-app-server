import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { getFeedPosts, getUserPosts } from "../controllers/posts.js";

const router = express.Router();

/* ------- Read ------- */

router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* ------- Update ------- */

router.patch("/:id/like", verifyToken);

export default router;
