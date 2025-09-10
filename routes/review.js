const express = require("express");
const router = express.Router({mergeParams: true});
const ExpressError = require("../utils/ExpressError");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync");
const {reviewSchema} = require("../schema.js");


const validateReview = (req,res,next) => {
    let {error} = reviewSchema.validate(req.body);

    if(error) {
        throw new ExpressError(400,error);
    }else{
        next();
    }
}


//review
//post
router.post("/", wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newreview = new Review(req.body.review);

    listing.reviews.push(newreview);
    await newreview.save();
    await listing.save();

    console.log("review saved");
    //res.send("new review saved");
    req.flash("success", " New Review Created!!");
    res.redirect(`/listings/${listing._id}`);

}));

//delete review route
router.delete(
    "/:reviewId",
    wrapAsync(async (req, res) => {
        let { id ,reviewId} = req.params;
        await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
        await Review.findByIdAndDelete(reviewId)
        req.flash("success", "Review Deleted!!");

        res.redirect(`/listings/${id}`);
    })
);

module.exports = router;