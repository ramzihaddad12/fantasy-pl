module.exports = app => {
    const players = require("../controllers/controller");
    app.get("/:teamName", players.findAll);
    app.get("/:teamName/:playerName", players.findOneByName);
};