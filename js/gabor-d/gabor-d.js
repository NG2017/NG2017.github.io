const db = {
  titles: {
    menu_title: {
      name: " Pizza Menu",
      name_element: "h2",
      name_class: "custom-h2-title"
    },
    sub_title: {
      name: "Fine dining, casual and rustic",
      name_element: "h3",
      name_class: "custom-h3-subtitle"
    }
  },
  pizzas_left: {
    1: {
      name: "Margherita",
      n_element: "h3",
      price: "$15",
      pice_element: "h4",
      ingredients: "Real fresh Italian Mozzarella cheese, tomato sauce, and basil leaf.",
      ing_element: "div"
    },
    2: {
      name: "Biancaneve",
      n_element: "h3",
      price: "$21",
      pice_element: "h4",
      ingredients: "Extra virgin olive oil base, real Italian Mozzarella, San Marzano cherry tomatoes, slices of Parma ham, parmesan shavings and topped with fresh rocket leaves.",
      ing_element: "div"
    },
    3: {
      name: "Cotto & Funghi",
      n_element: "h3",
      price: "$17",
      pice_element: "h4",
      ingredients: "Fresh Mozzarella, honey roasted ham, a selection of mixed wild mushrooms, smoked Mozzerella and torn basil leaves.",
      ing_element: "div"
    },
    4: {
      name: "Pizza Al Pollo Rosmarino",
      n_element: "h3",
      price: "$23",
      pice_element: "h4",
      ingredients: "Tomato sauce, fresh mozzarella, mixed wild mushrooms, with strips of oven roasted chicken breast marinated with a dry white wine and fresh rosemary.",
      ing_element: "div"
    },
    5: {
      name: "Pizza Verdure",
      n_element: "h3",
      price: "$19",
      pice_element: "h4",
      ingredients: "Tomato sauce base, fresh Mozzarella, grilled courgettes, grilled aubergines, oven roasted red peppers and red onion garnished with fresh basil leaf.",
      ing_element: "div"
    },
  },
  pizzas_right: {
    1: {
      name: "Quattro Formaggi",
      n_element: "h3",
      price: "$20",
      pice_element: "h4",
      ingredients: "Extra virgin olive oil base, fresh Italian Mozzarella, Gorgonzola (Italian Blue Cheese), smoked mozzarella, parmesan, and fresh basil leaves",
      ing_element: "div"
    },
    2: {
      name: "Pizza Marinara",
      n_element: "h3",
      price: "$16",
      pice_element: "h4",
      ingredients: "Truly Napolitano pizza using no cheese, just tomato sauce, garlic, oregano, fresh basil.",
      ing_element: "div"
    },
    3: {
      name: "Capricciosa",
      n_element: "h3",
      price: "$22",
      pice_element: "h4",
      ingredients: "Tomato sauce, fresh mozzarella, oven roasted honey ham, mixed wild mushrooms, artichokes, Kalamata olives, and fresh basil leaves.",
      ing_element: "div"
    },
    4: {
      name: "Diavola",
      n_element: "h3",
      price: "$18",
      pice_element: "h4",
      ingredients: "Tomato sauce, fresh Mozzarella, fresh chillies, spicy Italian style pepperoni, and torn fresh basil leaves.",
      ing_element: "div"
    },
    5: {
      name: "Tutta Carne (All Meat)",
      n_element: "h3",
      price: "$24",
      pice_element: "h4",
      ingredients: "Tomato sauce, American pepperoni, Pancetta (Italian streaky bacon), honey roast ham Italian sausage, oven roasted smoked chicken, chorizo sausage.",
      ing_element: "div"
    },
  },
};
// type less
function makeMe(element) {
  return document.createElement(element);
}
function prepareMyDiv() {
  let mySpace = document.getElementsByClassName("gabor-d");
  // Title and subtitle
  let firstWordInSpan = makeMe("div");
  firstWordInSpan.appendChild(document.createTextNode("Giovanni's"));
  firstWordInSpan.className = "just-the";

  // container for the whole menu
  let menuContainer = makeMe('div');
  menuContainer.className = "row-for-columns";
  // left Side
  let pizzasLeft = makeMe('div');
  pizzasLeft.className = "left";
  // right Side
  let pizzasRight = makeMe('div');
  pizzasRight.className = "right";
  // adding them to the container
  menuContainer.appendChild(pizzasLeft);
  menuContainer.appendChild(pizzasRight);
  // Filling my area
  mySpace[0].innerHTML = "";
  mySpace[0].insertAdjacentElement('afterbegin', firstWordInSpan);
  mySpace[0].insertAdjacentElement('beforeend', menuContainer);
  // let the BEAST work
  frankeinstein();
}
// pizza in the DOM
function frankensteinFood(side, name, price, ing) {
  let leftSide = document.getElementsByClassName(side);
  let columnForPizzas = makeMe("div");
  columnForPizzas.className = "column-for-pizzas";
  let nameAndPrice = makeMe("div");
  nameAndPrice.className = "name-and-price";
  let pizzaName = makeMe("h3");
  pizzaName.appendChild(document.createTextNode(name));
  let pizzaPrice = makeMe("h4");
  pizzaPrice.appendChild(document.createTextNode(price));
  let ingredients = makeMe("div");
  ingredients.className = "ingredients";
  ingredients.appendChild(document.createTextNode(ing));
  nameAndPrice.appendChild(pizzaName);
  nameAndPrice.appendChild(pizzaPrice);
  columnForPizzas.appendChild(nameAndPrice);
  columnForPizzas.appendChild(ingredients);
  leftSide[0].insertAdjacentElement("beforeend", columnForPizzas);
}
// my little BEAST 
function frankeinstein() {
  for (i = 1; i < Object.keys(db.pizzas_left).length; i++) {
    frankensteinFood("left", db.pizzas_left[i].name, db.pizzas_left[i].price, db.pizzas_left[i].ingredients)
  }
  for (i = 1; i < Object.keys(db.pizzas_right).length; i++) {
    frankensteinFood("right", db.pizzas_right[i].name, db.pizzas_right[i].price, db.pizzas_right[i].ingredients)
  }
}
// smash my code after loaded
window.addEventListener("load", prepareMyDiv);