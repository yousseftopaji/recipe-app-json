const recipes = [
  {
    title: "Vegetarian Chili",
    ingredients: [
      { NAME: "Black Beans", AMOUNT: "1 can, drained and rinsed" },
      { NAME: "Kidney Beans", AMOUNT: "1 can, drained and rinsed" },
      { NAME: "Tomatoes", AMOUNT: "1 can, diced" },
      { NAME: "Onion", AMOUNT: "1, chopped" },
      { NAME: "Bell Pepper", AMOUNT: "1, chopped" },
      { NAME: "Garlic", AMOUNT: "3 cloves, minced" },
      { NAME: "Chili Powder", AMOUNT: "2 tbsp" },
      { NAME: "Cumin", AMOUNT: "1 tbsp" },
      { NAME: "Vegetable Broth", AMOUNT: "2 cups" },
    ],
    Instructions:
      "Sauté onion, bell pepper, and garlic; add beans, tomatoes, spices, and broth; simmer until flavors meld.",
  },
  {
    title: "Shrimp Scampi",
    ingredients: [
      { NAME: "Shrimp", AMOUNT: "1 lb, peeled and deveined" },
      { NAME: "Linguine", AMOUNT: "8 oz" },
      { NAME: "Butter", AMOUNT: "1/2 cup" },
      { NAME: "Garlic", AMOUNT: "4 cloves, minced" },
      { NAME: "White Wine", AMOUNT: "1/2 cup" },
      { NAME: "Lemon Juice", AMOUNT: "2 tbsp" },
      { NAME: "Parsley", AMOUNT: "2 tbsp, chopped" },
    ],
    Instructions:
      "Cook linguine; sauté shrimp and garlic in butter; add white wine, lemon juice, and parsley; toss with pasta.",
  },
  {
    title: "Vegan Buddha Bowl",
    ingredients: [
      { NAME: "Quinoa", AMOUNT: "1 cup, cooked" },
      { NAME: "Chickpeas", AMOUNT: "1 can, drained and roasted" },
      { NAME: "Kale", AMOUNT: "2 cups, chopped" },
      { NAME: "Carrots", AMOUNT: "2, shredded" },
      { NAME: "Avocado", AMOUNT: "1, sliced" },
      { NAME: "Tahini Dressing", AMOUNT: "1/4 cup" },
    ],
    Instructions:
      "Assemble bowl with quinoa, chickpeas, kale, carrots, and avocado; drizzle with tahini dressing.",
  },
  {
    title: "Spaghetti Bolognese",
    ingredients: [
      { NAME: "Spaghetti", AMOUNT: "200g" },
      { NAME: "Ground Beef", AMOUNT: "300g" },
      { NAME: "Tomato Sauce", AMOUNT: "1 cup" },
      { NAME: "Onion", AMOUNT: "1, finely chopped" },
      { NAME: "Garlic", AMOUNT: "2 cloves, minced" },
      { NAME: "Olive Oil", AMOUNT: "2 tbsp" },
    ],
    Instructions:
      "Cook spaghetti; brown beef, onion, and garlic; add tomato sauce; simmer and serve.",
  },
  {
    title: "Chicken Caesar Salad",
    ingredients: [
      { NAME: "Chicken Breast", AMOUNT: "2, cooked and sliced" },
      { NAME: "Romaine Lettuce", AMOUNT: "1 head, chopped" },
      { NAME: "Croutons", AMOUNT: "1 cup" },
      { NAME: "Parmesan Cheese", AMOUNT: "1/2 cup, grated" },
      { NAME: "Caesar Dressing", AMOUNT: "1/2 cup" },
    ],
    Instructions:
      "Combine lettuce, chicken, croutons, and Parmesan; toss with Caesar dressing; serve.",
  },
  {
    title: "Chocolate Chip Cookies",
    ingredients: [
      { NAME: "All-Purpose Flour", AMOUNT: "2 cups" },
      { NAME: "Butter", AMOUNT: "1 cup, softened" },
      { NAME: "Brown Sugar", AMOUNT: "1 cup" },
      { NAME: "Eggs", AMOUNT: "2" },
      { NAME: "Vanilla Extract", AMOUNT: "1 tsp" },
      { NAME: "Chocolate Chips", AMOUNT: "2 cups" },
    ],
    Instructions:
      "Cream butter and sugar; add eggs and vanilla; mix in flour and chocolate chips; bake.",
  },
  {
    title: "Grilled Salmon",
    ingredients: [
      { NAME: "Salmon Fillets", AMOUNT: "4" },
      { NAME: "Lemon", AMOUNT: "1, sliced" },
      { NAME: "Olive Oil", AMOUNT: "2 tbsp" },
      { NAME: "Garlic Powder", AMOUNT: "1 tsp" },
      { NAME: "Dill", AMOUNT: "1 tbsp, chopped" },
      { NAME: "Salt and Pepper", AMOUNT: "To taste" },
    ],
    Instructions:
      "Marinate salmon with olive oil, garlic powder, dill, salt, and pepper; grill until cooked; garnish with lemon slices.",
  },
  {
    title: "Vegetable Stir-Fry",
    ingredients: [
      { NAME: "Broccoli", AMOUNT: "1 cup, florets" },
      { NAME: "Carrots", AMOUNT: "2, julienned" },
      { NAME: "Bell Pepper", AMOUNT: "1, sliced" },
      { NAME: "Snow Peas", AMOUNT: "1 cup" },
      { NAME: "Soy Sauce", AMOUNT: "3 tbsp" },
      { NAME: "Ginger", AMOUNT: "1 tbsp, minced" },
      { NAME: "Garlic", AMOUNT: "2 cloves, minced" },
    ],
    Instructions:
      "Stir-fry vegetables in a wok with soy sauce, ginger, and garlic until tender-crisp; serve over rice or noodles.",
  },
  {
    title: "Margherita Pizza",
    ingredients: [
      { NAME: "Pizza Dough", AMOUNT: "1 ball" },
      { NAME: "Tomatoes", AMOUNT: "2, sliced" },
      { NAME: "Fresh Mozzarella", AMOUNT: "200g, sliced" },
      { NAME: "Fresh Basil", AMOUNT: "1/2 cup, chopped" },
      { NAME: "Olive Oil", AMOUNT: "2 tbsp" },
      { NAME: "Salt", AMOUNT: "To taste" },
    ],
    Instructions:
      "Roll out pizza dough; top with sliced tomatoes, mozzarella, and basil; drizzle with olive oil; bake until crust is golden.",
  },
];

const recipesJSON = JSON.stringify(recipes, null, 2);
const div = document.getElementById("div");

// Create a text node with the JSON string
const textNode = document.createTextNode(recipesJSON);

// Append the text node to the div
div.appendChild(textNode);
