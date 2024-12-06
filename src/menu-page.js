function createElementWithClass(tag, className) {
  const element = document.createElement(tag);
  element.classList.add(className);
  return element;
}

export function generateMenuContent() {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu");

  const menuTitle = document.createElement("div");
  menuTitle.classList.add("menu-title");
  menuTitle.textContent = "Our Food Menu";

  const menuGrid = document.createElement("div");
  menuGrid.classList.add("menu-grid");

  const menuCategories = [
    {
      title: "Pizzas",
      items: [
        {
          name: "Margherita Supreme",
          description: "Tomato sauce, mozzarella, fresh basil",
          price: "$25",
        },
        {
          name: "Pepperoni Feast",
          description: "Tomato sauce, mozzarella, loaded with pepperoni",
          price: "$30",
        },
        {
          name: "Four Cheese Delight",
          description: "Mozzarella, cheddar, parmesan, blue cheese",
          price: "$35",
        },
      ],
    },
    {
      title: "Main Courses",
      items: [
        {
          name: "Grilled Chicken Alfredo",
          description:
            "Creamy alfredo sauce, grilled chicken breast, steamed veggies",
          price: "$40",
        },
        {
          name: "Italian Herb Crusted Salmon",
          description:
            "Herb-crusted salmon, roasted potatoes, lemon butter sauce",
          price: "$45",
        },
        {
          name: "Vegetarian Lasagna",
          description:
            "Layered pasta with ricotta, spinach, marinara, and mozzarella",
          price: "$35",
        },
      ],
    },
    {
      title: "Desserts",
      items: [
        {
          name: "Tiramisu Dream",
          description: "Espresso-soaked sponge, mascarpone, cocoa powder",
          price: "$18",
        },
        {
          name: "Chocolate Lava Cake",
          description: "Warm chocolate cake with a gooey center",
          price: "$20",
        },
      ],
    },
    {
      title: "Soups & Salads",
      items: [
        {
          name: "Classic Caesar Salad",
          description: "Romaine lettuce, parmesan, croutons, caesar dressing",
          price: "$20",
        },
        {
          name: "Tomato Basil Soup",
          description: "Rich tomato broth with fresh basil",
          price: "$15",
        },
      ],
    },
  ];

  menuCategories.forEach((category) => {
    menuGrid.appendChild(createMenuItem(category));
  });

  menuContainer.appendChild(menuTitle);
  menuContainer.appendChild(menuGrid);

  return menuContainer;
}

function createMenuItem(category) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const categoryTitle = document.createElement("h3");
  categoryTitle.textContent = category.title;
  menuItem.appendChild(categoryTitle);

  category.items.forEach((dish) => {
    const menuDish = document.createElement("div");
    menuDish.classList.add("menu-dish");

    const dishname = document.createElement("span");
    dishname.textContent = dish.name;

    const dishDescription = document.createElement("span");
    dishDescription.textContent = dish.description;

    const dishPrice = document.createElement("span");
    dishPrice.textContent = dish.price;

    menuDish.appendChild(dishname);
    menuDish.appendChild(dishDescription);
    menuDish.appendChild(dishPrice);
    menuItem.appendChild(menuDish);
  });

  return menuItem;
}
