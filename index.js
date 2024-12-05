const form1 = document.querySelector(".form1");
const form2 = document.querySelector(".form2");
const form3 = document.querySelector(".form3");
const form4 = document.querySelector(".form4");
const form5 = document.querySelector(".form5");
const form6 = document.querySelector(".form6");
const form7 = document.querySelector(".form7");
const form8 = document.querySelector(".form8");
const form9 = document.querySelector(".form9");
const form10 = document.querySelector(".form10");

let aciveElement = document.querySelector(".active");
let nextElement = aciveElement.nextElementSibling;
const key1 = "santa";
const key2 = "santa";
const key3 = "santa";
const key4 = "santa";
const key5 = "santa";
const key6 = "santa";
const key7 = "santa";
const key8 = "santa";
const key9 = "santa";
const key10 = "santa";

form1.addEventListener("submit", handleSubmit1);

function handleSubmit1(event) {
  event.preventDefault();
  const form = event.target;
  const answer = form.elements.answer.value.toLowerCase();

  if (answer === key1) {
    aciveElement.classList.remove("active");
    nextElement.classList.add("active");
    aciveElement = document.querySelector(".active");
    nextElement = aciveElement.nextElementSibling;
  } else {
    console.log("wrong answer");
  }

  form.reset();
}

form2.addEventListener("submit", handleSubmit2);

function handleSubmit2(event) {
  event.preventDefault();
  const form = event.target;
  const answer = form.elements.answer.value.toLowerCase();
  aciveElement = document.querySelector(".active");
  nextElement = aciveElement.nextElementSibling;
  if (answer === key2) {
    aciveElement.classList.remove("active");
    nextElement.classList.add("active");
  } else {
    console.log("wrong answer");
  }
  form.reset();
}
form3.addEventListener("submit", handleSubmit3);

function handleSubmit3(event) {
  event.preventDefault();
  const form = event.target;
  const answer = form.elements.answer.value.toLowerCase();
  aciveElement = document.querySelector(".active");
  nextElement = aciveElement.nextElementSibling;
  if (answer === key3) {
    aciveElement.classList.remove("active");
    nextElement.classList.add("active");
  } else {
    console.log("wrong answer");
  }
  form.reset();
}
form4.addEventListener("submit", handleSubmit4);

function handleSubmit4(event) {
  event.preventDefault();
  const form = event.target;
  const answer = form.elements.answer.value.toLowerCase();
  aciveElement = document.querySelector(".active");
  nextElement = aciveElement.nextElementSibling;
  if (answer === key4) {
    aciveElement.classList.remove("active");
    nextElement.classList.add("active");
  } else {
    console.log("wrong answer");
  }
  form.reset();
}
form5.addEventListener("submit", handleSubmit5);

function handleSubmit5(event) {
  event.preventDefault();
  const form = event.target;
  const answer = form.elements.answer.value.toLowerCase();
  aciveElement = document.querySelector(".active");
  nextElement = aciveElement.nextElementSibling;
  if (answer === key5) {
    aciveElement.classList.remove("active");
    nextElement.classList.add("active");
  } else {
    console.log("wrong answer");
  }
  form.reset();
}
form6.addEventListener("submit", handleSubmit6);

function handleSubmit6(event) {
  event.preventDefault();
  const form = event.target;
  const answer = form.elements.answer.value.toLowerCase();
  aciveElement = document.querySelector(".active");
  nextElement = aciveElement.nextElementSibling;
  if (answer === key6) {
    aciveElement.classList.remove("active");
    nextElement.classList.add("active");
  } else {
    console.log("wrong answer");
  }
  form.reset();
}
form6.addEventListener("submit", handleSubmit6);

function handleSubmit6(event) {
  event.preventDefault();
  const form = event.target;
  const answer = form.elements.answer.value.toLowerCase();
  aciveElement = document.querySelector(".active");
  nextElement = aciveElement.nextElementSibling;
  if (answer === key6) {
    aciveElement.classList.remove("active");
    nextElement.classList.add("active");
  } else {
    console.log("wrong answer");
  }
  form.reset();
}
