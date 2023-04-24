import express from "express";
const router = express.Router();
import { verifyAdmin } from "../util/verifyToken.js";
import { 
        createRoom, 
        deleteRoom, 
        getRoom,
        getRooms, 
        updateRoom 
       } from "../controllers/room.js";

//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE
router.put("/:id", verifyAdmin, updateRoom);

//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

//GET
router.get("/:id", getRoom);

//GET ALL
router.get("/", getRooms);

export default router;