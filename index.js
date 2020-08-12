const express = require("express");
const PORT = process.env.PORT || 8000;
const app = express();

const db = require("./config/mongoose");
const cookieParser = require("cookie-parser");
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", "./views");

// routes
app.use("/", require("./routes"));

app.listen(PORT, (err) => {
  if (err) return console.log("Error starting up server", err);

  console.log(`Server running on http://localhost:${PORT}`);
});
