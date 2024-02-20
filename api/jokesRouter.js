const express = require('express');
const router = express.Router();
const Joke = require('./jokesModel')

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const deletedJoke = await Joke.deleteJoke(id);
    res.status(200).json(deletedJoke)
})

module.exports = router