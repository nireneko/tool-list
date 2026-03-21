export const categoryColors = [
  "badge-primary",
  "badge-secondary",
  "badge-accent",
  "badge-neutral",
  "badge-info",
  "badge-success",
  "badge-warning",
  "badge-error",
];

export const toolColors = [
  "border-primary",
  "border-secondary",
  "border-accent",
  "border-info",
  "border-success",
  "border-warning",
  "border-error",
];

export function createCategoryColorMap(categories) {
  const categoryColorMap = {};
  categories.forEach((category, index) => {
    const colorIndex = index % categoryColors.length;
    categoryColorMap[category] = categoryColors[colorIndex];
  });
  return categoryColorMap;
}