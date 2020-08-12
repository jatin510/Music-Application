const mongoose = require("mongoose");
const chalk = require("chalk");

const connected = chalk.bold.cyan;

const dbUrl = "mongodb://localhost/music_player";

mongoose.connect(dbUrl, { useNewUrlParser: "true" });
const db = mongoose.connection;

db.on("error", console.error.bind(console, "error connecting to mongodb"));

db.once("open", () =>
  console.log(connected("Successfully connected to mongodb"))
);

module.exports = db;
