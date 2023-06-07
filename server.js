const express = require("express");
const session = require("express-session");
const path = require("path");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
app.set("view engine", "ejs");

const port = process.env.PORT || 5500;
app.listen(port, (err) => {
  if (err) {
    console.error(err);
  }

  console.log(`port is running ${port}`);
});

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected to cluster");
  })
  .catch((err) => {
    console.error(err);
  });

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

// // Routes
// const authRoutes = require("./routes/authRoutes");
// const employeeRoutes = require("./routes/employeeRoutes");
// const reviewRoutes = require("./routes/reviewRoutes");

// app.use("/auth", authRoutes);
// app.use("/employees", employeeRoutes);
// app.use("/reviews", reviewRoutes);

// app.get("/", (req, res) => {
//   res.render("login");
// });
app.set("views", path.join(__dirname, "views"));
// Using Connect flash
app.use(flash());
app.use(flashMiddleWare.setFlash);
