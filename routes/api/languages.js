const express = require("express");
const AdvancedLang = require("../../models/Languages/AdvancedLang");
const IntermediateLang = require("../../models/Languages/IntermediateLang");
const BeginnerLang = require("../../models/Languages/BeginnerLang");
// const IntermediteLang = require("../../models/Languages/IntermediteLang");
const checkVlidationLang = require("../../validation/contentValidation");
const router = express.Router();

/*/////////////////////////////////////////////////////////////////////////////////////////////////////
 *****************************Beginner Langues API Vocabulary***************************************************************************
 */
// @access   Public
//  @route    GET api/languages/beginner
// @desc     Get all languages structure
router.get("/beginner", async (req, res) => {
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
 *****************************Beginner Langues API Grammar***************************************************************************
 */
router.get("/beginner-grammar", async (req, res) => {
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

router.put("/beginner-lang-grammar", async (req, res) => {
  // const {errors , isValid } = checkVlidationLang(req.body);
  // if(!isValid){
  //     return res.status(400).json(errors)
  // }
  const { grammer, form, example } = req.body;

  const newLang = {
    grammer,
    form,
    example,
  };
  console.log(newLang);
  try {
    let lang = await BeginnerLang.findOne({ LangsID: 2 });
    lang.grammer_.unshift(newLang);
    await lang.save();
    res.status(200).json({ message: "Begginer Grammar Added to the List" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/languges/delete-B_Grammar
// @desc     Delete selected Joke
// @access   Private

router.delete("/delete-B_Grammar/:id", async (req, res) => {
  try {
    let lang = await BeginnerLang.findOne({ LangsID: 2 });
    lang.grammer_ = lang.grammer_.filter(
      (select) => select._id.toString() !== req.params.id
    );

    await lang.save();
    return res.status(200).json({ lang });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
});

// @route    post api/languges/update-B_Grammar
// @desc     update selected Joke
// @access   Private

router.post("/update-B_Grammar", async (req, res) => {
  try {
    let update = {
      _id: req.body._id,
      grammer: req.body.grammer,
      form: req.body.form,
      example: req.body.example,
    };

    let lang = await BeginnerLang.findOne({ LangsID: 2 });
    lang.grammer_ = lang.grammer_.filter(
      (select) => select._id.toString() !== req.body._id
    );
    lang.grammer_.unshift(update);
    await lang.save();
    return res.status(200).json(lang.grammer_);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
});

/*/////////////////////////////////////////////////////////////////////////////////////////////////////
 *****************************Beginner Langues API Tutorial***************************************************************************
 */
router.get("/beginner-tutorial", async (req, res) => {
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

router.put("/beginner-lang-tutorial", async (req, res) => {
  // const {errors , isValid } = checkVlidationLang(req.body);
  // if(!isValid){
  //     return res.status(400).json(errors)
  // }
  const { vedioLink } = req.body;

  const newLang = {
    vedioLink,
  };
  console.log(newLang);
  try {
    let lang = await BeginnerLang.findOne({ LangsID: 2 });
    lang.tutorialVedio.unshift(newLang);
    await lang.save();
    res
      .status(200)
      .json({ message: "Begginer tutorial vedio Added to the List" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/languges/delete-B_tutorial
// @desc     Delete selected Joke
// @access   Private

router.delete("/delete-B_tutorial/:id", async (req, res) => {
  try {
    let lang = await BeginnerLang.findOne({ LangsID: 2 });
    lang.tutorialVedio = lang.tutorialVedio.filter(
      (select) => select._id.toString() !== req.params.id
    );

    await lang.save();
    return res.status(200).json({ lang });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
});

// @route    post api/languges/update-B_tutorial
// @desc     update selected Joke
// @access   Private

router.post("/update-B_tutorial", async (req, res) => {
  try {
    let update = {
      _id: req.body._id,
      vedioLink: req.body.vedioLink,
    };

    let lang = await BeginnerLang.findOne({ LangsID: 2 });
    lang.tutorialVedio = lang.tutorialVedio.filter(
      (select) => select._id.toString() !== req.body._id
    );
    lang.tutorialVedio.unshift(update);
    await lang.save();
    return res.status(200).json(lang.tutorialVedio);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
});

/*/////////////////////////////////////////////////////////////////////////////////////////////////////
 *****************************Beginner Langues API Exercise***************************************************************************
 */
router.get("/beginner-exercise", async (req, res) => {
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

router.put("/beginner-lang-exercise", async (req, res) => {
  // const {errors , isValid } = checkVlidationLang(req.body);
  // if(!isValid){
  //     return res.status(400).json(errors)
  // }
  const { question, mChoiceA, mChoiceB, mChoiceC, mChoiceD, answer } = req.body;

  const newLang = {
    question,
    mChoiceA,
    mChoiceB,
    mChoiceC,
    mChoiceD,
    answer,
  };
  console.log(newLang);
  try {
    let lang = await BeginnerLang.findOne({ LangsID: 2 });
    lang.exercises.unshift(newLang);
    await lang.save();
    res.status(200).json({ message: "beginner Exercise Added to the List" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/languges/delete-B_exercises
// @desc     Delete selected Joke
// @access   Private

router.delete("/delete-B_exercise/:id", async (req, res) => {
  try {
    let lang = await BeginnerLang.findOne({ LangsID: 2 });
    lang.exercises = lang.exercises.filter(
      (select) => select._id.toString() !== req.params.id
    );

    await lang.save();
    return res.status(200).json({ lang });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
});

// @route    post api/languges/update-B_exercises
// @desc     update selected Joke
// @access   Private

router.post("/update-B_exercise", async (req, res) => {
  try {
    let update = {
      _id: req.body._id,
      question: req.body.question,
      mChoiceA: req.body.mChoiceA,
      mChoiceB: req.body.mChoiceB,
      mChoiceC: req.body.mChoiceC,
      mChoiceD: req.body.mChoiceD,
      answer: req.body.answer,
    };
    console.log(update);
    let lang = await BeginnerLang.findOne({ LangsID: 2 });
    lang.exercises = lang.exercises.filter(
      (select) => select._id.toString() !== req.body._id
    );
    lang.exercises.unshift(update);
    await lang.save();
    return res.status(200).json(lang.exercises);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
});

/*/////////////////////////////////////////////////////////////////////////////////////////////////////
 *****************************Intermediate Langues API Vocabulary***************************************************************************
 */
// @access   Public
//  @route    GET api/languages/Intermediate
// @desc     Get all languages structure
router.get("/intermediate", async (req, res) => {
  try {
    const lang = await IntermediateLang.find();
    res.json(lang);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/languages/begin
// @desc     add to begin
// @access   Public

router.put("/Intermediate-lang", async (req, res) => {
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
    let lang = await IntermediateLang.findOne({ LangsID: 3 });
    lang.vocabulary.unshift(newLang);
    await lang.save();
    res
      .status(200)
      .json({ message: "Intermediate Vocabulary Added to the List" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/languges/delete-B_Vocablery
// @desc     Delete selected Joke
// @access   Private

router.delete("/delete-I_Vocablery/:id", async (req, res) => {
  try {
    let lang = await IntermediateLang.findOne({ LangsID: 3 });
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

router.post("/update-I_Vocablery", async (req, res) => {
  try {
    let update = {
      _id: req.body._id,
      english: req.body.english,
      amaharic: req.body.amaharic,
      sound: req.body.sound,
    };

    let lang = await IntermediateLang.findOne({ LangsID: 3 });
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
 *****************************Intermediate Langues API Grammar***************************************************************************
 */
router.get("/Intermediate-grammar", async (req, res) => {
  try {
    const lang = await IntermediateLang.find();
    res.json(lang);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/languages/begin
// @desc     add to begin
// @access   Public

router.put("/Intermediate-lang-grammar", async (req, res) => {
  // const {errors , isValid } = checkVlidationLang(req.body);
  // if(!isValid){
  //     return res.status(400).json(errors)
  // }
  const { grammer, form, example } = req.body;

  const newLang = {
    grammer,
    form,
    example,
  };
  console.log(newLang);
  try {
    let lang = await IntermediateLang.findOne({ LangsID: 3 });
    lang.grammer_.unshift(newLang);
    await lang.save();
    res.status(200).json({ message: "Intermediate Grammar Added to the List" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/languges/delete-I_Grammar
// @desc     Delete selected Joke
// @access   Private

router.delete("/delete-I_Grammar/:id", async (req, res) => {
  try {
    let lang = await IntermediateLang.findOne({ LangsID: 3 });
    lang.grammer_ = lang.grammer_.filter(
      (select) => select._id.toString() !== req.params.id
    );

    await lang.save();
    return res.status(200).json({ lang });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
});

// @route    post api/languges/update-I_Grammar
// @desc     update selected Joke
// @access   Private

router.post("/update-I_Grammar", async (req, res) => {
  try {
    let update = {
      _id: req.body._id,
      grammer: req.body.grammer,
      form: req.body.form,
      example: req.body.example,
    };

    let lang = await IntermediateLang.findOne({ LangsID: 3 });
    lang.grammer_ = lang.grammer_.filter(
      (select) => select._id.toString() !== req.body._id
    );
    lang.grammer_.unshift(update);
    await lang.save();
    return res.status(200).json(lang.grammer_);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
});

/*/////////////////////////////////////////////////////////////////////////////////////////////////////
 *****************************Intermediate Langues API Tutorial***************************************************************************
 */
router.get("/Intermediate-tutorial", async (req, res) => {
  try {
    const lang = await IntermediateLang.find();
    res.json(lang);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/languages/begin
// @desc     add to begin
// @access   Public

router.put("/Intermediate-lang-tutorial", async (req, res) => {
  // const {errors , isValid } = checkVlidationLang(req.body);
  // if(!isValid){
  //     return res.status(400).json(errors)
  // }
  const { vedioLink } = req.body;

  const newLang = {
    vedioLink,
  };
  console.log(newLang);
  try {
    let lang = await IntermediateLang.findOne({ LangsID: 3 });
    lang.tutorialVedio.unshift(newLang);
    await lang.save();
    res
      .status(200)
      .json({ message: "Intermediate tutorial vedio Added to the List" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/languges/delete-I_tutorial
// @desc     Delete selected Joke
// @access   Private

router.delete("/delete-I_tutorial/:id", async (req, res) => {
  console.log(req.body);
  try {
    let lang = await IntermediateLang.findOne({ LangsID: 3 });
    lang.tutorialVedio = lang.tutorialVedio.filter(
      (select) => select._id.toString() !== req.params.id
    );

    await lang.save();
    return res.status(200).json({ lang });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
});

// @route    post api/languges/update-I_tutorial
// @desc     update selected Joke
// @access   Private

router.post("/update-I_tutorial", async (req, res) => {
  try {
    let update = {
      _id: req.body._id,
      vedioLink: req.body.vedioLink,
    };

    let lang = await IntermediateLang.findOne({ LangsID: 3 });
    lang.tutorialVedio = lang.tutorialVedio.filter(
      (select) => select._id.toString() !== req.body._id
    );
    lang.tutorialVedio.unshift(update);
    await lang.save();
    return res.status(200).json(lang.tutorialVedio);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
});

/*/////////////////////////////////////////////////////////////////////////////////////////////////////
 *****************************Intermediate Langues API Exercise***************************************************************************
 */
router.get("/Intermediate-exercise", async (req, res) => {
  try {
    const lang = await IntermediateLang.find();
    res.json(lang);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/languages/begin
// @desc     add to begin
// @access   Public

router.put("/Intermediate-lang-exercise", async (req, res) => {
  // const {errors , isValid } = checkVlidationLang(req.body);
  // if(!isValid){
  //     return res.status(400).json(errors)
  // }
  const { question, mChoiceA, mChoiceB, mChoiceC, mChoiceD, answer } = req.body;

  const newLang = {
    question,
    mChoiceA,
    mChoiceB,
    mChoiceC,
    mChoiceD,
    answer,
  };
  console.log(newLang);
  try {
    let lang = await IntermediateLang.findOne({ LangsID: 3 });
    lang.exercises.unshift(newLang);
    await lang.save();
    res
      .status(200)
      .json({ message: "Intermediate Exercise Added to the List" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/languges/delete-I_exercises
// @desc     Delete selected Joke
// @access   Private

router.delete("/delete-I_exercise/:id", async (req, res) => {
  try {
    let lang = await IntermediateLang.findOne({ LangsID: 3 });
    lang.exercises = lang.exercises.filter(
      (select) => select._id.toString() !== req.params.id
    );

    await lang.save();
    return res.status(200).json({ lang });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
});

// @route    post api/languges/update-I_exercises
// @desc     update selected Joke
// @access   Private

router.post("/update-I_exercise", async (req, res) => {
  try {
    let update = {
      _id: req.body._id,
      question: req.body.question,
      mChoiceA: req.body.mChoiceA,
      mChoiceB: req.body.mChoiceB,
      mChoiceC: req.body.mChoiceC,
      mChoiceD: req.body.mChoiceD,
      answer: req.body.answer,
    };
    console.log(update);
    let lang = await IntermediateLang.findOne({ LangsID: 3 });
    lang.exercises = lang.exercises.filter(
      (select) => select._id.toString() !== req.body._id
    );
    lang.exercises.unshift(update);
    await lang.save();
    return res.status(200).json(lang.exercises);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
});

/*/////////////////////////////////////////////////////////////////////////////////////////////////////
 *****************************Advanced Langues API Vocabulary***************************************************************************
 */
// @access   Public
//  @route    GET api/languages/Advanced
// @desc     Get all languages structure
router.get("/advanced", async (req, res) => {
  try {
    const lang = await AdvancedLang.find();
    res.json(lang);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/languages/begin
// @desc     add to begin
// @access   Public

router.put("/Advanced-lang", async (req, res) => {
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
    let lang = await AdvancedLang.findOne({ LangsID: 4 });
    lang.vocabulary.unshift(newLang);
    await lang.save();
    res.status(200).json({ message: "Advanced Vocabulary Added to the List" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/languges/delete-B_Vocablery
// @desc     Delete selected Joke
// @access   Private

router.delete("/delete-A_Vocablery/:id", async (req, res) => {
  try {
    let lang = await AdvancedLang.findOne({ LangsID: 4 });
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

router.post("/update-A_Vocablery", async (req, res) => {
  try {
    let update = {
      _id: req.body._id,
      english: req.body.english,
      amaharic: req.body.amaharic,
      sound: req.body.sound,
    };

    let lang = await AdvancedLang.findOne({ LangsID: 4 });
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
}); ////////////////////////////////////////////////////////////////////////////////////////////////////// // @route    GET api/languages/Advanced // @desc     Get all languages structure // @access   Public

/*/////////////////////////////////////////////////////////////////////////////////////////////////////
 *****************************Advanced Langues API Grammar***************************************************************************
 */
router.get("/Advanced-grammar", async (req, res) => {
  try {
    const lang = await AdvancedLang.find();
    res.json(lang);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/languages/begin
// @desc     add to begin
// @access   Public

router.put("/Advanced-lang-grammar", async (req, res) => {
  // const {errors , isValid } = checkVlidationLang(req.body);
  // if(!isValid){
  //     return res.status(400).json(errors)
  // }
  const { grammer, form, example } = req.body;

  const newLang = {
    grammer,
    form,
    example,
  };
  console.log(newLang);
  try {
    let lang = await AdvancedLang.findOne({ LangsID: 4 });
    lang.grammer_.unshift(newLang);
    await lang.save();
    res.status(200).json({ message: "Advanced Grammar Added to the List" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/languges/delete-A_Grammar
// @desc     Delete selected Joke
// @access   Private

router.delete("/delete-A_Grammar/:id", async (req, res) => {
  try {
    let lang = await AdvancedLang.findOne({ LangsID: 4 });
    lang.grammer_ = lang.grammer_.filter(
      (select) => select._id.toString() !== req.params.id
    );

    await lang.save();
    return res.status(200).json({ lang });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
});

// @route    post api/languges/update-A_Grammar
// @desc     update selected Joke
// @access   Private

router.post("/update-A_Grammar", async (req, res) => {
  try {
    let update = {
      _id: req.body._id,
      grammer: req.body.grammer,
      form: req.body.form,
      example: req.body.example,
    };

    let lang = await AdvancedLang.findOne({ LangsID: 4 });
    lang.grammer_ = lang.grammer_.filter(
      (select) => select._id.toString() !== req.body._id
    );
    lang.grammer_.unshift(update);
    await lang.save();
    return res.status(200).json(lang.grammer_);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
});

/*/////////////////////////////////////////////////////////////////////////////////////////////////////
 *****************************Advanced Langues API Tutorial***************************************************************************
 */
router.get("/Advanced-tutorial", async (req, res) => {
  try {
    const lang = await AdvancedLang.find();
    res.json(lang);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/languages/begin
// @desc     add to begin
// @access   Public

router.put("/Advanced-lang-tutorial", async (req, res) => {
  // const {errors , isValid } = checkVlidationLang(req.body);
  // if(!isValid){
  //     return res.status(400).json(errors)
  // }
  const { vedioLink } = req.body;

  const newLang = {
    vedioLink,
  };
  console.log(newLang);
  try {
    let lang = await AdvancedLang.findOne({ LangsID: 4 });
    lang.tutorialVedio.unshift(newLang);
    await lang.save();
    res
      .status(200)
      .json({ message: "Advanced tutorial vedio Added to the List" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/languges/delete-A_tutorial
// @desc     Delete selected Joke
// @access   Private

router.delete("/delete-A_tutorial/:id", async (req, res) => {
  try {
    let lang = await AdvancedLang.findOne({ LangsID: 4 });
    lang.tutorialVedio = lang.tutorialVedio.filter(
      (select) => select._id.toString() !== req.params.id
    );

    await lang.save();
    return res.status(200).json({ lang });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
});

// @route    post api/languges/update-A_tutorial
// @desc     update selected Joke
// @access   Private

router.post("/update-A_tutorial", async (req, res) => {
  try {
    let update = {
      _id: req.body._id,
      vedioLink: req.body.vedioLink,
    };

    let lang = await AdvancedLang.findOne({ LangsID: 4 });
    lang.tutorialVedio = lang.tutorialVedio.filter(
      (select) => select._id.toString() !== req.body._id
    );
    lang.tutorialVedio.unshift(update);
    await lang.save();
    return res.status(200).json(lang.tutorialVedio);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
});

/*/////////////////////////////////////////////////////////////////////////////////////////////////////
 *****************************Advanced Langues API Exercise***************************************************************************
 */
router.get("/Advanced-exercise", async (req, res) => {
  try {
    const lang = await AdvancedLang.find();
    res.json(lang);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/languages/begin
// @desc     add to begin
// @access   Public

router.put("/Advanced-lang-exercise", async (req, res) => {
  // const {errors , isValid } = checkVlidationLang(req.body);
  // if(!isValid){
  //     return res.status(400).json(errors)
  // }
  const { question, mChoiceA, mChoiceB, mChoiceC, mChoiceD, answer } = req.body;

  const newLang = {
    question,
    mChoiceA,
    mChoiceB,
    mChoiceC,
    mChoiceD,
    answer,
  };
  console.log(newLang);
  try {
    let lang = await AdvancedLang.findOne({ LangsID: 4 });
    lang.exercises.unshift(newLang);
    await lang.save();
    res.status(200).json({ message: "Advanced Exercise Added to the List" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/languges/delete-A_exercises
// @desc     Delete selected Joke
// @access   Private

router.delete("/delete-A_exercise/:id", async (req, res) => {
  try {
    let lang = await AdvancedLang.findOne({ LangsID: 4 });
    lang.exercises = lang.exercises.filter(
      (select) => select._id.toString() !== req.params.id
    );

    await lang.save();
    return res.status(200).json({ lang });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
});

// @route    post api/languges/update-A_exercises
// @desc     update selected Joke
// @access   Private

router.post("/update-A_exercise", async (req, res) => {
  try {
    let update = {
      _id: req.body._id,
      question: req.body.question,
      mChoiceA: req.body.mChoiceA,
      mChoiceB: req.body.mChoiceB,
      mChoiceC: req.body.mChoiceC,
      mChoiceD: req.body.mChoiceD,
      answer: req.body.answer,
    };
    console.log(update);
    let lang = await AdvancedLang.findOne({ LangsID: 4 });
    lang.exercises = lang.exercises.filter(
      (select) => select._id.toString() !== req.body._id
    );
    lang.exercises.unshift(update);
    await lang.save();
    return res.status(200).json(lang.exercises);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
