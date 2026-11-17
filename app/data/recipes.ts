export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  description: string;
  image: string;
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
  },
];