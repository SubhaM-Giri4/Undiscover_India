const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware");

router.get("/signup", function (req, res) {
    res.render("users/signup.ejs");
});

router.post("/signup",
    wrapAsync(async function (req, res) {
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
            res.redirect("/listings");   // not res.render("/listings")
        })

    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
    })
);

router.get("/login", (req, res) => {
    res.render("users/login.ejs");
});

router.post("/login", saveRedirectUrl,//we save the curr path after login we will come here
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true
    }),
    async (req, res) => {
        req.flash("success", "Welcome back!");
        let redirectUrl = res.locals.redirectUrl || "/listings";//as it can be empty at when we login from listing page as by islogged in func will help us to save path ..but here it will not call that function only as we are in home page
        res.redirect(redirectUrl);//we will jump to the path where we enter after login
    }
);

//to logout user
router.get("/logout", (req, res,next) => {
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success", "You are logged out!");
        res.redirect("/listings");
    })
})


module.exports = router;