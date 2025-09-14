
module.exports.isLoggedIn = (req, res) => {
    if(!req.isAuthenticated()){
        req.flash("error", "You are not logged in.");
        return res.redirect("/login");
    }
    next();
};