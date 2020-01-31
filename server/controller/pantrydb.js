const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Pantry
          .find({ user: req.params.useremail })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Pantry
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Pantry
          .findOne({ _id: req.params.ingId })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    removeAll: function(req, res) {
      db.Pantry
        .find({ user: req.params.useremail })
        .then(dbModel => dbModel.removeAll())
        .catch(err => res.status(422).json(err));

    }
}