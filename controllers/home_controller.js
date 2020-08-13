module.exports.home = (req, res) => {
  console.log("home ");

  return res.render("home", { title: "Music Player" });
};
