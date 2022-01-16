const sql = require("./connection");

const Player = function(player) {
    this.player_name = player.player_name;
    this.player_position = player.player_position;
    this.player_cost = player.player_cost;
    this.player_status = player.player_status;
    this.player_minutes = player.player_minutes;
    this.player_total_points = player.player_total_points;
    this.player_total_bonus = player.player_total_bonus;
    this.player_points_per_game = player.player_points_per_game;
    this.player_selection_percentage = player.player_selection_percentage; 
};


Player.findById = (PlayerId, result) => {
  sql.query(`SELECT * FROM Arsenal WHERE player_id = ${PlayerId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Player: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

Player.getAll = (TeamName,  result) => {
  sql.query("SELECT * FROM " + TeamName, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Players: ", res);
    result(null, res);
  });
};

Player.findByName = (TeamName, PlayerName, result) => {
  sql.query("SELECT * FROM " + TeamName + " WHERE player_name = " + "'" + PlayerName+ "'", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Player: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

module.exports = Player;