import TitlePizzaImage from "./assets/imgs/title-pizza.png";

export function generateMainContent() {
  // Create hero container
  const heroContainer = document.createElement("div");
  heroContainer.classList.add("hero");

  // Create hero text section
  const heroTextContainer = document.createElement("div");
  heroTextContainer.classList.add("hero-text");

  const heroTitle = document.createElement("div");
  heroTitle.classList.add("hero-title");
  heroTitle.textContent = "Lorem, ipsum dolor sit amet";

  const heroSubtext = document.createElement("div");
  heroSubtext.classList.add("hero-subtext");
  heroSubtext.textContent =
    "consectetur adipisicing elit. Neque quam expedita ab eligendi explicabo, placeat ea vel deserunt! Molestias provident ut at laudantium corrupti atque temporibus beatae tempore eos ad?";

  heroTextContainer.appendChild(heroTitle);
  heroTextContainer.appendChild(heroSubtext);

  // Create hero image section
  const heroImgContainer = document.createElement("div");
  heroImgContainer.classList.add("hero-img");

  const heroImage = document.createElement("img");
  heroImage.src = TitlePizzaImage;

  heroImgContainer.appendChild(heroImage);

  // Assemble hero container
  heroContainer.appendChild(heroTextContainer);
  heroContainer.appendChild(heroImgContainer);

  return heroContainer;
}
