/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = () => {
  document.querySelector("#excuse").innerHTML = generarExcusa();
};

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

let generarExcusa = () => {
  let randomIndexWho = Math.floor(Math.random() * who.length);
  const randomWho = who[randomIndexWho];
  console.log(randomWho);

  let randomIndexAct = Math.floor(Math.random() * action.length);
  const randomAction = action[randomIndexAct];
  console.log(randomAction);

  let randomIndexWhat = Math.floor(Math.random() * what.length);
  const randomWhat = what[randomIndexWhat];
  console.log(randomWhat);

  let randomIndexWhen = Math.floor(Math.random() * when.length);
  const randomWhen = when[randomIndexWhen];
  console.log(randomWhen);

  return randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;
};
