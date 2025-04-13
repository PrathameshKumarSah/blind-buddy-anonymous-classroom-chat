import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getMessages, getUsersForSidebar, sendMessage, createGroup, getGroups } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);
router.post("/send/:id", protectRoute, sendMessage);

// API Routes
router.post("/create-group", protectRoute, createGroup);
router.get("/groups", protectRoute, getGroups);

router.get("/:id", protectRoute, getMessages);
// router.post("/groups", async (req, res) => {
//     const { name, members } = req.body;
//     const group = new Group({ name, members });
//     await group.save();
//     res.status(201).json(group);
// });

export default router;
