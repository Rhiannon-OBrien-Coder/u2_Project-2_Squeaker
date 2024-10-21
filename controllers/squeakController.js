const Squeak = require('../models');

const getUsers = async (req, res) => {
    try {
        const squeak = await Squeak.find()
        res.json(squeak)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getSqueakByUser = async (req, res) => {
    try { 
        const squeak = await Squeak.find( {'user': req.params.username})
        console.log(squeak)
        if (squeak) {
            return res.json(squeak);
        }
        return res.status(404).send('Squeak not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
  }

const getSqueaksById = async (req, res) => {
    try {
        const { id } = req.params;
        const squeak = await Squeak.findById(id)
        if (squeak) {
            return res.json(squeak);
        }
        return res.status(404).send('Squeak with the specified ID does not exist');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//create a new plant -> POST
const createSqueak = async (req, res) => {
    try {
        const squeak = await new Squeak(req.body)
        await squeak.save()
        return res.status(201).json({
            squeak,
        });
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

//delete -> DELETE
const deleteSqueak = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Squeak.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Squeak deleted");
        }
        throw new Error("Squeak not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

//update -> PUT
const updateSqueak = async (req, res) => {
    try {
        let { id } = req.params;
        let squeak = await Squeak.findByIdAndUpdate(id, req.body, { new: true })
        if (squeak) {
            return res.status(200).json(squeak)
        }
        throw new Error("Squeak not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getUsers,
    getSqueakByUser,
    getSqueaksById,
    createSqueak,
    deleteSqueak,
    updateSqueak
}