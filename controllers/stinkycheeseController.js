const {StinkyCheese} = require('../models');

const getStinkyCheeses = async (req, res) => {
    try {
        const stinkycheese = await StinkyCheese.find({})
        res.json(stinkycheese)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getStinkyCheesesBySqueak = async (req, res) => {
    try { 
        const stinkycheese = await StinkyCheese.find( {'squeak': req.params.squeak})
        console.log(stinkycheese)
        if (stinkycheese) {
            return res.json(stinkycheese);
        }
        return res.status(404).send('StinkyCheese not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
  }

const newStinkyCheese = async (req, res) => {
    try {
        const stinkycheese = await new StinkyCheese(req.body)
        await stinkycheese.save()
        return res.status(201).json({
            stinkycheese,
        });
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

const deleteStinkyCheese = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await StinkyCheese.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("StinkyCheese deleted");
        }
        throw new Error("StinkyCheese not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateStinkyCheese = async (req, res) => {
    try {
        let { id } = req.params;
        let stinkycheese = await StinkyCheese.findByIdAndUpdate(id, req.body, { new: true })
        if (stinkycheese) {
            return res.status(200).json(stinkycheese)
        }
        throw new Error("StinkyCheese not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getStinkyCheeses,
    getStinkyCheesesBySqueak,
    newStinkyCheese,
    deleteStinkyCheese,
    updateStinkyCheese
}