export function setupCategoryFilters() {
  const categoryFilters = document.querySelectorAll(".category-filter");
  const toolCards = document.querySelectorAll(".tool-card");
  const searchInput = document.getElementById("tool-search");
  const clearSearchBtn = document.getElementById("clear-search");
  const noResults = document.getElementById("no-results");

  let state = {
    category: "all",
    query: ""
  };

  function updateGrid() {
    let visibleCount = 0;

    toolCards.forEach((card) => {
      const categories = JSON.parse(card.getAttribute("data-categories"));
      const name = card.getAttribute("data-name");
      const description = card.getAttribute("data-description");

      const matchesCategory = state.category === "all" || categories.includes(state.category);
      const matchesSearch = state.query === "" || 
                            name.includes(state.query) || 
                            description.includes(state.query);

      if (matchesCategory && matchesSearch) {
        card.classList.remove("hidden");
        visibleCount++;
      } else {
        card.classList.add("hidden");
      }
    });

    if (visibleCount === 0) {
      noResults.classList.remove("hidden");
    } else {
      noResults.classList.add("hidden");
    }
  }

  // Category Filter Events
  categoryFilters.forEach((filter) => {
    filter.addEventListener("click", () => {
      categoryFilters.forEach((btn) => {
        btn.classList.remove("filter-active", "btn-primary");
        btn.classList.add("btn-outline");
      });
      
      filter.classList.add("filter-active", "btn-primary");
      filter.classList.remove("btn-outline");

      state.category = filter.getAttribute("data-category");
      updateGrid();
    });
  });

  // Search Input Events
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.query = e.target.value.toLowerCase().trim();
      
      if (state.query.length > 0) {
        clearSearchBtn.classList.remove("hidden");
      } else {
        clearSearchBtn.classList.add("hidden");
      }
      
      updateGrid();
    });
  }

  // Clear Search Event
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      searchInput.value = "";
      state.query = "";
      clearSearchBtn.classList.add("hidden");
      updateGrid();
      searchInput.focus();
    });
  }
}