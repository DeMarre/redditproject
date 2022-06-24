const express = require("express");
const app = express();
const port = 3008;
const path = require("path");
const { MongoClient, ServerApiVersion } = require("mongodb");

app.set("create", "./redditcreate");
app.set("home", "./reddithome");
// app.set("views", "./views");

// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json())

// const url =const uri = "mongodb+srv://dcandler:<password>@cluster0.bfvzs.mongodb.net/?retryWrites=true&w=majority";

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

app.get("/create", (req, res) => {
  res.render("create");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/reddithome.html"));
});
// app.post("/home", (req, res) => {
//   console.log(req.body);
// });

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`);
});
// app.post("/signin");

// app.get("/signup", (req, res) => {
//   res.render("signup");
// });
// app.post("/signup", (req, res) => {
//   Users[req.body.username] = req.body.password;
//   res.cookie("username", req.body.username);
//   console.log(Users);
//   res.send("thanks for signing in!");
// });

// create database
//database is called " "
//the collection inside the database is called " "
// user table. fields (userId,password)
// create post table?
// create signin  ref: auth page
// start from backend then button/form on front in

// post route for imgs
// app.post - create,sign up users
// app.post- update users
// sign in,login
// mongoDB . users table
// userID /password
// +- upvote
// connect front end to backend
// create upvotes
// create card for title, img and content . importance (#)

// MVP -most viable product
//look atpost, add a post

// database
// api - fetch
// card needs likes(upvote) img, content.

// create option for users to make user name to post/upvote
