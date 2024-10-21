const { User } = require('../models');

const getUsers = async (req, res) => {
    try {
        const user = await User.find({})
        res.json(user)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getUserByName = async (req, res) => {
    try { 
        const user = await User.find( {'username': req.params.username})
        console.log(user)
        if (user) {
            return res.json(user);
        }
        return res.status(404).send('User not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
  }

const getUsersById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id)
        if (user) {
            return res.json(user);
        }
        return res.status(404).send('User with the specified ID does not exist');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//create a new plant -> POST
const createUser = async (req, res) => {
    try {
        const user = await new User(req.body)
        await user.save()
        return res.status(201).json({
            user
        });
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

//delete -> DELETE
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await User.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("User deleted");
        }
        throw new Error("User not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//update -> PUT
const updateUser = async (req, res) => {
    try {
        let { id } = req.params;
        let user = await User.findByIdAndUpdate(id, req.body, { new: true })
        if (user) {
            return res.status(200).json(user)
        }
        throw new Error("User not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getUsers,
    getUserByName,
    getUsersById,
    createUser,
    deleteUser,
    updateUser
}