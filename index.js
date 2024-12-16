const form1 = document.querySelector(".form1");
const form2 = document.querySelector(".form2");
const form3 = document.querySelector(".form3");
const form4 = document.querySelector(".form4");
const form5 = document.querySelector(".form5");
const form6 = document.querySelector(".form6");
const modal = document.querySelector(".modal");
const modalBtn = document.querySelector(".modalBtn");
const modalFinish = document.querySelector(".modalFinish");

let aciveElement = document.querySelector(".active");
let nextElement = aciveElement.nextElementSibling;

const key1 = "a";
const key2 = "a";
const key3 = "a";
const key4 = "a";
const key5 = "a";
const key6 = "a";
const key7 = "a";
const key8 = "a";
const key9 = "a";
const key10 = "a";

modalBtn.addEventListener("click", handlClick);

function handlClick(event) {
  event.preventDefault();
  aciveElement.classList.remove("active");
  nextElement.classList.add("active");
  aciveElement = document.querySelector(".active");
  nextElement = aciveElement.nextElementSibling;
  modal.classList.add("is-active");
}
form1.addEventListener("submit", handleSubmit1);

function handleSubmit1(event) {
  event.preventDefault();
  const form = event.target;
  const answer = form.elements.answer.value.toLowerCase();

  if (answer === key1) {
    modal.classList.remove("is-active");
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
    modal.classList.remove("is-active");
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
    modal.classList.remove("is-active");
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
    modal.classList.remove("is-active");
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
    modal.classList.remove("is-active");
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
    modalFinish.classList.remove("is-active");
  } else {
    console.log("wrong answer");
  }
  form.reset();
}
form6.addEventListener("submit", handleSubmit6);
