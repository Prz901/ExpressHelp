const express = require("express"),
  router = express.Router();

const medico = require("./medico");
const paciente = require("./paciente");
router.use("/paciente", paciente.router);

router.use("/medico", medico.router);

module.exports = router;
