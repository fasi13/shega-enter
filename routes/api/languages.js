const express = require("express");
const BeginnerLang = require("../../models/Languages/BeginnerLang");
const IntermediteLang = require("../../models/Languages/IntermediteLang");
const AdvancedmediteLang = require("../../models/Languages/AdvancedLang");
const checkVlidationLang = require("../../validation/contentValidation");
const router = express.Router(); // @access   Public //  @route    GET api/languages/beginner // @desc     Get all languages structure
////////////////////////////////////////////////////////////////////////////////////////////////////// //

/*/////////////////////////////////////////////////////////////////////////////////////////////////////
 *****************************Beginner Langues API***************************************************************************
 */ router.get("/beginner", async (req, res) => {
  try {
    const lang = await BeginnerLang.find();
    res.json(lang);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/languages/begin
// @desc     add to begin
// @access   Public

router.put("/beginner-lang", async (req, res) => {
  // const {errors , isValid } = checkVlidationLang(req.body);
  // if(!isValid){
  //     return res.status(400).json(errors)
  // }
  const { english, amaharic, sound } = req.body;

  const newLang = {
    english,
    amaharic,
    sound,
  };
  console.log(newLang);
  try {
    let lang = await BeginnerLang.findOne({ LangsID: 2 });
    lang.vocabulary.unshift(newLang);
    await lang.save();
    res.status(200).json({ message: "Begginer Vocabulary Added to the List" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/languges/delete-B_Vocablery
// @desc     Delete selected Joke
// @access   Private

router.delete("/delete-B_Vocablery/:id", async (req, res) => {
  try {
    let lang = await BeginnerLang.findOne({ LangsID: 2 });
    lang.vocabulary = lang.vocabulary.filter(
      (select) => select._id.toString() !== req.params.id
    );

    await lang.save();
    return res.status(200).json({ lang });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
});

// @route    post api/languges/update-B_Vocablery
// @desc     update selected Joke
// @access   Private

router.post("/update-B_Vocablery", async (req, res) => {
  try {
    let update = {
      _id: req.body._id,
      english: req.body.english,
      amaharic: req.body.amaharic,
      sound: req.body.sound,
    };

    let lang = await BeginnerLang.findOne({ LangsID: 2 });
    lang.vocabulary = lang.vocabulary.filter(
      (select) => select._id.toString() !== req.body._id
    );
    lang.vocabulary.unshift(update);
    await lang.save();
    return res.status(200).json(lang.vocabulary);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
}); ////////////////////////////////////////////////////////////////////////////////////////////////////// // @route    GET api/languages/Intermediate // @desc     Get all languages structure // @access   Public
/*/////////////////////////////////////////////////////////////////////////////////////////////////////
 *****************************Intermediate Langues API***************************************************************************
 */ router.get("/intermediate", async (req, res) => {
  try {
    const lang = await IntermediteLang.find();
    res.json(lang);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/languages/intermedite
// @desc     add to Intermedites languages
// @access   Public

router.put("/intermediate-lang", async (req, res) => {
  // const {errors , isValid } = checkVlidationLang(req.body);
  // if(!isValid){
  //     return res.status(400).json(errors)
  // }
  const { english, amaharic, sound } = req.body;

  const newLang = {
    english,
    amaharic,
    sound,
  };
  console.log(newLang);
  try {
    let lang = await IntermediteLang.findOne({ LangsID: 3 });
    lang.vocabulary.unshift(newLang);
    await lang.save();
    res.status(200).json(lang);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/languges/delete-I_Vocablery
// @desc     Delete Intermediate vocabulary
// @access   Private

router.delete("/delete-I_Vocablery/:id", async (req, res) => {
  try {
    let lang = await IntermediteLang.findOne({ LangsID: 3 });
    lang.vocabulary = lang.vocabulary.filter(
      (select) => select._id.toString() !== req.params.id
    );

    await lang.save();
    return res.status(200).json(lang);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
}); ////////////////////////////////////////////////////////////////////////////////////////////////////// // @route    GET api/languages/Advanced // @desc     Get all languages structure // @access   Public

/*/////////////////////////////////////////////////////////////////////////////////////////////////////
 *****************************Advanced Langues API***************************************************************************
 */ router.get("/advanced", async (req, res) => {
  try {
    const lang = await AdvancedmediteLang.find();
    res.json(lang);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/languages/intermedite
// @desc     add to Intermedites languages
// @access   Public

router.put("/advanced-lang", async (req, res) => {
  // const {errors , isValid } = checkVlidationLang(req.body);
  // if(!isValid){
  //     return res.status(400).json(errors)
  // }
  const { english, amaharic, sound } = req.body;

  const newLang = {
    english,
    amaharic,
    sound,
  };
  console.log(newLang);
  try {
    let lang = await AdvancedmediteLang.findOne({ LangsID: 4 });
    lang.vocabulary.unshift(newLang);
    await lang.save();
    res.status(200).json(lang);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/languges/delete-A_Vocablery
// @desc     Delete Advanced vocabulary
// @access   Private

router.delete("/delete-A_Vocablery/:id", async (req, res) => {
  try {
    let lang = await AdvancedmediteLang.findOne({ LangsID: 4 });
    lang.vocabulary = lang.vocabulary.filter(
      (select) => select._id.toString() !== req.params.id
    );

    await lang.save();
    return res.status(200).json(lang);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
});
module.exports = router;
