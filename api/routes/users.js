import express from "express";
import { 
   deleteUser, 
   getUser, 
   getUsers, 
   updateUser 
} from "../controllers/user.js";

import { 
   verifyAdmin, 
   verifyToken, 
   verifyUser 
} from "../util/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication",verifyToken,(req, res, next) => {
//     res.send("hello user, You are logged in!!");
// });

// router.get("/checkUser/:id",verifyUser,(req, res, next) => {
//     res.send("hello user, You are logged in and you can delete your account!");
// });

// router.get("/checkadmin/:id",verifyAdmin,(req, res, next) => {
//     res.send("hello Admin, You are logged in and you can delete all account!");
// });

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;