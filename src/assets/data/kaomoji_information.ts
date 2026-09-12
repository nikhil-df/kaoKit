export type Category = {
  id: string;
  label: string;
  value: string;
  icon: string;
};

export const categories: Category[] = [
  {
    id: "animals",
    label: "Cute Critters",
    value: "Animals",
    icon: "🐾",
  },
  {
    id: "negative-emotions",
    label: "Sad & Grumpy",
    value: "Negative Emotions",
    icon: "🥺",
  },
  {
    id: "neutral-emotions",
    label: "Chill & Neutral",
    value: "Neutral Emotions",
    icon: "😐",
  },
  {
    id: "other-types",
    label: "Random Stuff",
    value: "Other Types",
    icon: "✨",
  },
  {
    id: "positive-emotions",
    label: "Happy & Positive",
    value: "Positive Emotions",
    icon: "💖",
  },
  {
    id: "various-actions",
    label: "Actions & Gestures",
    value: "Various Actions",
    icon: "🙌",
  },
];

export const subCategories : string[] = [
  "Anger",
  "Apologizing",
  "Bear",
  "Bird",
  "Cat",
  "Confusion",
  "Dissatisfaction",
  "Dog",
  "Doubt",
  "Embarrassment",
  "Enemies",
  "Faces",
  "Fear",
  "Fish",
  "Food",
  "Friends",
  "Games",
  "Greeting",
  "Hiding",
  "Hugging",
  "Indifference",
  "Joy",
  "Love",
  "Magic",
  "Music",
  "Nosebleeding",
  "Pain",
  "Pig",
  "Rabbit",
  "Running",
  "Sadness",
  "Sleeping",
  "Special",
  "Spider",
  "Surprise",
  "Sympathy",
  "Weapons",
  "Winking",
  "Writing",
];