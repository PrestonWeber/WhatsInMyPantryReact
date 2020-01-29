const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Pantry
          .find()
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
          .findOne({ ObjectId: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    removeAll: function(req, res) {
      db.Pantry
        .deleteMany()
        .then(dbModel => dbModel.removeAll())
    }
}