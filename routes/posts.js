import express from "express";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* ------- Read ------- */

router.get("/", verifyToken);
router.get("/:userId/posts", verifyToken);

/* ------- Update ------- */

router.patch("/:id/like", verifyToken);

export default router;
