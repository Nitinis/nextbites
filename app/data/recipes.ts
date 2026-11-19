export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  description: string;
  image: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
    description: "Crisp edges, sweet tomato, and a little fresh basil.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1200&q=85",
    ingredients: ["Pizza dough", "½ cup crushed tomatoes", "200g fresh mozzarella", "Fresh basil", "Olive oil"],
    steps: [
      "Heat the oven as hot as it will go, with a baking tray or pizza stone inside.",
      "Stretch the dough, spread on a thin layer of tomato, and add torn mozzarella.",
      "Bake until the crust is blistered and the cheese is bubbling. Finish with basil and olive oil.",
    ],
  },
  {
    id: "lemony-pasta",
    title: "Lemony Green Pasta",
    emoji: "🍝",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Italian",
    description: "A silky, bright weeknight bowl with plenty of greens.",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",
    ingredients: ["200g pasta", "2 cups spinach", "1 lemon", "⅓ cup grated parmesan", "2 tbsp olive oil"],
    steps: [
      "Cook the pasta in salted water until al dente, saving a mug of the cooking water.",
      "Blend the spinach, lemon zest and juice, parmesan, olive oil, and a splash of pasta water.",
      "Toss the sauce with the hot pasta, loosening with more pasta water as needed.",
    ],
  },
  {
    id: "summer-salad",
    title: "The Big Green Salad",
    emoji: "🥗",
    minutes: 15,
    difficulty: "Easy",
    cuisine: "Fresh & simple",
    description: "Crunchy, herby, and finished with a sharp little dressing.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    ingredients: ["4 cups mixed greens", "1 cucumber", "1 cup cherry tomatoes", "2 tbsp olive oil", "1 tbsp lemon juice"],
    steps: [
      "Wash and dry the greens. Slice the cucumber and halve the tomatoes.",
      "Whisk the olive oil and lemon juice with a pinch of salt and black pepper.",
      "Toss everything together just before serving and add your favorite herbs.",
    ],
  },
  {
    id: "fluffy-pancakes",
    title: "Sunday Pancakes",
    emoji: "🥞",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "Breakfast",
    description: "Soft, golden stacks made for slow mornings.",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=85",
    ingredients: ["1 cup all-purpose flour", "1 tbsp sugar", "1 tsp baking powder", "¾ cup milk", "1 egg"],
    steps: [
      "Whisk the flour, sugar, and baking powder in a bowl.",
      "Add the milk and egg, then stir just until the batter comes together.",
      "Cook small scoops in a buttered pan over medium heat, flipping when bubbles appear.",
    ],
  },
  {
    id: "coconut-curry",
    title: "Golden Coconut Curry",
    emoji: "🍛",
    minutes: 40,
    difficulty: "Medium",
    cuisine: "South Asian inspired",
    description: "A warming, gently spiced curry with creamy coconut.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=85",
    ingredients: ["1 tbsp oil", "1 onion, diced", "2 tbsp curry paste", "1 can coconut milk", "2 cups chopped vegetables"],
    steps: [
      "Warm the oil in a pot and cook the onion until soft.",
      "Stir in the curry paste, then add the coconut milk and vegetables.",
      "Simmer until the vegetables are tender. Serve with rice or warm flatbread.",
    ],
  },
  {
    id: "sesame-noodles",
    title: "Sesame Noodle Bowl",
    emoji: "🍜",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "East Asian inspired",
    description: "Chewy noodles tossed in a savory, nutty sauce.",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=85",
    ingredients: ["200g noodles", "2 tbsp sesame paste", "1 tbsp soy sauce", "1 tsp rice vinegar", "Spring onions"],
    steps: [
      "Cook the noodles according to the package directions, then drain.",
      "Whisk the sesame paste, soy sauce, vinegar, and a splash of warm water until smooth.",
      "Toss the noodles in the sauce and top with sliced spring onions.",
    ],
  },
  {
    id: "avocado-toast",
    title: "Avocado Toast, Upgraded",
    emoji: "🥑",
    minutes: 12,
    difficulty: "Easy",
    cuisine: "Brunch",
    description: "Creamy avocado, good toast, and a bright squeeze of lemon.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",
    ingredients: ["2 slices sourdough", "1 ripe avocado", "½ lemon", "Chili flakes", "Flaky salt"],
    steps: [
      "Toast the sourdough until crisp and golden.",
      "Mash the avocado with lemon juice and a generous pinch of salt.",
      "Spread over the toast and finish with chili flakes.",
    ],
  },
  {
    id: "roast-chicken",
    title: "Sunday Roast Chicken",
    emoji: "🍗",
    minutes: 75,
    difficulty: "Medium",
    cuisine: "Comfort food",
    description: "Golden skin, tender meat, and a pan full of good juices.",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=85",
    ingredients: ["1 whole chicken", "1 lemon", "3 garlic cloves", "2 tbsp softened butter", "Rosemary and thyme"],
    steps: [
      "Heat the oven to 220°C. Pat the chicken dry and season inside and out.",
      "Rub the butter over the skin and tuck the lemon, garlic, and herbs into the cavity.",
      "Roast until the thickest part reaches 74°C, then rest for 15 minutes before carving.",
    ],
  },
];

export function getRecipe(id: string) {
  return recipes.find((recipe) => recipe.id === id);
}