"use strict";

const textArea = document.getElementById("input");
const btn = document.getElementById("btn");
const root = document.getElementById("root");
let value = "";

const camelCasing = (word) => {
  let newWord = String(word).trim().toLowerCase().split("_").join("");
  const upperWordIdx = String(word).trim().indexOf("_");
  newWord =
    newWord.substring(0, upperWordIdx) +
    newWord[upperWordIdx].toUpperCase() +
    newWord.substring(upperWordIdx + 1);
  return newWord;
};

const okMaker = (howMany) => {
  let oke = [];
  for (let i = 0; i < howMany; i++) {
    oke.push("[OKE]");
  }
  return oke.join("");
};

const answer = (word) => {
  let newWord = String(word).trim().split("\n");
  let theNewWord = newWord.map((item, idx) => {
    return camelCasing(item).padEnd(20) + okMaker(idx + 1);
  });
  theNewWord = theNewWord.join("\n");
  console.log(theNewWord);
  return theNewWord;
};

textArea.addEventListener("change", (e) => {
  value = e.target.value;
});

btn.addEventListener("click", (e) => {
  if (value) {
    e.preventDefault();
    root.textContent = "";
    const p = document.createElement("p");
    const br = document.createElement("br");
    answer(value);
    p.textContent = "see the answer on console :)";
    root.append(br);
    root.append(p);
  }
});
