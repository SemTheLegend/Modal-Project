"use strict";

const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const btnShowModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");

// Handles opening the modal.
const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
// Handles closing the modal.
const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}


for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener("click", openModal);
}

// For closing both overlay and button to close the modal.
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Handling Keyboard events.
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});
