const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const MONGO_URL = "mongodb://127.0.0.1:27017/Undiscover_India";
// const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
//const {listingSchema , reviewSchema} = require("./schema.js");
//const Review = require("./models/review.js");
const session = require("express-session");
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));


const sessionOptions = {
    secret:"justtest",
    resave: false,
    saveUninitialized: true,
    cookie:{
        expires:Date.now()+7*24*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true,

    }
}

app.use(session(sessionOptions));

app.get("/", (req, res) => {
    res.send("Hi, I am root");
});



app.use("/listings", listings);
app.use("/listings/:id/reviews",reviews);


app.use((err, req, res, next) => {
    let {statusCode = 500 , message = "something went wrong"} = err;
    //res.status(statusCode).send(message);//normal error send
    res.render("error.ejs", { message: message });//we send our custom design error
});

app.listen(8080, () => {
    console.log("server is listening to port 8080");
});