const express = require('express');
const isEmpty = require('is-empty');
const Validator = require("validator");
const Jokes = require('../../models/Jokes');
const checkValidation = require('../../validation/contentValidation');
const router = express.Router();

router.put('/selected-jokes', async (req, res) => {
  const { errors, isValid } = checkValidation(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const {
    title,
    JokesBody
  } = req.body;

  const newJoke = {
    title,
    JokesBody
  }

  try {

    let jokes = await Jokes.findOne({ JokesID: 1 });
    jokes.SelectedJokes.unshift(newJoke)
    await jokes.save();
    res.json(jokes);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/selected-jokes-data', (req, res) => {
  Jokes.findOne({ JokesID: 1 }).then(data => {
    if (data) {
      return res.status(200).send(data.SelectedJokes);
    }
  });
});

// @route    GET api/jokes
// @desc     Get all profiles
// @access   Public
router.get('/', async (req, res) => {
  try {
    const jokes = await Jokes.find();
    res.json(jokes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/profile/selSectedJoke
// @desc     Delete selected Joke
// @access   Private

router.delete('/delete-joke/:selected_id', async (req, res) => {

  try {

    const foundSelectedJoke = await Jokes.findOne({ JokesID: 1 });
    foundSelectedJoke.SelectedJokes = foundSelectedJoke.SelectedJokes.filter(
      (exp) => {
        exp._id.toString() !== req.params.exp_id;
      }
    );

    await foundSelectedJoke.save();
    return res.status(200).json(foundSelectedJoke);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }

});

module.exports = router;
