const Listing = require("./models/listing");
const Review = require("./models/review");
const ExpressError = require("./utils/ExpressError");
const {listingSchema, reviewSchema} = require("./schema");


module.exports.validatelisting = (req,res,next) => {

    let {error} = listingSchema.validate(req.body);
    //console.log(result);
    if(error) {
        throw new ExpressError(400,error);
    }else{
        next();
    }
}
module.exports. validateReview = (req,res,next) => {
    let {error} = reviewSchema.validate(req.body);

    if(error) {
        throw new ExpressError(400,error);
    }else{
        next();
    }
}

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

//middleware to check if its owner or not
module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);

    if(!listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error","You are not the owner of this listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.isReviewAuthor = async (req, res, next) => {
    let {id, reviewId } = req.params;
    let review = await Review.findById(reviewId);

    if(!review.author._id.equals(res.locals.currUser._id)){
        req.flash("error","You are not the author of this review");
        return res.redirect(`/listings/${id}`);
    }
    next();
}
