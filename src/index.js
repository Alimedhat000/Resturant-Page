import "./styles/main-page.css";
import { generateMainContent } from "./main-page";

document.addEventListener("DOMContentLoaded", () => {
  const ContentDiv = document.querySelector("#content");
  const heroContent = generateMainContent();
  ContentDiv.appendChild(heroContent);
});
