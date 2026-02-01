import express from "express";
import mongoose from "mongoose";
import { userRoutes } from "./routes/userRoutes.js";

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/school")
    .then(() => console.log("DB Connected"))
    .catch(err => console.log(err));

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use("/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Hi");
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
