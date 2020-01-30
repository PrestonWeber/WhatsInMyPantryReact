const db = require("../models");
const axios = require("axios");

module.exports = {
  findAll: function(req, res) {
    db.Recipe.find()
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Recipe.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Recipe.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findApiRecipes: function(req, res) {
    console.log(req.body);
    axios
      .get(req.body.queryUrl)
      .then(function(response) {
        console.log(response);
        res.json(response);
      })
      .catch(function(error) {
        console.log(error);
        res.json(error);
      });
  }
};
