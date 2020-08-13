const router = require("express").Router();
const passport = require("passport");

const usersController = require("../controllers/user_controller");

router.get("/", (req, res) => res.send("inside user"));
router.get("/signup", usersController.signUp);
router.get("/login", usersController.login);

module.exports = router;
