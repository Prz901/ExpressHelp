const express = require("express"),
  router = express.Router();

// Controller import
const getOneDoctor = require("./getOneDoctor");
router.get("/:id", getOneDoctor);
//router.post("/", createClient);

exports.router = router;
