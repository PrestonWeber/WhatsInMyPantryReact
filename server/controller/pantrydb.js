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
        console.log(req.params.ingId);
        db.Pantry
          .deleteOne({ _id: req.params.ingId })
          // .then(dbModel => dbModel.deleteOne())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    removeAll: function(req, res) {
      db.Pantry
        .deleteMany()
        .then(dbModel => dbModel.removeAll())
    }
}