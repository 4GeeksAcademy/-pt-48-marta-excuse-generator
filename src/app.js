/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
/*
window.onload = generarFraseCompleta = () => {
  return randomWho + randomAction + randomWhat + randomWhen;
};
*/
const who = ["The dog", "My grandma", "His turtle", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "the keys", "the car"];
const when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

generarExcusaWho = () => {
  let randomIndex = Math.floor(Math.random() * who.length);
  const randomWho = who[randomIndex];
  console.log(randomWho);
};
generarExcusaAction = () => {
  let randomIndex = Math.floor(Math.random() * action.length);
  const randomAction = action[randomIndex];
  console.log(randomAction);
};
generarExcusaWhat = () => {
  let randomIndex = Math.floor(Math.random() * what.length);
  const randomWhat = what[randomIndex];
  console.log(randomWhat);
};
generarExcusaWhen = () => {
  let randomIndex = Math.floor(Math.random() * when.length);
  const randomWhen = when[randomIndex];
  console.log(randomWhen);
};
generarFraseCompleta = () => {
  return randomWho + randomAction + randomWhat + randomWhen;
};
generar;
