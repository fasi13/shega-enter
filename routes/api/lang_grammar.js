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
}); ////////////////////////////////////////////////////////////////////////////////////////////////////// // @route    GET api/languages/Intermediate // @desc     Get all languages structure // @access   Public
/*/////////////////////////////////////////////////////////////////////////////////////////////////////
 *****************************Intermediate Langues API***************************************************************************
 */ router.get("/intermediate-grammar", async (req, res) => {
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

router.put("/intermediate-lang-grammar", async (req, res) => {
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
    let lang = await IntermediteLang.findOne({ LangsID: 3 });
    lang.grammer_.unshift(newLang);
    await lang.save();
    res.status(200).json(lang);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/languges/delete-I_Grammar
// @desc     Delete Intermediate grammer_
// @access   Private

router.delete("/delete-I_Grammar/:id", async (req, res) => {
  try {
    let lang = await IntermediteLang.findOne({ LangsID: 3 });
    lang.grammer_ = lang.grammer_.filter(
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
 */ router.get("/advanced-grammar", async (req, res) => {
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

router.put("/advanced-lang-grammar", async (req, res) => {
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
    let lang = await AdvancedmediteLang.findOne({ LangsID: 4 });
    lang.grammer_.unshift(newLang);
    await lang.save();
    res.status(200).json(lang);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/languges/delete-A_Grammar
// @desc     Delete Advanced grammer_
// @access   Private

router.delete("/delete-A_Grammar/:id", async (req, res) => {
  try {
    let lang = await AdvancedmediteLang.findOne({ LangsID: 4 });
    lang.grammer_ = lang.grammer_.filter(
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
