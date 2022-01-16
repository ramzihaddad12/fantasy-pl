const Player = require("../models/player");

exports.findAll = (req, res) => {
  Player.getAll(req.params.teamName, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving players"
      });
    else {
      // res.send(data);
      res.render('team', { players: data, title: 'All blogs', teamName: req.params.teamName });
    }
  });
};

exports.findOneByName = (req, res) => {
    Player.findByName(req.params.teamName, req.params.playerName, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Player with name ${req.params.playerName}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Player with name " + req.params.playerName
          });
        }
      } else {
          //res.send(data);
          res.render('player', { player: data, title: 'All blogs'});

      }
    });
};