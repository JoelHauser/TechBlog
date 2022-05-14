const withAuth = (req, res, next) => {
  // if (!req.session.body_id) {
  //   res.redirect("/login");
  // } else {
    next();
  // }
};

module.exports = withAuth;
