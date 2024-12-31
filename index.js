const form1 = document.querySelector(".form1");
const form2 = document.querySelector(".form2");
const form3 = document.querySelector(".form3");
const form4 = document.querySelector(".form4");
const form5 = document.querySelector(".form5");
const form6 = document.querySelector(".form6");
const modal = document.querySelector(".modal");
const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const modal3 = document.querySelector(".modal3");
const modal4 = document.querySelector(".modal4");
const modalBtn = document.querySelector(".modalBtn");
const modalBtn1 = document.querySelector(".modalBtn1");
const modalBtn2 = document.querySelector(".modalBtn2");
const modalBtn3 = document.querySelector(".modalBtn3");
const modalBtn4 = document.querySelector(".modalBtn4");
const modalFinish = document.querySelector(".modalFinish");

let aciveElement = document.querySelector(".active");
let nextElement = aciveElement.nextElementSibling;

const key1 = "santa";
const key2 = "christmas";
const key3 = "grinch";
const key4 = "elf";
const key5 = "winter";
const key6 = "snow";

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

modalBtn.addEventListener("click", handlClick);

function handlClick(event) {
  event.preventDefault();
  aciveElement.classList.remove("active");
  nextElement.classList.add("active");
  aciveElement = document.querySelector(".active");
  nextElement = aciveElement.nextElementSibling;
  modal.classList.add("is-active");
}

form2.addEventListener("submit", handleSubmit2);

function handleSubmit2(event) {
  event.preventDefault();
  const form = event.target;
  const answer = form.elements.answer.value.toLowerCase();
  aciveElement = document.querySelector(".active");
  nextElement = aciveElement.nextElementSibling;
  if (answer === key2) {
    modal1.classList.remove("is-active");
  } else {
    console.log("wrong answer");
  }
  form.reset();
}

modalBtn1.addEventListener("click", handlClick1);

function handlClick1(event) {
  event.preventDefault();
  aciveElement.classList.remove("active");
  nextElement.classList.add("active");
  aciveElement = document.querySelector(".active");
  nextElement = aciveElement.nextElementSibling;
  modal1.classList.add("is-active");
}

form3.addEventListener("submit", handleSubmit3);

function handleSubmit3(event) {
  event.preventDefault();
  const form = event.target;
  const answer = form.elements.answer.value.toLowerCase();
  aciveElement = document.querySelector(".active");
  nextElement = aciveElement.nextElementSibling;
  if (answer === key3) {
    modal2.classList.remove("is-active");
  } else {
    console.log("wrong answer");
  }
  form.reset();
}

modalBtn2.addEventListener("click", handlClick2);

function handlClick2(event) {
  event.preventDefault();
  aciveElement.classList.remove("active");
  nextElement.classList.add("active");
  aciveElement = document.querySelector(".active");
  nextElement = aciveElement.nextElementSibling;
  modal2.classList.add("is-active");
}

form4.addEventListener("submit", handleSubmit4);

function handleSubmit4(event) {
  event.preventDefault();
  const form = event.target;
  const answer = form.elements.answer.value.toLowerCase();
  aciveElement = document.querySelector(".active");
  nextElement = aciveElement.nextElementSibling;
  if (answer === key4) {
    modal3.classList.remove("is-active");
  } else {
    console.log("wrong answer");
  }
  form.reset();
}

modalBtn3.addEventListener("click", handlClick3);

function handlClick3(event) {
  event.preventDefault();
  aciveElement.classList.remove("active");
  nextElement.classList.add("active");
  aciveElement = document.querySelector(".active");
  nextElement = aciveElement.nextElementSibling;
  modal3.classList.add("is-active");
}

form5.addEventListener("submit", handleSubmit5);

function handleSubmit5(event) {
  event.preventDefault();
  const form = event.target;
  const answer = form.elements.answer.value.toLowerCase();
  aciveElement = document.querySelector(".active");
  nextElement = aciveElement.nextElementSibling;
  if (answer === key5) {
    modal4.classList.remove("is-active");
  } else {
    console.log("wrong answer");
  }
  form.reset();
}
modalBtn4.addEventListener("click", handlClick4);

function handlClick4(event) {
  event.preventDefault();
  aciveElement.classList.remove("active");
  nextElement.classList.add("active");
  aciveElement = document.querySelector(".active");
  nextElement = aciveElement.nextElementSibling;
  modal4.classList.add("is-active");
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
