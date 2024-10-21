const {Cheese} = require('../models');

const getCheeses = async (req, res) => {
    try {
        const cheese = await Cheese.find({})
        res.json(cheese)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getCheesesBySqueak = async (req, res) => {
    try { 
        const cheese = await Cheese.find( {'squeak': req.params.squeak})
        console.log(cheese)
        if (cheese) {
            return res.json(cheese);
        }
        return res.status(404).send('Cheese not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
  }

const newCheese = async (req, res) => {
    try {
        const cheese = await new Comment(req.body)
        await cheese.save()
        return res.status(201).json({
            cheese,
        });
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

const deleteCheese = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Comment.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Cheese deleted");
        }
        throw new Error("Cheese not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateCheese = async (req, res) => {
    try {
        let { id } = req.params;
        let cheese = await Cheese.findByIdAndUpdate(id, req.body, { new: true })
        if (cheese) {
            return res.status(200).json(cheese)
        }
        throw new Error("Cheese not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getCheeses,
    getCheesesBySqueak,
    newCheese,
    deleteCheese,
    updateCheese
}