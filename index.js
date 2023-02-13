"use strict";

const form = document.getElementById("form");
const input = document.querySelector(".main-content__form-input");
const warningMessage = document.querySelector(".warning");
const errorWarning = document.querySelector(".warning-img");
const text = document.querySelector(".main-content__text");
const timeLine = gsap.timeline();

timeLine
  .from(".heading", {
    autoAlpha: 0,
    duration: 1.5,
    delay: 0.2,
    x: 150,
    stagger: {
      each: 0.3,
    },
    ease: "power1.out",
  })
  .from(text, { autoAlpha: 0, duration: 1 }, "-=.5");

///Checking if email is valid
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailVal = input.value;

  //REGEX test
  if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      emailVal
    )
  ) {
    errorMessage();
    shake();
  }
});

//When any key is pressed remove error messages
input.addEventListener("keydown", () => {
  errorWarning.classList.add("hidden");
  warningMessage.classList.add("hidden");
  input.style.border = "";
});

////////FUNCTIONS
function errorMessage() {
  warningMessage.classList.remove("hidden");
  errorWarning.classList.remove("hidden");
  warningMessage.textContent = "Please provide a valid email";
  input.style.border = "1px solid var(--color-soft-red)";
}
function shake() {
  gsap.to(warningMessage, {
    keyframes: [
      { duration: 0.1, x: -4 },
      { duration: 0.1, x: 4 },
      { duration: 0.1, x: -4 },
      { duration: 0.1, x: 4 },
    ],
  });
}
