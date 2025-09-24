import express from "express"
import { getUserProfile, updateProfile, syncUser, getCurrentUser, followUser } from "../controllers/user.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js"

const router = express.Router();

//public route
router.get("/profile/:username", getUserProfile);

//protectRoute requires Auth
router.post("/sync", protectRoute, syncUser);
router.post("/me", protectRoute, getCurrentUser);
router.put("/profile", protectRoute, updateProfile);
router.post("/follow/:targetUserId", protectRoute, followUser);

export default router;