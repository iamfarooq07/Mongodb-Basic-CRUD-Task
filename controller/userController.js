import { User } from "../module/userModule.js";

const allGetUser = async (req, res) => {
    const user = await User.find();

    res.send(user)
}

const getAllUserById = async (req, res) => {
    const user = await User.findById(req.params.id);

    res.send(user)
}

const createUser = async (req, res) => {
    const user = await User.create(req.body);

    res.send(user)
}

const updateUser = async (req, res) => {
    const userId = req.params.id;
    const data = req.body;

    const user = await User.findByIdAndUpdate(userId, data, { new: true })

    res.send(user)
}

const deleteUser = async (req, res) => {

    await User.findByIdAndDelete(req.params.id)

    res.send("Delete Data Done!")
}

export { getAllUserById, allGetUser, createUser, updateUser, deleteUser }