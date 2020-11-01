// const express = require("express");
// const bodyParser = require("body-parser");
//
// const app = express();
//
// app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));

// Set r to the root
let r = document.querySelector(':root');
let numColors = 2;

// const addColor1 = (ev)=>{
//   ev.preventDefault();  // Stop form from submitting
//   let color1 = {
//     hexcode: document.getElementById('color1').value;
//   }
// }

// Get a variable value
function getValue() {
  let rs = getComputedStyle(r);
  console.log("The value of --color1: " + rs.getPropertyValue('--color1'));
}

// Set a variable value
function setValue() {
  let hexcode1 = document.getElementById('color1').value;
  let hexcode2 = document.getElementById('color2').value;

  r.style.setProperty('--color1', hexcode1);
  console.warn('Color 1: ' + hexcode1);

  r.style.setProperty('--color2', hexcode2);
  console.warn('Color 1: ' + hexcode2);
}

// Listen to submit button
// document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('submit-btn').addEventListener('click', setValue);
// });
