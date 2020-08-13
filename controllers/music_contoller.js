module.exports.home = (req, res) => {
  console.log("music home");

  return res.render("music", { title: "Musify | Enjoy Music" });
};
