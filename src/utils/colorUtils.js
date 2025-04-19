export const categoryColors = [
  "bg-red-500 text-white",
  "bg-orange-500 text-white",
  "bg-amber-500 text-black",
  "bg-yellow-500 text-black",
  "bg-lime-500 text-black",
  "bg-green-500 text-white",
  "bg-teal-500 text-white",
  "bg-cyan-500 text-black",
  "bg-sky-500 text-white",
  "bg-indigo-500 text-white",
];

export const toolColors = [
  "bg-red-100 border-l-red-500 text-black",
  "bg-orange-100 border-l-orange-500 text-black",
  "bg-amber-100 border-l-amber-500 text-black",
  "bg-yellow-100 border-l-yellow-500 text-black",
  "bg-lime-100 border-l-lime-500 text-black",
  "bg-green-100 border-l-green-500 text-black",
  "bg-teal-100 border-l-teal-500 text-black",
  "bg-cyan-100 border-l-cyan-500 text-black",
  "bg-sky-100 border-l-sky-500 text-black",
  "bg-indigo-100 border-l-indigo-500 text-black",
];

export function createCategoryColorMap(categories) {
  const categoryColorMap = {};
  categories.forEach((category, index) => {
    const colorIndex = index % categoryColors.length;
    categoryColorMap[category] = categoryColors[colorIndex];
  });
  return categoryColorMap;
}