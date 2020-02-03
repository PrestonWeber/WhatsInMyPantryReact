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
          .findOne({ _id: req.params.ingId })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    removeAll: function(req, res) {
      res.send("Success");
      db.Pantry
        // .find({ user: req.params.useremail })
        // .then(dbModel => dbModel.removeAll())
        // .deleteMany({ user: req.params.useremail })
        // .catch(err => res.status(422).json(err));
        .deleteMany({ user: req.params.useremail }, function(err, result) {
          if (err) {
            res.send(err);
          } else {
            res.send(result);
          }
        });

    }
}