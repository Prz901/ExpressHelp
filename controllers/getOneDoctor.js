const callbackFunction = (req, res) => {
  res.send("O id do medico e isso aqui " + req.params.id);
};

module.exports = callbackFunction;
