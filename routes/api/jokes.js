const express = require('express');
const isEmpty = require('is-empty');
const Validator = require("validator");
const Jokes = require('../../models/Jokes');
const checkValidation = require('../../validation/contentValidation');
const router = express.Router();

// -------------------------------Router for selected Jokes--------------------------------

// @route    PUT api/profile/selected-jokes
// @desc     add to selected jokes
// @access   Public

router.put('/selected-jokes', async (req, res) => {
  const { errors, isValid } = checkValidation(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const {
    photo_A,photo_B,photo_A_,photo_B_,photo_A__,photo_B__,
    body_A,body_B,body_A_,body_B_,body_A__,body_B__
  } = req.body;

  const newJoke = {
    photo_A,photo_B,photo_A_,photo_B_,photo_A__,photo_B__,
    body_A,body_B,body_A_,body_B_,body_A__,body_B__
  }

  try {

    let jokes = await Jokes.findOne({ JokesID: 1 });
    jokes.SelectedJokes.unshift(newJoke)
    await jokes.save();
    res.json(jokes.SelectedJokes);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/profile/selected-jokes
// @desc     GET all selected jokes
// @access   Public
router.get('/selected-jokes', (req, res) => {
  Jokes.findOne({ JokesID: 1 }).then(data => {
    if (data) {
      return res.status(200).send(data.SelectedJokes);
    }
  });
});

// @route    GET api/jokes
// @desc     Get all Jokes type
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

// @route    DELETE api/profile/selectedJoke
// @desc     Delete selected Joke
// @access   Private

router.delete('/delete-selected_joke/:selected_id', async (req, res) => {

  try {
    const foundSelectedJoke = await Jokes.findOne({ JokesID: 1});
    foundSelectedJoke.SelectedJokes = foundSelectedJoke.SelectedJokes.filter(
      (select) => select._id.toString() !== req.params.selected_id
    );

    await foundSelectedJoke.save();
    return res.status(200).json(foundSelectedJoke);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }

});

// ----------------------------------Router for Family Jokes----------------------------------------

// @route    PUT api/profile/family-jokes
// @desc     add to family jokes
// @access   Public

router.put('/family-jokes', async (req, res) => {
  const { errors, isValid } = checkValidation(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const {
    photo_A,photo_B,photo_A_,photo_B_,photo_A__,photo_B__,
    body_A,body_B,body_A_,body_B_,body_A__,body_B__
  } = req.body;

  const newJoke = {
    photo_A,photo_B,photo_A_,photo_B_,photo_A__,photo_B__,
    body_A,body_B,body_A_,body_B_,body_A__,body_B__
  }

  try {

    let jokes = await Jokes.findOne({ JokesID: 1 });
    jokes.FamilyJokes.unshift(newJoke)
    await jokes.save();
    res.json(jokes.FamilyJokes);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/profile/selected-jokes
// @desc     GET all family jokes
// @access   Public
router.get('/family-jokes', (req, res) => {
  Jokes.findOne({ JokesID: 1 }).then(data => {
    if (data) {
      return res.status(200).send(data.FamilyJokes);
    }
  });
});

// @route    DELETE api/profile/family Joke
// @desc     Delete selected Joke
// @access   Private

router.delete('/delete-family_joke/:family_id', async (req, res) => {

  try {
    const foundFamilyJokes = await Jokes.findOne({ JokesID: 1});
    foundFamilyJokes.FamilyJokes = foundFamilyJokes.FamilyJokes.filter(
      (select) => select._id.toString() !== req.params.family_id
    );

    await foundFamilyJokes.save();
    return res.status(200).json(foundFamilyJokes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }

});

// -------------------------------------Router for office Jokes--------------------------------------

// @route    PUT api/profile/office-jokes
// @desc     add to office jokes
// @access   Public

router.put('/office-jokes', async (req, res) => {
  const { errors, isValid } = checkValidation(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const {
    photo_A,photo_B,photo_A_,photo_B_,photo_A__,photo_B__,
    body_A,body_B,body_A_,body_B_,body_A__,body_B__
  } = req.body;

  const newJoke = {
    photo_A,photo_B,photo_A_,photo_B_,photo_A__,photo_B__,
    body_A,body_B,body_A_,body_B_,body_A__,body_B__
  }

  try {

    let jokes = await Jokes.findOne({ JokesID: 1 });
    jokes.OfficeJokes.unshift(newJoke)
    await jokes.save();
    res.json(jokes.OfficeJokes);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/profile/office-jokes
// @desc     GET all office jokes
// @access   Public
router.get('/office-jokes', (req, res) => {
  Jokes.findOne({ JokesID: 1 }).then(data => {
    if (data) {
      return res.status(200).send(data.officeJokes);
    }
  });
});

// @route    DELETE api/jokes/delete-office_joke
// @desc     Delete office Joke
// @access   Private

router.delete('/delete-office_joke/:office_id', async (req, res) => {

  try {
    const foundOfficeJokes = await Jokes.findOne({ JokesID: 1});
    foundOfficeJokes.OfficeJokes = foundOfficeJokes.OfficeJokes.filter(
      (select) => select._id.toString() !== req.params.office_id
    );

    await foundOfficeJokes.save();
    return res.status(200).json(foundOfficeJokes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error' });
  }

});
module.exports = router;
