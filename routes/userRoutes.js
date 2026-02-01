import { allGetUser, createUser, deleteUser, getAllUserById, updateUser }
    from "../controller/userController.js";
import express from "express"

export const userRoutes = express.Router();

userRoutes.get("/", allGetUser)

userRoutes.get("/:id", getAllUserById)

userRoutes.post("/", createUser)

userRoutes.put("/:id", updateUser)

userRoutes.delete("/:id", deleteUser)