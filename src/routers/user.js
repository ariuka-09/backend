import { Router } from "express";
import { createUser, createUsers, deleteUserById, getUser, getUserById, updateUserById } from "../controllers/user.js";

export const UserRouter = Router();
UserRouter
    .post("/student", createUser)
    .post("/students", createUsers)
    .get('/student', getUser)
    .get('/student/:id',getUserById)
    .delete('/student', deleteUserById)
    .put('/student', updateUserById)