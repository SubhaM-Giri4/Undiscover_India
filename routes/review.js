const express = require("express");
const router = express.Router({mergeParams: true});
const ExpressError = require("../utils/ExpressError");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync");
const {validateReview, isLoggedIn,isReviewAuthor} = require("../middleware");

const reviewController = require("../controllers/review.js");


//review
//post
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));


//delete review route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview));


module.exports = router;