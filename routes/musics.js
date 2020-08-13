const router = require("express").Router();
const musicController = require("../controllers/music_contoller");

router.get("/", musicController.home);
module.exports = router;
