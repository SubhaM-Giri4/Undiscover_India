const User = require("../models/user.js");

module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
}

module.exports.signup = async function (req, res, next) {
    try{
        let {username, email, password} = req.body;
        const newUser = new User ({username, email});
        const registeredUser = await User.register(newUser, password);
        //console.log(registeredUser);
        req.login(registeredUser,(err) =>{//this is used as when we do sign up we want to get automatically login so we do this
            if (err){
                return next(err);
            }
            req.flash("success", "Welcome to Swaagatin!");
            return  res.redirect("/listings");   // not res.render("/listings") also Without return, Express might keep executing and cause a second response.
        })

    } catch (e) {
        req.flash("error", e.message);
        return res.redirect("/signup");
    }
};

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
}

module.exports.login = async (req, res) => {
    req.flash("success", "Welcome back!");
    let redirectUrl = res.locals.redirectUrl || "/listings";//as it can be empty at when we login from listing page as by islogged in func will help us to save path ..but here it will not call that function only as we are in home page
    res.redirect(redirectUrl);//we will jump to the path where we enter after login
}

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if(err) {
            return next(err);
        }
        req.flash("success", "You are logged out!");
        return res.redirect("/listings");
    })
}