const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync");
const {isLoggedIn,isOwner,validatelisting} = require("../middleware.js");

const ListingController = require("../controllers/listing.js");


//Index Route
router.get("/",  wrapAsync(ListingController.index));

//New Route
router.get("/new",isLoggedIn, (ListingController.renderNewForm));

//Show Route
router.get("/:id", wrapAsync(ListingController.renderShowListing));



//Create Route
router.post("/", isLoggedIn,validatelisting,wrapAsync(ListingController.createListing));

//Edit Route
router.get("/:id/edit", isLoggedIn,isOwner, wrapAsync(ListingController.editListing));

//Update Route
router.put("/:id", isLoggedIn,validatelisting, isOwner,wrapAsync(ListingController.updateListing));

//Delete Route
router.delete("/:id", isLoggedIn, isOwner,wrapAsync(ListingController.destroyListing));

module.exports = router;
