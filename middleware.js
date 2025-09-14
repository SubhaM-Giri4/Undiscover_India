
module.exports.isLoggedIn = (req, res,next) => {
    if(!req.isAuthenticated()){
        //console.log(req);//show many thing has path and all must read
        //path has origin URL
        req.session.redirectUrl = req.originalUrl;//we store the url info
        req.flash("error", "You are not logged in.");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req,res,next) => {//we are saving the path as after we have login we have to come to this path ..as it may delete we need to save it
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}