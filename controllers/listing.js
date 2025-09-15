const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}

module.exports.renderNewForm =(req, res) => {
    res.render("listings/new.ejs");
}
module.exports.renderShowListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: { path: "author" }
        })
        .populate("owner");

    if (!listing) {
        req.flash("error", "No list found");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next)  => {
    //if(!req.body.listing){
    //     throw new ExpressError(400,"Send Data For Listing");
    // }

    // let result = listingSchema.validate(req.body);
    // console.log(result);
    // if(result.error) {
    //     throw new ExpressError(400,result.error);
    // }
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;//as id and user of the usr is store by default by passport
    await newListing.save();
    req.flash("success", "New Listing Created!!");
    res.redirect("/listings");
};

module.exports.editListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "No list found");
        return res.redirect("/listings"); //return is neceesary or error
    }
    res.render("listings/edit.ejs", { listing });
};

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success", "Listing Updated!!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    req.flash("success", " Listing Deleted!!");
    // console.log(deletedListing);
    res.redirect("/listings");
};