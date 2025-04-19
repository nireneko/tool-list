export function setupCategoryFilters() {
  const categoryFilters = document.querySelectorAll(".category-filter");
  const toolCards = document.querySelectorAll(".tool-card");

  categoryFilters.forEach((filter) => {
    filter.addEventListener("click", () => {
      categoryFilters.forEach((btn) => btn.classList.remove("filter-active"));
      filter.classList.add("filter-active");

      const selectedCategory = filter.getAttribute("data-category");

      toolCards.forEach((card) => {
        const categories = JSON.parse(card.getAttribute("data-categories"));

        if (
          selectedCategory === "all" ||
          categories.includes(selectedCategory)
        ) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
}