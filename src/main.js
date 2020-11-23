/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/*
window.onload = function() {
  console.log("Hello Rigo from the console!");
  console.log("ONOFRE");
  document.querySelector(".alert").style.display="none";
};
*/

window.onload = () => {
  //let randomNumber = Math.random() * 10;
  //console.log("Testing Excuses Generator" + randomNumber);
  //document.querySelector("#the-excuse").innerHTML = randomNumber;

  document
    .querySelector("#btn-generate-excuse")
    .addEventListener("click", () => {
      document.querySelector("#the-excuse").innerHTML = generateExcuse();
    });

  document.querySelector(".alert").style.display = "none";
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  console.log("Testing Excuses Generator" + generateExcuse());
};

let generateExcuse = () => {
  let pronuon = ["A (an)", "The"];

  let subject = [
    "astronaut",
    "demogorgon",
    "cat",
    "ant",
    "Scarlett Johansson",
    "Dog"
  ];

  let action = [
    "took my",
    "eat my",
    "burn my",
    "destroy my",
    "launch my",
    "thew my"
  ];

  let possetion = ["homework", "Vinyls", "underwear", "car", "shoes"];

  let where = ["at home", "in Argentina", "on the street", "in my driveway"];

  let pronuonIndex = Math.floor(Math.random() * pronuon.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  //return "My dog eat my homework";
  return (
    pronuon[pronuonIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex]
  );
};
