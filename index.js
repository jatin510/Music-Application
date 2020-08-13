const express = require("express");
const PORT = process.env.PORT || 7000;
const app = express();
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");

const db = require("./config/mongoose");
const cookieParser = require("cookie-parser");
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static("./assets"));
app.use(expressLayouts);
app.set("layout extractScripts", true);
app.set("layout extractStyles", true);
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// routes
app.use("/", require("./routes"));

app.listen(PORT, (err) => {
  if (err) return console.log("Error starting up server", err);

  console.log(`Server running on http://localhost:${PORT}`);
});
