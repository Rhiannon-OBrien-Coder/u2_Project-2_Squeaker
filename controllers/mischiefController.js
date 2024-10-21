const Mischief = require('../models');

const getMischiefs = async (req, res) => {
    try {
        const mischief = await Mischief.find()
        res.json(mischief)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getMischiefById = async (req, res) => {
    try {
        const { id } = req.params;
        const mischief = await Mischief.findById(id)
        if (mischief) {
            return res.json(mischief);
        }
        return res.status(404).send('Mischief with the specified ID does not exist');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

  module.exports = {
    getMischiefs,
    getMischiefById,
}