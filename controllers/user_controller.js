module.exports.signUp = (req, res) => {
  if (req.isAuthenticated()) {
    return res.redirect("/users/profile" + req.user.id);
  }

  return res.render("signup", { title: "Music Player | Sign Up" });
};

module.exports.login = (req, res) => {
  if (req.isAuthenticated()) {
    return res.redirect("/users/profile" + req.user.id);
  }

  return res.render("login", { title: "Music Player | Login" });
};
