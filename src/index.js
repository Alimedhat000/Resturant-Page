import "./styles/main-page.css";
import "./styles/menu-page.css";
import { generateMainContent } from "./main-page";
import { generateMenuContent } from "./menu-page";

function removeActiveButtonClass() {
  navButtons.forEach((button) => {
    button.classList.remove("active-button");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const ContentDiv = document.querySelector("#content");
  const heroContent = generateMainContent();
  ContentDiv.appendChild(heroContent);
});

const navButtons = document.querySelectorAll("#nav-buttons button");
const home_button = document.querySelector(".home-btn");
const menu_button = document.querySelector(".menu-btn");
const about_button = document.querySelector(".about-btn");
const contact_button = document.querySelector(".contact-btn");

home_button.addEventListener("click", () => {
  const ContentDiv = document.querySelector("#content");
  ContentDiv.innerHTML = "";
  const heroContent = generateMainContent();
  ContentDiv.appendChild(heroContent);
  removeActiveButtonClass();
  home_button.classList.add("active-button");
});

menu_button.addEventListener("click", () => {
  const ContentDiv = document.querySelector("#content");
  ContentDiv.innerHTML = "";
  const menuContent = generateMenuContent();
  ContentDiv.appendChild(menuContent);
  removeActiveButtonClass();
  menu_button.classList.add("active-button");
});
