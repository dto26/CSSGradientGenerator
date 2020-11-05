//jshint esversion:6

/* =============================================== */
/* ==== SETUP NPM PACKAGES AND EXPRESS SERVER ==== */
/* =============================================== */
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const domtoimage = require('dom-to-image');
const ejsLint = require('ejs-lint');
const PORT = 3000;

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

/* ============================== */
/* ==== SET GLOBAL VARIABLES ==== */
/* ============================== */
const homeStartingContent = "temp";
const aboutContent = "temp";
const contactContent = "temp";
/* ============================== */

app.get("/", function (req, res) {
  res.render("home", {
    startingContent: homeStartingContent,
  });
});

app.post("/", function (req, res) {
  console.log(req.body.hexcode1);
  console.log(req.body.hexcode2);
})

app.get("/about", function (req, res) {
  res.render("about", { aboutContent: aboutContent});
});

app.get("/contact", function (req, res) {
  res.render("contact", { contactContent: contactContent});
});


/* ===================================== */
/* ==== CONVERT BACKGROUND TO IMAGE ==== */
/* ===================================== */
// let node = document.querySelector('.bg-gradient-0');
//
// btnImage.addEventListener('click', function() {
//   domtoimage.toPng(node).then(function (dataUrl) {
//       let img = new Image();
//       img.src = dataUrl;
//       document.body.appendChild(img);
//   }).catch(function (error) {
//       console.error('oops, something went wrong!', error);
//   });
// })


// Set r to the root
// let r = document.querySelector(':root');
// let numColors = 2;
//
// const btnGradient = document.getElementById('gradient--btn');
// const btnImage = document.getElementById('image--btn');
//
// const addColor1 = (ev)=>{
//   ev.preventDefault();  // Stop form from submitting
//   let color1 = {
//     hexcode: document.getElementById('color1').value;
//   }
// }

// Get a variable value
// function getValue() {
//   let rs = getComputedStyle(r);
//   console.log("The value of --color1: " + rs.getPropertyValue('--color1'));
// }
//
// // Set a variable value
function setValue() {
  // let hexcode1 = document.getElementById('color1').value;
  // let hexcode2 = document.getElementById('color2').value;
  //
  // r.style.setProperty('--color1', hexcode1);
  // console.warn('Color 1: ' + hexcode1);
  //
  // r.style.setProperty('--color2', hexcode2);
  // console.warn('Color 1: ' + hexcode2);
}

// Listen to submit button
// document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('submit-btn').addEventListener('click', setValue);
// });

/* =================================== */
/* ==== LISTEN TO LOCAL HOST 3000 ==== */
/* =================================== */
app.listen(PORT, function(error) {
  if (error) throw error;
  console.log(`Server started on Port: ${PORT}`);
});
