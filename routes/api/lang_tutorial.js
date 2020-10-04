const express = require("express");
const BeginnerLang = require("../../models/Languages/BeginnerLang");
const IntermediteLang = require("../../models/Languages/IntermediteLang");
const AdvancedmediteLang = require("../../models/Languages/AdvancedLang");
const checkVlidationLang = require("../../validation/contentValidation");
const router = express.Router();
// @access   Public
/*/////////////////////////////////////////////////////////////////////////////////////////////////////
 *****************************Beginner Langues API***************************************************************************
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
}); ////////////////////////////////////////////////////////////////////////////////////////////////////// // @route    GET api/languages/Intermediate // @desc     Get all languages structure // @access   Public
/*/////////////////////////////////////////////////////////////////////////////////////////////////////
 *****************************Intermediate Langues API***************************************************************************
 */ router.get("/intermediate-tutorial", async (req, res) => {
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

router.put("/intermediate-lang-tutorial", async (req, res) => {
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
    let lang = await IntermediteLang.findOne({ LangsID: 3 });
    lang.tutorialVedio.unshift(newLang);
    await lang.save();
    res.status(200).json(lang);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/languges/delete-I_tutorial
// @desc     Delete Intermediate tutorialVedio
// @access   Private

router.delete("/delete-I_tutorial/:id", async (req, res) => {
  try {
    let lang = await IntermediteLang.findOne({ LangsID: 3 });
    lang.tutorialVedio = lang.tutorialVedio.filter(
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
 */ router.get("/advanced-tutorial", async (req, res) => {
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

router.put("/advanced-lang-tutorial", async (req, res) => {
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
    let lang = await AdvancedmediteLang.findOne({ LangsID: 4 });
    lang.tutorialVedio.unshift(newLang);
    await lang.save();
    res.status(200).json(lang);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/languges/delete-A_tutorial
// @desc     Delete Advanced tutorialVedio
// @access   Private

router.delete("/delete-A_tutorial/:id", async (req, res) => {
  try {
    let lang = await AdvancedmediteLang.findOne({ LangsID: 4 });
    lang.tutorialVedio = lang.tutorialVedio.filter(
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
