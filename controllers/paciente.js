const express = require("express"),
  router = express.Router();

// Controller import

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(id);
});
//router.post("/", createClient);

exports.router = router;
