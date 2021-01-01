const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const validateUpdateAdminInput = require("../../validation/updateAdmin");
const Admin = require("../../models/Admin");
const B_Lang = require("../../models/Languages/BeginnerLang");
const I_Lang = require("../../models/Languages/IntermediateLang");
const A_Lang = require("../../models/Languages/AdvancedLang");
const { useReducer } = require("react");

router.post("/admin-add", async (req, res) => {
  const doesLangExist = await B_Lang.exists({});
  if (!doesLangExist) {
    let B_La = new B_Lang({ LangsID: 2 });
    let I_La = new I_Lang({ LangsID: 3 });
    let A_La = new A_Lang({ LangsID: 4 });
    B_La.save();
    I_La.save();
    A_La.save();
  }

  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Admin.findOne({ email: req.body.email }).then((admin) => {
    if (admin) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newAdmin = new Admin({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newAdmin.password, salt, (err, hash) => {
          if (err) throw err;
          newAdmin.password = hash;
          newAdmin
            .save()
            .then((admin) => {
              return res.status(200).json({
                message: "Admin added successfully. Refreshing data...",
              });
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

router.post("/admin-data", (req, res) => {
  Admin.find({})
    .select(["-password"])
    .then((admin) => {
      if (admin) {
        return res.status(200).send(admin);
      }
    });
});

router.post("/admin-delete", (req, res) => {
  Admin.deleteOne({ _id: req.body._id }).then((admin) => {
    if (admin) {
      return res.status(200).json({
        message: "Admin deleted successfully. Refreshing data...",
        success: true,
      });
    }
  });
});

router.post("/admin-update", (req, res) => {
  const { errors, isValid } = validateUpdateAdminInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const _id = req.body._id;
  Admin.findOne({ _id }).then((admin) => {
    if (admin) {
      if (req.body.password !== "") {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(req.body.password, salt, (err, hash) => {
            if (err) throw err;
            admin.password = hash;
          });
        });
      }
      let update = {
        name: req.body.name,
        email: req.body.email,
        password: admin.password,
      };
      Admin.update({ _id: _id }, { $set: update }, function (err, result) {
        if (err) {
          return res.status(400).json({ message: "Unable to update admin." });
        } else {
          return res.status(200).json({
            message: "Admin updated successfully. Refreshing data...",
            success: true,
          });
        }
      });
    } else {
      return res.status(400).json({ message: "Now admin found to update." });
    }
  });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  Admin.findOne({ email }).then((admin) => {
    if (!admin) {
      return res.status(404).json({ email: "Email not found" });
    }
    bcrypt.compare(password, admin.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: admin.id,
          name: admin.name,
        };
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res.status(400).json({ password: "Password incorrect" });
      }
    });
  });
});

router.get("/:id", async (req, res) => {
  fetch(
    "http://196.188.106.101:8181/jaktech/application/api/customer_login.php?phone=" +
      req.params.id
  ).then(function (response) {
    response.text().then(function (text) {
      res.send(text);
    });
  });
});
module.exports = router;
