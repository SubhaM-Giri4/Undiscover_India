const express = require("express");
const router = express.Router();
const ExpressError = require("../utils/ExpressError");
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync");
const {listingSchema} = require("../schema.js");


const validatelisting = (req,res,next) => {

    let {error} = listingSchema.validate(req.body);
    //console.log(result);
    if(error) {
        throw new ExpressError(400,error);
    }else{
        next();
    }
}


//Index Route
router.get("/",  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}));

//New Route
router.get("/new", (req, res) => {
    res.render("listings/new.ejs");
});

//Show Route
router.get("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs", { listing });
}));


//Create Route
router.post("/", validatelisting,wrapAsync(async (req, res, next)  => {
        //if(!req.body.listing){
        //     throw new ExpressError(400,"Send Data For Listing");
        // }

        // let result = listingSchema.validate(req.body);
        // console.log(result);
        // if(result.error) {
        //     throw new ExpressError(400,result.error);
        // }
        const newListing = new Listing(req.body.listing);
        await newListing.save();
        res.redirect("/listings");
    })
);

//Edit Route
router.get("/:id/edit",  wrapAsync(async (req, res) => {
    if(!req.body.listing){
        throw new ExpressError(400,"Send Data For Listing");
    }
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
}));

//Update Route
router.put("/:id", validatelisting, wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
}));

//Delete Route
router.delete("/:id",  wrapAsync( async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
}));

module.exports = router;