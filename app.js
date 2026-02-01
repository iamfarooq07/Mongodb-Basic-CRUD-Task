// import express from "express";
// import mongoose from "mongoose";

// // Connected MongoDB
// mongoose.connect("mongodb://127.0.0.1:27017/school")
//     .then(() => {
//         console.log("DB connected!");
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// // -------------

// // Create Schema 
// const usersSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
//     gender: String
// })
// // -------------

// const User = mongoose.model("User", usersSchema)

// const app = express();
// const PORT = 3000;

// // middleWear 
// app.use(express.json())
// // -------------


// app.get("/users", async (req, res) => {
//     const user = await User.find();

//     res.send(user)
// })

// app.get("/users/:id", async (req, res) => {
//     const user = await User.findById(req.params.id);

//     res.send(user)
// })

// app.post("/users", async (req, res) => {
//     const user = await User.create(req.body);

//     res.send(user)
// })

// app.put("/users/:id", async (req, res) => {
//     const userId = req.params.id;
//     const userData = req.body;

//     const user = await User.findByIdAndUpdate(userId, userData, { new: true });

//     res.send(user)
// })

// app.delete("/users/:id", async (req, res) => {
//     const userId = req.params.id;
//     await User.findByIdAndDelete(userId);

//     res.send("Deleted!")
// })


// app.listen(PORT, (req, res) => {
//     console.log(`Server Listen on Port ${PORT}`);

// })